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
      href: "https://github.com/adolcc",
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
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-4 pt-16 md:pt-0"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50 -z-10"></div>

      {/* Animated blobs - Reducir en móvil */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-20 left-4 w-48 h-48 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-4 w-48 h-48 md:w-72 md:h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-10 w-48 h-48 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating tech icons - Ocultar algunos en móvil */}
      <div className="hidden md:block absolute inset-0 -z-10 overflow-hidden">
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

      <div className="max-w-7xl mx-auto w-full py-8 md:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20">
          {/* Text content - Orden primero en móvil */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <div className="inline-flex items-center gap-2 text-blue-600 font-medium mb-4 animate-fade-in px-3 py-1.5 bg-blue-50 rounded-full text-sm md:text-base">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Hello! I'm
            </div>

            {/* Name - Texto más pequeño en móvil */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 animate-slide-up">
              Adolfo
              <span className="block text-blue-600 mt-2">Caicaguare</span>
            </h1>

            {/* Title */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 animate-fade-in-delay">
              <div className="hidden md:block w-8 lg:w-12 h-1 bg-blue-600 rounded-full"></div>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700">
                <span className="font-semibold">Java Backend</span> Developer
              </h2>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mb-8 animate-fade-in-delay-2 leading-relaxed px-2 md:px-0">
              I build{" "}
              <span className="font-semibold text-blue-600">
                secure, scalable applications
              </span>{" "}
              with Java and Spring Boot. Passionate about clean code, robust
              architectures, and solving complex backend challenges.
            </p>

            {/* Tech badges - Ajustar tamaño */}
            <div className="flex flex-wrap gap-2 mb-8 animate-fade-in-delay-2 justify-center lg:justify-start">
              {techBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm"
                >
                  <div
                    className={`w-5 h-5 ${badge.color} rounded-full flex items-center justify-center`}
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

            {/* Action buttons - Stack vertical en móvil */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-in-delay-3">
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                <FolderKanban size={18} />
                View Projects
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 text-sm md:text-base"
              >
                <MessageSquare size={18} />
                Contact Me
              </a>
            </div>

            {/* Social links - Más compacto en móvil */}
            <div className="flex items-center justify-center lg:justify-start gap-3 animate-fade-in-delay-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2 hover:bg-blue-50 rounded-lg text-sm"
                  aria-label={link.label}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <span className="font-medium hidden sm:inline">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Avatar/Visual section - Orden primero en móvil */}
          <div className="w-full lg:w-1/2 flex justify-center animate-float order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              {/* Main avatar circle - Más pequeño en móvil */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-full overflow-hidden shadow-xl md:shadow-2xl border-4 md:border-8 border-white">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-blue-300 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-purple-300 rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>

                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8">
                  <div className="text-4xl md:text-6xl lg:text-8xl mb-2 md:mb-4">
                    👨‍💻
                  </div>
                  <div className="text-center">
                    <div className="text-xs md:text-sm text-gray-500 mb-1">
                      FOCUSED ON
                    </div>
                    <div className="text-lg md:text-xl font-bold text-gray-800">
                      Backend Excellence
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges - Ocultar o ajustar en móvil */}
              <div className="hidden sm:block absolute -top-2 -left-2 bg-white p-3 md:p-4 rounded-2xl shadow-xl border animate-float-slower">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-1.5 md:p-2 bg-green-100 rounded-lg">
                    <Server className="text-green-600" size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Specialized in</div>
                    <div className="text-sm font-bold text-gray-900">
                      Server-side
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-4 -right-4 bg-white p-3 md:p-4 rounded-2xl shadow-xl border animate-float">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-1.5 md:p-2 bg-blue-100 rounded-lg">
                    <Code2 className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Clean</div>
                    <div className="text-sm font-bold text-gray-900">Code</div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute top-1/2 -left-4 bg-white p-2 rounded-xl shadow-lg border animate-float-delayed">
                <div className="text-center">
                  <div className="text-xl">🚀</div>
                  <div className="text-xs font-bold text-gray-900 mt-1">
                    Fast
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Solo en desktop */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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
