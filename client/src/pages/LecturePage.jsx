import { useContext, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import {
  ChapterSelector,
  chapters,
  chapterOptions,
} from "../lecturePageSections/ChapterSelector";
import { chapterOrder } from "../lecturePageSections/lecture-order";
import LectureSelector from "../lecturePageSections/LectureSelector";
import CodeEditor from "../lecturePageSections/CodeEditor";
import { AppContent } from "../context/AppContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import { CheckIcon } from "@chakra-ui/icons";

function LecturePage() {
  const [selectedChapter, setSelectedChapter] = useState("chapter1");
  const [selectedLecture, setSelectedLecture] = useState("0");
  const [isLectureDone, setIsLectureDone] = useState(false);
  const [progress, setProgress] = useState({});
  const [showCongrats, setShowCongrats] = useState(false);
  const hasInitializedCompletion = useRef(false);
  const wasAllComplete = useRef(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { userData, backendUrl, setUserData, setIsLoggedin, getUserData } =
    useContext(AppContent);

  useEffect(() => {
    const chapterParam = searchParams.get("chapter");
    const lectureParam = searchParams.get("lecture");
    const storageKey = `codeu:lastLecture:${userData?._id || "guest"}`;

    if (chapterParam && chapters[chapterParam]) {
      setSelectedChapter(chapterParam);
      const lectureIndex = parseInt(lectureParam ?? "0", 10);
      if (
        Number.isInteger(lectureIndex) &&
        lectureIndex >= 0 &&
        lectureIndex < chapters[chapterParam].length
      ) {
        setSelectedLecture(String(lectureIndex));
      } else {
        setSelectedLecture("0");
      }
    } else {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (
            parsed &&
            typeof parsed.chapter === "string" &&
            chapters[parsed.chapter]
          ) {
            const lectureIndex = Number(parsed.lecture);
            if (
              Number.isInteger(lectureIndex) &&
              lectureIndex >= 0 &&
              lectureIndex < chapters[parsed.chapter].length
            ) {
              setSelectedChapter(parsed.chapter);
              setSelectedLecture(String(lectureIndex));
              return;
            }
          }
        } catch (error) {
          // ignore malformed storage
        }
      }
      setSelectedChapter("chapter1");
      setSelectedLecture("0");
    }
  }, [searchParams, userData?._id]);

  useEffect(() => {
    const storageKey = `codeu:lastLecture:${userData?._id || "guest"}`;
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        chapter: selectedChapter,
        lecture: Number(selectedLecture),
      }),
    );
  }, [selectedChapter, selectedLecture, userData?._id]);

  useEffect(() => {
    const lectureIndex = Number(selectedLecture);
    const progressData = progress?.python;
    const completed =
      progressData &&
      progressData[selectedChapter] &&
      progressData[selectedChapter].includes(lectureIndex);
    setIsLectureDone(Boolean(completed));
  }, [selectedChapter, selectedLecture, progress]);

  useEffect(() => {
    if (userData?.lectureProgress) {
      setProgress(userData.lectureProgress);
    }
  }, [userData]);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const { data } = await axios.get(`${backendUrl}/api/user/progress`, {
          withCredentials: true,
        });
        if (data.success) {
          setProgress(data.lectureProgress || {});
          setUserData((prev) =>
            prev ? { ...prev, lectureProgress: data.lectureProgress } : prev,
          );
        }
      } catch (error) {
        // silent fail; button state will rely on existing userData
      }
    };
    fetchProgress();
  }, [backendUrl, setUserData]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        toast.dismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isAllLecturesComplete = (progressData) => {
    const totalLectures = chapterOrder.reduce(
      (sum, key) => sum + (chapters[key]?.length || 0),
      0,
    );
    const completedLectures = chapterOrder.reduce((sum, key) => {
      const lectureCount = chapters[key]?.length || 0;
      const completed = progressData?.[key] || [];
      const uniqueValid = new Set(
        completed.filter(
          (index) =>
            Number.isInteger(index) &&
            index >= 0 &&
            index < lectureCount,
        ),
      );
      return sum + uniqueValid.size;
    }, 0);

    return totalLectures > 0 && completedLectures >= totalLectures;
  };

  useEffect(() => {
    const allComplete = isAllLecturesComplete(progress?.python);

    if (!hasInitializedCompletion.current) {
      hasInitializedCompletion.current = true;
      wasAllComplete.current = allComplete;
      return;
    }

    if (allComplete && !wasAllComplete.current) {
      setShowCongrats(true);
    }
    wasAllComplete.current = allComplete;
  }, [progress]);

  const toggleLectureComplete = async () => {
    if (!userData) {
      toast.error("Please log in to track your progress");
      navigate("/login");
      return;
    }
    const toastId = toast.loading("Update processing...");
    try {
      axios.defaults.withCredentials = true;
      const payload = {
        courseId: "python",
        chapterKey: selectedChapter,
        lectureIndex: Number(selectedLecture),
      };
      const request = isLectureDone
        ? axios.delete(`${backendUrl}/api/user/progress`, {
            data: payload,
            withCredentials: true,
          })
        : axios.post(`${backendUrl}/api/user/progress`, payload, {
            withCredentials: true,
          });
      const { data } = await request;

      if (data.success) {
        setUserData((prev) =>
          prev
            ? { ...prev, lectureProgress: data.lectureProgress }
            : { lectureProgress: data.lectureProgress },
        );
        setProgress(data.lectureProgress);
        getUserData();
        setIsLectureDone(!isLectureDone);
        if (!isLectureDone && isAllLecturesComplete(data.lectureProgress?.python)) {
          setShowCongrats(true);
        }
        toast.update(toastId, {
          render: isLectureDone
            ? "Lecture marked as incomplete"
            : "Lecture marked as completed",
          type: "success",
          isLoading: false,
          autoClose: 1500,
          closeOnClick: true,
          draggable: true,
        });
      } else {
        toast.update(toastId, {
          render: data.message,
          type: "error",
          isLoading: false,
          autoClose: 2000,
          closeOnClick: true,
          draggable: true,
        });
      }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to update lecture status";
      toast.update(toastId, {
        render: message,
        type: "error",
        isLoading: false,
        autoClose: 2000,
        closeOnClick: true,
        draggable: true,
      });
    }
  };

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(
        `${backendUrl}/api/auth/send-verify-otp`,
      );
      if (data.success) {
        navigate("/email-verify");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${backendUrl}/api/auth/logout`);
      if (data.success) {
        setIsLoggedin(false);
        setUserData(false);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handlePrevLecture = () => {
    const current = parseInt(selectedLecture);
    if (current > 0) {
      setSelectedLecture(String(current - 1));
      return;
    }

    const currentChapterIndex = chapterOrder.indexOf(selectedChapter);
    if (currentChapterIndex > 0) {
      const prevChapter = chapterOrder[currentChapterIndex - 1];
      setSelectedChapter(prevChapter);
      setSelectedLecture(String(chapters[prevChapter].length - 1));
    }
  };

  const handleNextLecture = () => {
    const current = parseInt(selectedLecture);
    const maxIndex = chapters[selectedChapter].length - 1;
    if (current < maxIndex) {
      setSelectedLecture(String(current + 1));
      return;
    }

    const currentChapterIndex = chapterOrder.indexOf(selectedChapter);
    if (currentChapterIndex !== -1 && currentChapterIndex < chapterOrder.length - 1) {
      const nextChapter = chapterOrder[currentChapterIndex + 1];
      setSelectedChapter(nextChapter);
      setSelectedLecture("0");
    }
  };

  const popIn = keyframes`
    0% { transform: scale(0.94); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  `;
  const confettiFall = keyframes`
    0% { transform: translate3d(0, -10px, 0) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    100% { transform: translate3d(0, 260px, 0) rotate(360deg); opacity: 0; }
  `;
  const confettiFloat = keyframes`
    0% { transform: translate3d(0, 0, 0); }
    50% { transform: translate3d(6px, 0, 0); }
    100% { transform: translate3d(-6px, 0, 0); }
  `;

  const confettiPieces = Array.from({ length: 20 }, (_, index) => {
    const left = (index * 7) % 100;
    const delay = (index % 6) * 0.08;
    const duration = 1.2 + (index % 5) * 0.18;
    const size = 6 + (index % 4) * 2;
    const colors = ["#60A5FA", "#A78BFA", "#F472B6", "#34D399", "#FBBF24"];
    return { left, delay, duration, size, color: colors[index % colors.length] };
  });

  return (
    <Box minH="100vh" bg="gray.50">
      <Modal isOpen={showCongrats} onClose={() => setShowCongrats(false)} isCentered>
        <ModalOverlay />
        <ModalContent
          borderRadius="2xl"
          overflow="hidden"
          animation={`${popIn} 200ms ease-out`}
          position="relative"
        >
          <Box position="fixed" inset={0} pointerEvents="none" zIndex={1400}>
            {confettiPieces.map((piece, index) => (
              <Box
                key={`confetti-${index}`}
                as="span"
                position="absolute"
                top="-16px"
                left={`${piece.left}%`}
                width={`${piece.size}px`}
                height={`${piece.size * 1.6}px`}
                borderRadius="2px"
                bg={piece.color}
                opacity={0}
                animation={`${confettiFall} ${piece.duration}s ease-in-out ${piece.delay}s forwards, ${confettiFloat} 0.8s ease-in-out ${piece.delay}s infinite alternate`}
              />
            ))}
          </Box>
          <Box
            bgGradient="linear(to-r, blue.500, purple.500)"
            px={6}
            py={4}
            color="white"
          >
            <ModalHeader p={0} fontSize="2xl" fontWeight="bold">
              Congratulations!
            </ModalHeader>
            <Text mt={1} fontSize="sm" opacity={0.9}>
              You completed every lecture in the course.
            </Text>
          </Box>
          <ModalCloseButton color="white" />
          <ModalBody pt={6} pb={4}>
            <Text fontSize="md" color="gray.700">
              Your certificate is ready. You can print or download it now.
            </Text>
          </ModalBody>
          <ModalFooter gap={3}>
            <Button variant="outline" onClick={() => setShowCongrats(false)}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                setShowCongrats(false);
                navigate("/certificate");
              }}
            >
              Go to Certificate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Combined Header and Navigation Bar */}
      <Box
        bg="white"
        borderBottom="1px solid"
        borderColor="gray.200"
        boxShadow="sm"
        py={4}
        px={6}
      >
        <Flex
          maxW="100%"
          mx="auto"
          align="center"
          justify="space-between"
          gap={6}
        >
          {/* Logo and Title - Left Side */}
          <Flex align="center" gap={3} flexShrink={0}>
            <Box
              w={10}
              h={10}
              rounded="md"
              bg="blue.500"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              fontWeight="bold"
              cursor="pointer"
              onClick={() => navigate("/dashboard")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") navigate("/dashboard");
              }}
            >
              Py
            </Box>
            <Heading as="h1" size="lg" color="gray.800" whiteSpace="nowrap">
              Python
            </Heading>
          </Flex>

          {/* Chapter and Lecture Selectors - Right Side */}
          <Flex gap={4} align="center" flex={1} justify="flex-end">
            <ChapterSelector
              selectedChapter={selectedChapter}
              onChapterChange={(chapter) => {
                setSelectedChapter(chapter);
                setSelectedLecture("0");
              }}
            />
            <LectureSelector
              selectedChapter={selectedChapter}
              selectedLecture={selectedLecture}
              onLectureChange={setSelectedLecture}
              onPrevLecture={handlePrevLecture}
              onNextLecture={handleNextLecture}
              disablePrev={
                chapterOrder.indexOf(selectedChapter) === 0 &&
                Number(selectedLecture) === 0
              }
              disableNext={
                chapterOrder.indexOf(selectedChapter) === chapterOrder.length - 1 &&
                Number(selectedLecture) ===
                  chapters[selectedChapter].length - 1
              }
            />
            <Button
              colorScheme={isLectureDone ? "green" : "blue"}
              variant={isLectureDone ? "solid" : "outline"}
              leftIcon={isLectureDone ? <CheckIcon /> : undefined}
              onClick={toggleLectureComplete}
            >
              {isLectureDone ? "Completed" : "Mark as Done"}
            </Button>
            {userData ? (
              <Box position="relative" role="group">
                <Flex
                  w={10}
                  h={10}
                  align="center"
                  justify="center"
                  rounded="full"
                  bg="yellow.500"
                  color="white"
                  fontWeight="bold"
                  cursor="pointer"
                >
                  {userData.avatarUrl ? (
                    <Box w="100%" h="100%" overflow="hidden" rounded="full">
                      <Image
                        src={userData.avatarUrl}
                        alt="User avatar"
                        w="100%"
                        h="100%"
                        objectFit="cover"
                      />
                    </Box>
                  ) : (
                    <Text>
                      {userData.name ? userData.name[0].toUpperCase() : "U"}
                    </Text>
                  )}
                </Flex>
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  pt={10}
                  zIndex={10}
                  display="none"
                  _groupHover={{ display: "block" }}
                >
                  <Box
                    bg="gray.100"
                    rounded="md"
                    boxShadow="md"
                    as="ul"
                    listStyleType="none"
                    m={0}
                    p={2}
                  >
                    {!userData.isAccountVerified && (
                    <Box
                    as="li"
                    px={3}
                    py={1}
                    cursor="pointer"
                    _hover={{ bg: "gray.200" }}
                    whiteSpace="nowrap"
                    onClick={sendVerificationOtp}
                  >
                    Verify email
                  </Box>
                )}
                  <Box
                    as="li"
                    px={3}
                    py={1}
                    cursor="pointer"
                    _hover={{ bg: "gray.200" }}
                    whiteSpace="nowrap"
                    color="black"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </Box>
                  <Box
                    as="li"
                    px={3}
                    py={1}
                    cursor="pointer"
                    _hover={{ bg: "gray.200" }}
                    whiteSpace="nowrap"
                    color="black"
                    onClick={() => navigate("/dashboard")}
                  >
                    Dashboard
                  </Box>
                  <Box
                    as="li"
                    px={3}
                    py={1}
                    cursor="pointer"
                    _hover={{ bg: "gray.200" }}
                    whiteSpace="nowrap"
                    color="black"
                    onClick={() => navigate("/profile")}
                  >
                    Profile
                  </Box>
                  <Box
                    as="li"
                    px={3}
                    py={1}
                    cursor="pointer"
                    _hover={{ bg: "gray.200" }}
                    whiteSpace="nowrap"
                    color="black"
                    onClick={() => navigate("/certificate")}
                  >
                    Certificate
                  </Box>
                  <Box
                    as="li"
                    px={3}
                    py={1}
                      cursor="pointer"
                      _hover={{ bg: "gray.200" }}
                      whiteSpace="nowrap"
                      color="black"
                      onClick={logout}
                    >
                      Logout
                    </Box>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Button
                variant="outline"
                borderRadius="full"
                px={5}
                colorScheme="gray"
                onClick={() => navigate("/login")}
                rightIcon={
                  <Image src={assets.arrow_icon} alt="Arrow icon" boxSize={4} />
                }
              >
                Login
              </Button>
            )}
          </Flex>
        </Flex>
      </Box>

      {/* Main Content */}
      <Box
        minH="calc(100vh - 200px)"
        bg="#0f0a19"
        color="gray.500"
        px={6}
        py={8}
      >
        <CodeEditor chapter={selectedChapter} lecture={selectedLecture} />
      </Box>
    </Box>
  );
}

export default LecturePage;
