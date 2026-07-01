import { useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Text,
  VStack,
  Textarea,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import NavBarHomePage from "../components/NavBarHomePage";
import { chapters } from "../lecturePageSections/ChapterSelector";
import { chapterOrder } from "../lecturePageSections/lecture-order";

const Profile = () => {
  const {
    userData,
    backendUrl,
    setUserData,
    loadingUser,
    isLoggedin,
    authChecked,
    getUserData,
  } = useContext(AppContent);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [initialAvatarUrl, setInitialAvatarUrl] = useState("");
  const [bio, setBio] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [reviewRating, setReviewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [postingReview, setPostingReview] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (authChecked && !isLoggedin) {
      navigate("/login");
    }
  }, [authChecked, isLoggedin, navigate]);

  useEffect(() => {
    if (userData) {
      setFirstName(userData.firstName || "");
      setLastName(userData.lastName || "");
      setAvatarUrl(userData.avatarUrl || "");
      setInitialAvatarUrl(userData.avatarUrl || "");
      setBio(userData.bio || "");
      setGithubUrl(userData.githubUrl || "");
      setLinkedinUrl(userData.linkedinUrl || "");
    }
  }, [userData]);

  const completedCount = useMemo(() => {
    const progress = userData?.lectureProgress || {};
    let total = 0;
    Object.values(progress).forEach((course) => {
      Object.values(course || {}).forEach((chapterArr) => {
        total += (chapterArr || []).length;
      });
    });
    return total;
  }, [userData]);

  const pythonCompletion = useMemo(() => {
    const progress = userData?.lectureProgress?.python || {};
    const totalLectures = chapterOrder.reduce(
      (sum, key) => sum + (chapters[key]?.length || 0),
      0,
    );
    const completedLectures = chapterOrder.reduce((sum, key) => {
      const lectureCount = chapters[key]?.length || 0;
      const completed = progress[key] || [];
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
    return {
      totalLectures,
      completedLectures,
      isComplete: totalLectures > 0 && completedLectures >= totalLectures,
    };
  }, [userData]);

  const handleSave = async () => {
    if (!isLoggedin) {
      toast.error("Please log in to update your profile");
      return;
    }
    setSaving(true);
    try {
      const payload = {
        firstName,
        lastName,
        bio,
        githubUrl,
        linkedinUrl,
      };
      if (avatarUrl !== initialAvatarUrl) {
        payload.avatarUrl = avatarUrl;
      }
      const { data } = await axios.put(
        `${backendUrl}/api/user/profile`,
        payload,
        { withCredentials: true },
      );
      if (data.success) {
        setUserData(data.userData);
        getUserData();
        toast.success("Profile updated");
        setIsEditing(false);
        setInitialAvatarUrl(data.userData?.avatarUrl || "");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to update profile";
      toast.error(message);
    } finally {
      setSaving(false);
    }
  };

  const saveAvatar = async (nextUrl) => {
    if (!isLoggedin) {
      toast.error("Please log in to update your profile");
      return;
    }
    try {
      const { data } = await axios.put(
        `${backendUrl}/api/user/profile`,
        { avatarUrl: nextUrl },
        { withCredentials: true },
      );
      if (data.success) {
        setUserData(data.userData);
        setInitialAvatarUrl(data.userData?.avatarUrl || "");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || "Failed to update avatar";
      toast.error(message);
    }
  };

  const reviewStorageKey = "codeu:reviews";
  const reviewColors = [
    "bg-blue-100",
    "bg-pink-100",
    "bg-teal-100",
    "bg-orange-100",
    "bg-purple-100",
  ];

  const getReviewName = () => {
    const fullName = `${firstName} ${lastName}`.trim();
    if (fullName) return fullName;
    if (userData?.name) return userData.name;
    return "CodeU Learner";
  };

  const pickReviewColor = (name) => {
    const hash = Array.from(name).reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return reviewColors[hash % reviewColors.length];
  };

  const handlePostReview = () => {
    if (!isLoggedin) {
      toast.error("Please log in to post a review");
      return;
    }
    const trimmed = reviewText.trim();
    if (!reviewRating) {
      toast.error("Please select a star rating");
      return;
    }
    if (trimmed.length < 10) {
      toast.error("Please write at least 10 characters");
      return;
    }
    if (trimmed.length > 300) {
      toast.error("Please keep your review under 300 characters");
      return;
    }
    setPostingReview(true);
    try {
      const name = getReviewName();
      const nextReview = {
        id: `user-${Date.now()}`,
        name,
        rating: reviewRating,
        text: trimmed,
        img: avatarUrl || userData?.avatarUrl || "https://i.pravatar.cc/150?u=codeu-user",
        color: pickReviewColor(name),
        createdAt: new Date().toISOString(),
      };
      const existing = JSON.parse(localStorage.getItem(reviewStorageKey) || "[]");
      const updated = [nextReview, ...(Array.isArray(existing) ? existing : [])].slice(0, 20);
      localStorage.setItem(reviewStorageKey, JSON.stringify(updated));
      setReviewText("");
      setReviewRating(0);
      toast.success("Thanks! Your review is now on the homepage.");
    } catch (error) {
      toast.error("Could not save your review. Please try again.");
    } finally {
      setPostingReview(false);
    }
  };

  if ((loadingUser || !userData) && !authChecked) {
    return (
      <Flex minH="100vh" align="center" justify="center">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (authChecked && !isLoggedin) {
    return null;
  }

  return (
    <Box minH="100vh" bg="white">
      <NavBarHomePage logoSize={40} />
      <Box maxW="1100px" mx="auto" py={10} px={{ base: 4, md: 10 }}>
        <Heading
          textAlign="center"
          fontSize={{ base: "3xl", md: "5xl" }}
          color="#0BC8FF"
          mb={8}
          fontWeight="extrabold"
        >
          Your Profile
        </Heading>

        <Flex gap={10} direction={{ base: "column", md: "row" }}>
          <VStack
            minW={{ base: "100%", md: "280px" }}
            spacing={4}
            align="stretch"
            justify="flex-start"
          >
            <VStack spacing={3} align="center">
              <Avatar
                size="2xl"
                name={firstName || userData.name}
                src={avatarUrl || undefined}
                mx="auto"
              />
              <Button
                colorScheme="yellow"
                color="black"
                onClick={() => fileInputRef.current?.click()}
              >
                Change Photo
              </Button>
              <Input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                display="none"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      const nextUrl = reader.result?.toString() || "";
                      setAvatarUrl(nextUrl);
                      setUserData((prev) =>
                        prev ? { ...prev, avatarUrl: nextUrl } : prev,
                      );
                      saveAvatar(nextUrl);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </VStack>

            <Divider />

            <VStack
              align="start"
              spacing={2}
              color="gray.600"
              fontWeight="semibold"
            >
              <HStack>
                <Text>📘</Text>
                <Text>Lessons Done: {completedCount}</Text>
              </HStack>
              <HStack>
                <Text>🏅</Text>
                <Text>
                  Course Completed: {pythonCompletion.isComplete ? 1 : 0}
                </Text>
              </HStack>
            </VStack>
          </VStack>

          <Box flex="1">
            <VStack spacing={5} align="stretch">
              <FormControl isDisabled={!isEditing}>
                <FormLabel color="gray.800">First Name</FormLabel>
                <Input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  color="black"
                  bg="white"
                  borderColor="gray.300"
                  _placeholder={{ color: "gray.400" }}
                  _focus={{
                    borderColor: "blue.400",
                    boxShadow: "0 0 0 1px #60a5fa",
                  }}
                  _hover={{ borderColor: "blue.400" }}
                  _disabled={{
                    color: "black",
                    bg: "white",
                    opacity: 1,
                    borderColor: "gray.300",
                  }}
                />
              </FormControl>

              <FormControl isDisabled={!isEditing}>
                <FormLabel color="gray.800">Last Name</FormLabel>
                <Input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  color="black"
                  bg="white"
                  borderColor="gray.300"
                  _placeholder={{ color: "gray.400" }}
                  _focus={{
                    borderColor: "blue.400",
                    boxShadow: "0 0 0 1px #60a5fa",
                  }}
                  _hover={{ borderColor: "blue.400" }}
                  _disabled={{
                    color: "black",
                    bg: "white",
                    opacity: 1,
                    borderColor: "gray.300",
                  }}
                />
              </FormControl>

              <FormControl isDisabled={!isEditing}>
                <FormLabel color="gray.800">About</FormLabel>
                <Textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell us about yourself"
                  rows={3}
                  color="black"
                  bg="white"
                  borderColor="gray.300"
                  _placeholder={{ color: "gray.400" }}
                  _focus={{
                    borderColor: "blue.400",
                    boxShadow: "0 0 0 1px #60a5fa",
                  }}
                  _hover={{ borderColor: "blue.400" }}
                  _disabled={{
                    color: "black",
                    bg: "white",
                    opacity: 1,
                    borderColor: "gray.300",
                  }}
                />
              </FormControl>

              <FormControl isDisabled={!isEditing}>
                <FormLabel color="gray.800">GitHub URL</FormLabel>
                <Input
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/username"
                  color="black"
                  bg="white"
                  borderColor="gray.300"
                  _placeholder={{ color: "gray.400" }}
                  _focus={{
                    borderColor: "blue.400",
                    boxShadow: "0 0 0 1px #60a5fa",
                  }}
                  _hover={{ borderColor: "blue.400" }}
                  _disabled={{
                    color: "black",
                    bg: "white",
                    opacity: 1,
                    borderColor: "gray.300",
                  }}
                />
              </FormControl>

              <FormControl isDisabled={!isEditing}>
                <FormLabel color="gray.800">LinkedIn</FormLabel>
                <Input
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="https://www.linkedin.com/in/username/"
                  color="black"
                  bg="white"
                  borderColor="gray.300"
                  _placeholder={{ color: "gray.400" }}
                  _focus={{
                    borderColor: "blue.400",
                    boxShadow: "0 0 0 1px #60a5fa",
                  }}
                  _hover={{ borderColor: "blue.400" }}
                  _disabled={{
                    color: "black",
                    bg: "white",
                    opacity: 1,
                    borderColor: "gray.300",
                  }}
                />
              </FormControl>

              <HStack justify="flex-end" spacing={3} pt={4}>
                {isEditing ? (
                  <>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        if (userData) {
                          setFirstName(userData.firstName || "");
                          setLastName(userData.lastName || "");
                          setAvatarUrl(userData.avatarUrl || "");
                          setBio(userData.bio || "");
                          setGithubUrl(userData.githubUrl || "");
                          setLinkedinUrl(userData.linkedinUrl || "");
                        }
                        setIsEditing(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      colorScheme="blue"
                      onClick={handleSave}
                      isLoading={saving}
                    >
                      Save Changes
                    </Button>
                  </>
                ) : (
                  <Button
                    colorScheme="blue"
                    variant="outline"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit
                  </Button>
                )}
              </HStack>
            </VStack>

            <Box
              mt={10}
              borderRadius="2xl"
              border="1px solid"
              borderColor="gray.200"
              p={{ base: 5, md: 6 }}
              boxShadow="sm"
              bg="white"
            >
              <Heading fontSize="2xl" color="gray.800" mb={2}>
                Write a Review
              </Heading>
              <Text color="gray.500" mb={5}>
                Share your experience and help others discover CodeU.
              </Text>

              <HStack spacing={1} mb={4} onMouseLeave={() => setHoverRating(0)}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Button
                    key={star}
                    variant="ghost"
                    size="lg"
                    aria-label={`Rate ${star} star`}
                    onClick={() => setReviewRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onFocus={() => setHoverRating(star)}
                    onBlur={() => setHoverRating(0)}
                    color={star <= (hoverRating || reviewRating) ? "yellow.400" : "gray.300"}
                    _hover={{ color: "yellow.400" }}
                    minW="auto"
                    px={1}
                  >
                    ★
                  </Button>
                ))}
              </HStack>

              <Textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Describe your experience..."
                rows={4}
                resize="vertical"
                color="gray.800"
                bg="white"
                borderColor="gray.300"
                _focus={{
                  borderColor: "blue.400",
                  boxShadow: "0 0 0 1px #60a5fa",
                }}
                _placeholder={{ color: "gray.400" }}
              />

              <Button
                mt={4}
                colorScheme="blue"
                w="full"
                size="lg"
                onClick={handlePostReview}
                isLoading={postingReview}
              >
                Post Review
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Profile;
