import React from "react";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 px-4 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Contenido simple */}
        <div className="bg-gray-50 rounded-xl p-4 md:p-10 border border-gray-200">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              I'm a <strong>Java Backend Developer</strong> transitioning from a
              unique background in music education and technical support. With
              over 7 years as a professional piano teacher and 2 years as an L2
              Support Engineer at Wallbox (EV charging systems), I bring a
              distinct combination of creative thinking, analytical
              problem-solving, and practical technical experience.
            </p>

            <p className="mb-4">
              My journey from music to code isn't a career change—it's a natural
              evolution. Teaching classical and jazz piano taught me how to
              structure complex concepts, break down problems into manageable
              components, and communicate technical ideas effectively. My time
              in technical support gave me firsthand experience with real-world
              systems, user pain points, and the importance of robust,
              maintainable solutions.
            </p>

            <p className="mb-4">
              Recently, I completed specialized training in{" "}
              <strong>Spring Framework </strong> and{" "}
              <strong>Java fundamentals </strong> through Barcelona Activa. I'm
              now building projects with Java 17+, Spring Boot, REST APIs,
              Docker, and MongoDB, applying software engineering principles like
              SOLID, Clean Code, and TDD.
            </p>

            <p className="mb-0">
              I'm actively seeking my{" "}
              <strong>
                first professional role as a Java Backend Developer
              </strong>
              . I'm looking for a team where I can contribute my unique
              perspective, continue learning rapidly, and help build scalable,
              well-architected applications. I'm particularly interested in
              projects involving Spring Boot, microservices, and clean API
              design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
