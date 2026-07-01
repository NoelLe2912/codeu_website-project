import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const REVIEWS = [
  {
    id: 1,
    name: "Mehwish",
    rating: 5,
    text: "CodeU has been a game-changer for me. The courses are so well-structured!",
    img: "https://i.pravatar.cc/150?u=11",
    color: "bg-blue-100",
  },
  {
    id: 2,
    name: "Elizabeth Jeff",
    rating: 4,
    text: "I highly recommend this platform to anyone looking to level up their coding skills.",
    img: "https://i.pravatar.cc/150?u=12",
    color: "bg-pink-100",
  },
  {
    id: 3,
    name: "Emily Thomas",
    rating: 5,
    text: "This platform has transformed the way I learn and grow as a developer. The courses are top-notch and the community is incredibly supportive.",
    img: "https://i.pravatar.cc/150?u=13",
    color: "bg-teal-100",
  },
  {
    id: 4,
    name: "Justin Case",
    rating: 5,
    text: "Extremely helpful service and very responsive team.",
    img: "https://i.pravatar.cc/150?u=14",
    color: "bg-orange-100",
  },
  {
    id: 5,
    name: "Sarah Connor",
    rating: 4,
    text: "The interface is intuitive and the transition effects are beautiful.",
    img: "https://i.pravatar.cc/150?u=15",
    color: "bg-purple-100",
  },
];

const STAR_COUNT = 5;
const REVIEW_STORAGE_KEY = "codeu:reviews";

const Feedback = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [dragging, setDragging] = useState(false);
  const [dragY, setDragY] = useState(0);
  const [customReviews, setCustomReviews] = useState([]);

  const startYRef = useRef(0);
  const timerRef = useRef(null);

  const allReviews = useMemo(
    () => [...customReviews, ...REVIEWS],
    [customReviews],
  );
  const len = allReviews.length;

  const updateIndex = useCallback(
    (dir) => {
      setActiveIndex((prev) => (prev + dir + len) % len);
    },
    [len],
  );

  const pauseAuto = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const resumeAuto = useCallback(() => {
    pauseAuto();
    timerRef.current = setInterval(() => updateIndex(1), 4000);
  }, [pauseAuto, updateIndex]);

  useEffect(() => {
    resumeAuto();
    return () => pauseAuto();
  }, [pauseAuto, resumeAuto]);

  useEffect(() => {
    const loadReviews = () => {
      try {
        const stored = JSON.parse(localStorage.getItem(REVIEW_STORAGE_KEY) || "[]");
        const next = Array.isArray(stored)
          ? stored.filter(
              (review) =>
                review &&
                typeof review.name === "string" &&
                typeof review.text === "string" &&
                typeof review.rating === "number",
            )
          : [];
        setCustomReviews(next);
      } catch (error) {
        setCustomReviews([]);
      }
    };

    loadReviews();
    const handleStorage = (event) => {
      if (event.key === REVIEW_STORAGE_KEY) {
        loadReviews();
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const startDrag = useCallback(
    (clientY) => {
      setDragging(true);
      startYRef.current = clientY;
      setDragY(0);
      pauseAuto();
    },
    [pauseAuto],
  );

  const onDrag = useCallback(
    (clientY) => {
      if (!dragging) return;
      const delta = clientY - startYRef.current;
      setDragY(delta);

      if (Math.abs(delta) > 160) {
        updateIndex(delta > 0 ? -1 : 1);
        startYRef.current = clientY;
        setDragY(0);
      }
    },
    [dragging, updateIndex],
  );

  const endDrag = useCallback(() => {
    if (!dragging) return;
    if (Math.abs(dragY) > 50) {
      updateIndex(dragY > 0 ? -1 : 1);
    }
    setDragging(false);
    setDragY(0);
    resumeAuto();
  }, [dragging, dragY, resumeAuto, updateIndex]);

  useEffect(() => {
    if (!dragging) return;

    const handleMouseMove = (e) => onDrag(e.clientY);
    const handleMouseUp = () => endDrag();
    const handleTouchMove = (e) => {
      if (!e.touches[0]) return;
      onDrag(e.touches[0].clientY);
    };
    const handleTouchEnd = () => endDrag();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [dragging, endDrag, onDrag]);

  const calculateStyle = useCallback(
    (index) => {
      let diff = index - activeIndex;

      if (diff > len / 2) diff -= len;
      if (diff < -len / 2) diff += len;

      const yBase = diff * 150;
      const xBase = Math.abs(diff) * -100 + (index === activeIndex ? 40 : 0);
      const scale = 1 - Math.abs(diff) * 0.15;
      const opacity = 1 - Math.abs(diff) * 0.4;
      const blur = Math.abs(diff) * 2;
      const zIndex = 50 - Math.abs(diff) * 10;

      const moveY = dragY * 0.5;

      return {
        transform: `translate3d(${xBase}px, ${yBase + moveY}px, 0) scale(${scale})`,
        opacity,
        zIndex: Math.round(zIndex),
        filter: `blur(${blur}px)`,
        transition: dragging
          ? "none"
          : "transform 0.6s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.4s",
      };
    },
    [activeIndex, dragY, dragging, len],
  );

  const stars = useMemo(
    () => Array.from({ length: STAR_COUNT }, (_, i) => i + 1),
    [],
  );

  return (
    <section>
      <div
        className="min-h-screen flex items-center justify-center p-8 font-sans overflow-hidden select-none"
        onMouseEnter={pauseAuto}
        onMouseLeave={resumeAuto}
      >
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:translate-x-32">
          <div className="lg:w-1/3 space-y-6 z-50">
            <h2 className="text-6xl font-black text-gray-900 leading-tight">
              What Our <br />
              CodeU-ers Says
            </h2>
            <p className="text-gray-500 text-lg">
              Browse real stories from our learners and see how CodeU is helping
              them grow.
            </p>
            <button
              type="button"
              onClick={() => updateIndex(1)}
              className="bg-gradient-to-r from-[#86C5FF] to-[#2E5AA7] text-white px-10 py-4 rounded-lg font-bold shadow-xl active:scale-95 transition-all"
            >
              Read more
            </button>
          </div>

          <div
            className="lg:w-2/3 relative h-[700px] w-full flex items-center justify-center cursor-grab active:cursor-grabbing"
            onMouseDown={(e) => startDrag(e.clientY)}
            onTouchStart={(e) => {
              if (!e.touches[0]) return;
              startDrag(e.touches[0].clientY);
            }}
          >
            <div className="relative w-full max-w-md h-full flex items-center justify-center">
              {allReviews.map((review, index) => {
                const reviewColor = review.color || "bg-blue-100";
                const reviewImg =
                  review.img || "https://i.pravatar.cc/150?u=codeu-default";
                return (
                <button
                  key={review.id}
                  type="button"
                  onClick={() => {
                    if (index === activeIndex) return;
                    setActiveIndex(index);
                  }}
                  className={`bg-white p-6 rounded-xl shadow-[0_15px_45px_rgba(0,0,0,0.08)] flex items-center gap-5 absolute w-full border-l-[6px] will-change-transform transition-all duration-500 hover:shadow-lg ${
                    index === activeIndex
                      ? "border-[#5C45FD] cursor-default"
                      : "border-transparent cursor-pointer"
                  }`}
                  style={calculateStyle(index)}
                >
                  <div
                    className={`flex-shrink-0 p-1 rounded-full shadow-sm ${reviewColor}`}
                  >
                    <img
                      src={reviewImg}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover pointer-events-none"
                    />
                  </div>

                  <div className="flex-1 text-left pointer-events-none">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-900">
                        {review.name}
                      </h3>
                      <div className="flex text-yellow-400">
                        {stars.map((star) => (
                          <svg
                            key={star}
                            className={`w-4 h-4 ${
                              star <= review.rating
                                ? "fill-current"
                                : "text-gray-300 fill-current"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs leading-snug mt-1">
                      {review.text}
                    </p>
                  </div>
                </button>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
