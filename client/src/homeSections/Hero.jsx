import React from "react";
import learnCodeVideo from "../assets/videos/learnCodeVideo.mp4";

const Hero = () => {
  return (
    <div>
      <section className="px-8">
        <div className="mx-auto mt-10 bg-white text-center py-2">
          <h2 className="text-5xl font-extrabold text-blue-600">
            Get Your Hands Dirty
          </h2>
          <h3 className="text-xl text-black mt-6 max-w-3xl mx-auto leading-relaxed">
            We believe the best way to learn is by doing. Dive into hands-on
            coding challenges and start building your skills with real-world
            examples.
          </h3>
        </div>
      </section>

      <section className="mt-10 px-8">
        <div className="flex justify-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="rounded-xl w-full h-auto object-cover shadow-[0_4px_8px_0_rgba(37,99,235,0.4)] pointer-events-none select-none"
          >
            <source src={learnCodeVideo} type="video/mp4" />
            Your browser does not support the video.
          </video>
        </div>
      </section>
    </div>
  );
};

export default Hero;
