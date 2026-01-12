import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  FileText,
  MessageCircle,
  Calendar,
  Code2,
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "caicaguareadolfo@gmail.com",
      href: "mailto:caicaguareadolfo@gmail.com",
      description: "Best way to reach me",
      color: "from-red-500 to-pink-500",
      buttonText: "Send Email",
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/yourusername",
      href: "www.linkedin.com/in/adolfo-caicaguare",
      description: "Professional profile & experience",
      color: "from-blue-600 to-blue-800",
      buttonText: "Connect",
    },
    {
      icon: <Github size={24} />,
      title: "GitHub",
      value: "github.com/yourusername",
      href: "https://github.com/adolcc",
      description: "Projects & code repositories",
      color: "from-gray-800 to-gray-900",
      buttonText: "View Code",
    },
  ];

  const quickInfo = [
    {
      icon: <Phone size={20} />,
      text: "+34 651 685 483",
      subtext: "Phone / WhatsApp",
    },
    {
      icon: <MapPin size={20} />,
      text: "Barcelona, Spain",
      subtext: "Location",
    },
    {
      icon: <Calendar size={20} />,
      text: "Available for opportunities",
      subtext: "Status",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your next project or opportunity? Choose your
            preferred way to get in touch.
          </p>
        </div>

        {/* Main Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl group"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${contact.color}`}></div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${contact.color}`}
                  >
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{contact.title}</h3>
                    <p className="text-gray-400 text-sm">
                      {contact.description}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-gray-300 text-sm mb-1">Reach me at:</p>
                  <p className="text-white font-medium text-lg">
                    {contact.value}
                  </p>
                </div>

                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 text-center font-medium rounded-lg bg-gradient-to-r ${contact.color} hover:opacity-90 transition-opacity`}
                >
                  {contact.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Info & CV Download */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Quick Info */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <MessageCircle className="text-blue-400" />
                Quick Information
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {quickInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-gray-700/50 rounded-xl p-6 hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        {info.icon}
                      </div>
                      <h4 className="font-medium">{info.subtext}</h4>
                    </div>
                    <p className="text-white font-medium text-lg">
                      {info.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Availability Note */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/20 rounded-xl">
                    <Code2 className="text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Currently Available
                    </h4>
                    <p className="text-gray-300">
                      I'm actively seeking{" "}
                      <strong>Java Backend Developer</strong> roles. Open to
                      full-time positions, contract work, and interesting
                      projects involving Spring Boot, REST APIs, and
                      microservices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CV Download Card */}
          <div>
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-2xl p-8 border border-blue-700/30 h-full">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText size={28} className="text-blue-400" />
                    <h3 className="text-2xl font-bold">My CV</h3>
                  </div>
                  <p className="text-gray-300">
                    Download my complete resume with detailed experience,
                    technical skills, and project history.
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-200 mb-3">
                      CV includes:
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">
                          Technical skills & proficiency
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">
                          Project portfolio & descriptions
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">
                          Work experience timeline
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">
                          Education & certifications
                        </span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      const cvUrl = "/cv.pdf";
                      const link = document.createElement("a");
                      link.href = cvUrl;
                      link.download = "Adolfo_Caicaguare_Java_Developer_CV.pdf";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                  >
                    <FileText size={20} />
                    Download CV (PDF)
                  </button>

                  <p className="text-gray-400 text-sm text-center mt-4">
                    Updated:{" "}
                    {new Date().toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Let's Build Something Great
            </h3>
            <p className="text-gray-300 mb-6">
              Whether you're looking for a dedicated Java developer, need help
              with a backend project, or just want to connect – I'd love to hear
              from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:caicaguareadolfo@gmail.com"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Send an Email
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Adolfo Caicaguare. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Java Backend Developer • Spring Boot • REST APIs • Problem Solver
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Back to Top
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              View Projects
            </a>
            <a
              href="#tech-stack"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Tech Stack
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
