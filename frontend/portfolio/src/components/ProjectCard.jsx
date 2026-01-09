import React, { useState, useRef } from "react";
import {
  Github,
  ExternalLink,
  FileText,
  Play,
  Pause,
  Code,
} from "lucide-react";

export default function ProjectCard({ project }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const videoRef = useRef(null);

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 group">
      {/* Header con título y badges */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm mt-1">Java Backend Project</p>
          </div>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Descripción */}
        <div className="mb-4">
          <p className="text-gray-700">
            {showFullDescription
              ? project.longDescription
              : project.description}
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="ml-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
              {showFullDescription ? "Show less" : "Read more"}
            </button>
          </p>
        </div>

        {/* Features list */}
        <ul className="space-y-2 mb-4">
          {project.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="text-green-500 mt-1 flex-shrink-0">✓</div>
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Video Demo Section */}
      <div className="relative bg-gray-900">
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-gray-800 text-white text-xs font-medium rounded-full flex items-center gap-1">
            <Code size={12} />
            Demo
          </span>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="/api/placeholder/800/450"
            loop
            muted
            onClick={handleVideoToggle}
          >
            <source src={project.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video Overlay Controls */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleVideoToggle}
              className="p-4 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              aria-label={isVideoPlaying ? "Pause video" : "Play video"}
            >
              {isVideoPlaying ? (
                <Pause size={24} className="text-gray-900" />
              ) : (
                <Play size={24} className="text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Video Controls Bar */}
        <div className="p-4 bg-gray-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button
              onClick={handleVideoToggle}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
            >
              {isVideoPlaying ? <Pause size={14} /> : <Play size={14} />}
              {isVideoPlaying ? "Pause" : "Play Demo"}
            </button>
            <span className="text-gray-400 text-sm">
              Click video to {isVideoPlaying ? "pause" : "play"}
            </span>
          </div>
          <div className="text-gray-400 text-sm">~1 min</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 bg-gray-50">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors group/btn"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
          <a
            href={project.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-blue-400 hover:text-blue-600 transition-colors group/btn"
          >
            <FileText size={16} />
            <span>API Docs</span>
          </a>
        </div>

        {/* GitHub link */}
        {project.githubUrl && (
          <div className="mt-4 text-center">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github size={14} />
              View source code on GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
