import React, { useEffect, useRef } from "react";
import codeEditorVideo from "../assets/videos/codeEditorVideo.mp4";

const CodeEditor = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      // speed up playback for demo purposes
      vid.playbackRate = 3.0;
      // ensure play is attempted (some browsers block autoplay without muted)
      const playPromise = vid.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // ignore play errors (autoplay policies)
        });
      }
    }
  }, []);

  return (
    <section className="mt-16 px-8 flex flex-col gap-0">
      <section className="mt-4">
        <h2 className="text-3xl font-extrabold text-blue-600 text-center">
          Code Editor
        </h2>
        <h3 className="text-xl text-black mt-4 max-w-3xl mx-auto leading-relaxed text-center">
          With our online code editor, you can edit code and view instant
          feedback in your browser.
        </h3>

        <div className="flex justify-center mt-6">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto rounded-xl shadow-[0_4px_8px_0_rgba(37,99,235,0.4)] pointer-events-none select-none object-cover"
          >
            <source src={codeEditorVideo} type="video/mp4" />
            Your browser does not support the video.
          </video>
        </div>
      </section>
    </section>
  );
};

export default CodeEditor;
