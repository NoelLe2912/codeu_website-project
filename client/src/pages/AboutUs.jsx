import React from "react";
import NavBarHomePage from "../components/NavBarHomePage";
import namTrinhImg from "../assets/images/nam_trinh.jpg";
import nurImg from "../assets/images/nur.jpg";
import lilyImg from "../assets/images/lily.jpg";
import noelImg from "../assets/images/noel.jpg";

const team = [
  {
    name: "Nam Trinh",
    role: "Backend developer",
    img: namTrinhImg,
  },
  {
    name: "Nurul Islam",
    role: "Frontend developer",
    img: nurImg,
  },
  {
    name: "Lillian Kager",
    role: "Frontend developer",
    img: lilyImg,
  },
  {
    name: "Noel Le",
    role: "Frontend developer",
    img: noelImg,
  },
];

const AboutUs = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white min-h-screen">
      <NavBarHomePage logoSize={40} />

      {/* Header */}
      <section className="pt-6 pb-10 md:pt-8 md:pb-14 text-center">
        <h1 className="text-4xl font-light">About us</h1>
      </section>

      {/* Mission */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <h2 className="text-sm font-bold tracking-widest flex items-center">
            OUR MISSION
          </h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              Our mission is to help college students and beginner programmers
              learn how to code in multiple programming languages, starting with
              Python due to its accessibility and beginner-friendly nature.
            </p>
            <p>
              We aim to provide a structured learning experience that breaks
              down complex concepts into clear courses, chapters, and lectures.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 text-yellow-400">
          <h2 className="text-sm font-bold tracking-widest flex items-center">
            OUR VISION
          </h2>
          <div className="text-base leading-relaxed">
            <p>
              Our long-term vision is to make learning how to code more
              interactive, self-paced, and accessible. We strive to support
              students who want both structure and flexibility by combining
              instructional content with hands-on practice and progress
              tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 flex items-center">
            OUR VALUES
          </h2>
          <ul className="text-black space-y-3 list-disc list-inside text-base leading-relaxed">
            <li>
              <strong>Accessibility:</strong> Designing a platform that is
              welcoming and easy to use for beginners.
            </li>
            <li>
              <strong>Interactive Learning:</strong> Encouraging learning
              through videos, exercises, and immediate practice.
            </li>
            <li>
              <strong>Progress Tracking:</strong> Helping users stay motivated
              by allowing them to save progress and review learning history.
            </li>
            <li>
              <strong>Flexibility:</strong> Supporting self-paced learning
              without sacrificing structure.
            </li>
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.img}
                  className="mx-auto mb-4 w-48 h-48 object-cover rounded-lg"
                  alt={member.name}
                />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-black text-3xl font-light mb-6">
          Start coding, reshape your world.
        </h2>
        <button className="text-5xl transition-transform duration-300 hover:translate-x-5">
          →
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center text-white tracking-widest">
        Contact: something right here@gmail.com
      </footer>
    </div>
  );
};

export default AboutUs;
