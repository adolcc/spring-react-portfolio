import React from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Code2,
  Server,
  Cpu,
  FolderKanban,
  MessageSquare,
} from "lucide-react";

export default function Hero() {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:caicaguareadolfo@gmail.com",
      label: "Email",
    },
  ];

  const techBadges = [
    { name: "Java", color: "bg-red-500", icon: "J" },
    { name: "Spring", color: "bg-green-500", icon: "S" },
    { name: "MongoDB", color: "bg-green-600", icon: "M" },
    { name: "Docker", color: "bg-blue-500", icon: "D" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-4"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50 -z-10"></div>

      {/* Animated blobs */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-float-slow">
          <Code2 className="text-blue-200/30" size={40} />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-slower">
          <Server className="text-gray-300/30" size={36} />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float-delayed">
          <Cpu className="text-purple-200/30" size={32} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Greeting */}
            <div className="inline-flex items-center gap-2 text-blue-600 font-medium mb-4 animate-fade-in px-4 py-2 bg-blue-50 rounded-full">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Hello! I'm
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-4 animate-slide-up">
              Adolfo
              <span className="block text-blue-600">Caicaguare</span>
            </h1>

            {/* Title */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 animate-fade-in-delay">
              <div className="hidden sm:block w-12 h-1 bg-blue-600 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl text-gray-700">
                <span className="font-semibold">Java Backend</span> Developer
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 animate-fade-in-delay-2 leading-relaxed">
              I build{" "}
              <span className="font-semibold text-blue-600">
                secure, scalable applications
              </span>{" "}
              with Java and Spring Boot. Passionate about clean code, robust
              architectures, and solving complex backend challenges.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-delay-2">
              {techBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm"
                >
                  <div
                    className={`w-6 h-6 ${badge.color} rounded-full flex items-center justify-center`}
                  >
                    <span className="text-white text-xs font-bold">
                      {badge.icon}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-3">
              <a
                href="#projects"
                className="group flex-1 sm:flex-initial flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FolderKanban size={20} />
                View Projects
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="group flex-1 sm:flex-initial flex items-center justify-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300"
              >
                <MessageSquare size={20} />
                Contact Me
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in-delay-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 p-3 hover:bg-blue-50 rounded-xl"
                  aria-label={link.label}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Avatar/Visual section */}
          <div className="lg:w-1/2 flex justify-center animate-float">
            <div className="relative">
              {/* Main avatar circle */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-300 rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>

                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="text-6xl md:text-8xl mb-4">👨‍💻</div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">FOCUSED ON</div>
                    <div className="text-xl font-bold text-gray-800">
                      Backend Excellence
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -left-2 bg-white p-4 rounded-2xl shadow-xl border animate-float-slower">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Server className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Specialized in</div>
                    <div className="font-bold text-gray-900">Server-side</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border animate-float">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Code2 className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Clean</div>
                    <div className="font-bold text-gray-900">Code</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-6 bg-white p-3 rounded-xl shadow-lg border animate-float-delayed">
                <div className="text-center">
                  <div className="text-2xl">🚀</div>
                  <div className="text-xs font-bold text-gray-900 mt-1">
                    Fast
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors group"
          aria-label="Scroll to next section"
        >
          <div className="p-2 bg-white/80 backdrop-blur-sm rounded-full group-hover:bg-white shadow-sm">
            <ArrowDown size={20} />
          </div>
          <span className="text-xs mt-2 font-medium">Explore more</span>
        </a>
      </div>
    </section>
  );
}
