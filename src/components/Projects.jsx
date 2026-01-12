import React from "react";
import { Code2, FolderGit2, Zap, Github } from "lucide-react"; // <-- Agregar Github aquí
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";

export default function Projects() {
  const { projects } = projectsData;

  const stats = [
    { icon: <Code2 size={20} />, label: "Java Projects", value: "3+" },
    { icon: <FolderGit2 size={20} />, label: "GitHub Repos", value: "5+" },
    { icon: <Zap size={20} />, label: "APIs Built", value: "15+" },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header con stats */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-600">Projects</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Here are some of my Java Backend projects. Each includes a working
            API, comprehensive documentation, and demonstrates real-world
            backend development skills.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Note about video demos */}
        <div className="max-w-3xl mx-auto bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
              <Zap className="text-blue-600" size={20} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                About the Demos
              </h4>
              <p className="text-gray-700 mb-2">
                Each project includes a 1-2 minute video demo showing the API in
                action. The videos demonstrate endpoints being tested via
                Postman/Swagger, database interactions, and key features working
                in real-time.
              </p>
              <p className="text-gray-700">
                <strong>Note:</strong> You'll need to add your own demo videos
                to the
                <code className="mx-1 px-2 py-1 bg-white rounded text-sm">
                  /public/demos/
                </code>
                folder. For now, placeholder videos are shown.
              </p>
            </div>
          </div>
        </div>

        {/* GitHub Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to see more code?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Check out my GitHub for additional projects, contributions, and
              the complete source code of everything shown here.
            </p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
