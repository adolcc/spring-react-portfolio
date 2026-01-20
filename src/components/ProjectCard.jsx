import React, { useState } from "react";
import { Github, ExternalLink, GitBranch, Globe, Code2 } from "lucide-react";

export default function ProjectCard({ project }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Determinar qué botones mostrar
  const hasDemo = !!project.demoUrl;
  const hasMultipleGithub = !!project.githubUrlBackend;
  const showStatus = !!project.status;

  // Obtener texto para el primer botón (más corto)
  const getPrimaryButtonText = () => {
    if (project.status?.includes("Production")) return "Live Demo";
    if (project.id === 2) return "View Site"; // Más corto que "Explore Site"
    if (!hasDemo && hasMultipleGithub) return "Backend";
    return "Live Demo";
  };

  // Obtener texto para el segundo botón (más corto)
  const getSecondaryButtonText = () => {
    if (hasMultipleGithub && project.githubUrlFrontend) return "Frontend";
    if (hasMultipleGithub) return "Backend";
    return "Code";
  };

  // Obtener link para el segundo botón
  const getSecondaryButtonLink = () => {
    if (hasMultipleGithub && project.githubUrlFrontend)
      return project.githubUrlFrontend;
    if (hasMultipleGithub) return project.githubUrlBackend;
    return project.githubUrl;
  };

  // Obtener icono para el segundo botón
  const getSecondaryButtonIcon = () => {
    if (hasMultipleGithub && project.githubUrlFrontend)
      return <Globe size={14} className="md:size-4" />;
    if (hasMultipleGithub) return <Code2 size={14} className="md:size-4" />;
    return <Github size={14} className="md:size-4" />;
  };

  return (
    <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-lg md:hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
      {/* Header con título y badges */}
      <div className="p-4 md:p-6 border-b border-gray-100 flex-grow">
        <div className="flex justify-between items-start mb-3 md:mb-4">
          <div className="pr-2">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              {showStatus && (
                <span
                  className={`px-2 py-0.5 text-xs font-medium rounded-full whitespace-nowrap ${
                    project.status.includes("🚀")
                      ? "bg-green-100 text-green-800"
                      : project.status.includes("✅")
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {project.status}
                </span>
              )}
            </div>
            <p className="text-gray-500 text-xs md:text-sm">
              Java Backend Project
            </p>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 md:p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={16} className="md:size-[18px]" />
              </a>
            )}
          </div>
        </div>

        {/* Tech Stack Badges - Mejorado para 3 líneas */}
        <div className="mb-3 md:mb-4 min-h-[3.5rem]">
          <div className="flex flex-wrap gap-1 md:gap-1.5">
            {project.stack.map((tech, index) => (
              <span
                key={index}
                className="px-1.5 py-0.5 md:px-2 md:py-0.5 bg-blue-50 text-blue-700 text-[10px] md:text-xs font-medium rounded border border-blue-100 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Descripción */}
        <div className="mb-3 md:mb-4">
          <p className="text-sm md:text-base text-gray-700">
            {showFullDescription && project.longDescription
              ? project.longDescription
              : project.description}
            {project.longDescription && (
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="ml-1 md:ml-2 text-blue-600 hover:text-blue-800 font-medium text-xs md:text-sm whitespace-nowrap"
              >
                {showFullDescription ? "Show less" : "Read more"}
              </button>
            )}
          </p>
        </div>

        {/* Features list - Con altura mínima consistente */}
        <div className="min-h-[5rem]">
          <ul className="space-y-1.5 md:space-y-2">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-1.5 md:gap-2">
                <div className="text-green-500 mt-0.5 md:mt-1 flex-shrink-0 text-xs md:text-sm">
                  ✓
                </div>
                <span className="text-xs md:text-sm text-gray-600">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sección de botones - FIXED HEIGHT */}
      <div className="p-3 md:p-4 bg-gray-50 border-t border-gray-200 mt-auto">
        <div className="grid grid-cols-2 gap-2 md:gap-3">
          {/* Primer botón */}
          <a
            href={hasDemo ? project.demoUrl : project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 md:gap-1.5 px-2 py-2 md:px-3 md:py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-xs md:text-sm min-h-[40px] whitespace-nowrap"
          >
            <ExternalLink size={12} className="md:size-[14px]" />
            <span>{getPrimaryButtonText()}</span>
          </a>

          {/* Segundo botón */}
          <a
            href={getSecondaryButtonLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 md:gap-1.5 px-2 py-2 md:px-3 md:py-2.5 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-blue-400 hover:text-blue-600 transition-colors text-xs md:text-sm min-h-[40px] whitespace-nowrap"
          >
            {getSecondaryButtonIcon()}
            <span>{getSecondaryButtonText()}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
