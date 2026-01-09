import React, { useState } from "react";
import {
  Code2,
  Database,
  Server,
  Cpu,
  Layers,
  Zap,
  Shield,
  GitBranch,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const technologies = {
    backend: [
      {
        id: "java",
        name: "Java 17+",
        level: "Advanced",
        icon: "☕",
        color: "bg-red-100 text-red-800 border-red-200",
        description:
          "Object-oriented programming, Streams, Lambdas, Optional, Collections Framework",
        details: [
          "Stream API & Lambda Expressions",
          "Concurrency & Multithreading",
          "Java Memory Management",
          "Design Patterns implementation",
        ],
      },
      {
        id: "spring",
        name: "Spring Boot",
        level: "Advanced",
        icon: "🌱",
        color: "bg-green-100 text-green-800 border-green-200",
        description:
          "REST APIs, Dependency Injection, Spring Security, Spring Data",
        details: [
          "Spring MVC & REST Controllers",
          "Spring Security with JWT",
          "Spring Data JPA & MongoDB",
          "Spring Boot Actuator",
        ],
      },
      {
        id: "spring-webflux",
        name: "Spring WebFlux",
        level: "Intermediate",
        icon: "⚡",
        color: "bg-purple-100 text-purple-800 border-purple-200",
        description: "Reactive programming, Non-blocking I/O",
        details: [
          "Reactive Streams",
          "WebClient for HTTP calls",
          "Functional Endpoints",
          "Backpressure handling",
        ],
      },
    ],
    databases: [
      {
        id: "mongodb",
        name: "MongoDB",
        level: "Intermediate",
        icon: "🍃",
        color: "bg-green-100 text-green-800 border-green-200",
        description: "NoSQL database, Aggregation framework, Indexing",
        details: [
          "Document-based data modeling",
          "Aggregation Pipeline",
          "Indexing strategies",
          "Atlas cloud deployment",
        ],
      },
      {
        id: "sql",
        name: "SQL Databases",
        level: "Intermediate",
        icon: "🗄️",
        color: "bg-blue-100 text-blue-800 border-blue-200",
        description: "PostgreSQL, MySQL, Database design",
        details: [
          "Relational database design",
          "SQL queries optimization",
          "Transactions & ACID properties",
          "Schema migrations",
        ],
      },
    ],
    devops: [
      {
        id: "docker",
        name: "Docker",
        level: "Intermediate",
        icon: "🐳",
        color: "bg-blue-100 text-blue-800 border-blue-200",
        description: "Containerization, Docker Compose, Multi-stage builds",
        details: [
          "Dockerfile optimization",
          "Docker Compose orchestration",
          "Container networking",
          "Image layer caching",
        ],
      },
      {
        id: "github-actions",
        name: "GitHub Actions",
        level: "Intermediate",
        icon: "⚙️",
        color: "bg-gray-100 text-gray-800 border-gray-200",
        description: "CI/CD pipelines, Automated testing, Deployment",
        details: [
          "Workflow automation",
          "Matrix strategies",
          "Self-hosted runners",
          "Secrets management",
        ],
      },
      {
        id: "git",
        name: "Git",
        level: "Advanced",
        icon: "📚",
        color: "bg-orange-100 text-orange-800 border-orange-200",
        description: "Version control, Branch strategies, GitHub",
        details: [
          "Git flow & branching strategies",
          "Rebase vs Merge",
          "Git hooks",
          "Collaborative workflows",
        ],
      },
    ],
    methodologies: [
      {
        id: "tdd",
        name: "TDD & Testing",
        level: "Intermediate",
        icon: "🧪",
        color: "bg-yellow-100 text-yellow-800 border-yellow-200",
        description: "JUnit, Mockito, Testcontainers, Integration tests",
        details: [
          "Unit testing with JUnit 5",
          "Mockito for mocking",
          "Testcontainers for integration tests",
          "BDD with Cucumber",
        ],
      },
      {
        id: "solid",
        name: "SOLID & Clean Code",
        level: "Intermediate",
        icon: "✨",
        color: "bg-indigo-100 text-indigo-800 border-indigo-200",
        description: "Design principles, Code quality, Refactoring",
        details: [
          "SOLID principles application",
          "Clean Code practices",
          "Refactoring techniques",
          "Code reviews",
        ],
      },
      {
        id: "agile",
        name: "Agile & Scrum",
        level: "Intermediate",
        icon: "🔄",
        color: "bg-teal-100 text-teal-800 border-teal-200",
        description: "Scrum ceremonies, Kanban, BDD",
        details: [
          "Scrum framework",
          "Kanban boards",
          "User stories & acceptance criteria",
          "Retrospectives",
        ],
      },
    ],
    apis: [
      {
        id: "rest",
        name: "REST APIs",
        level: "Advanced",
        icon: "🔌",
        color: "bg-pink-100 text-pink-800 border-pink-200",
        description: "API design, HTTP methods, Status codes, HATEOAS",
        details: [
          "RESTful API design",
          "HTTP status codes & methods",
          "API versioning strategies",
          "OpenAPI/Swagger documentation",
        ],
      },
      {
        id: "security",
        name: "API Security",
        level: "Intermediate",
        icon: "🛡️",
        color: "bg-red-100 text-red-800 border-red-200",
        description: "JWT, OAuth2, HTTPS, CORS",
        details: [
          "JWT authentication",
          "Role-based authorization",
          "CORS configuration",
          "Input validation & sanitization",
        ],
      },
    ],
  };

  const categories = [
    {
      id: "all",
      label: "All Technologies",
      icon: <Layers size={18} />,
      count: Object.values(technologies).flat().length,
    },
    {
      id: "backend",
      label: "Backend",
      icon: <Server size={18} />,
      count: technologies.backend.length,
    },
    {
      id: "databases",
      label: "Databases",
      icon: <Database size={18} />,
      count: technologies.databases.length,
    },
    {
      id: "devops",
      label: "DevOps",
      icon: <Cpu size={18} />,
      count: technologies.devops.length,
    },
    {
      id: "methodologies",
      label: "Methodologies",
      icon: <Code2 size={18} />,
      count: technologies.methodologies.length,
    },
    {
      id: "apis",
      label: "APIs",
      icon: <Zap size={18} />,
      count: technologies.apis.length,
    },
  ];

  const getFilteredTech = () => {
    if (activeCategory === "all") {
      return Object.values(technologies).flat();
    }
    return technologies[activeCategory] || [];
  };

  return (
    <section id="tech-stack" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tech <span className="text-blue-600">Stack</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Technologies, tools, and methodologies I use to build robust,
            scalable backend systems.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  activeCategory === category.id ? "bg-white/20" : "bg-gray-200"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {getFilteredTech().map((tech) => (
            <div
              key={tech.id}
              className={`border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${tech.color}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{tech.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{tech.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-medium px-2 py-1 bg-white/50 rounded-full">
                        {tech.level}
                      </span>
                      <span className="text-xs text-gray-600">
                        • {tech.description.split(", ")[0]}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => toggleExpand(tech.id)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label={
                    expandedItems[tech.id]
                      ? "Collapse details"
                      : "Expand details"
                  }
                >
                  {expandedItems[tech.id] ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
              </div>

              {/* Main Description */}
              <p className="text-gray-700 mb-4">{tech.description}</p>

              {/* Expanded Details */}
              {expandedItems[tech.id] && (
                <div className="mt-4 pt-4 border-t border-white/30">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-600" />
                    Key Skills
                  </h4>
                  <ul className="space-y-2">
                    {tech.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="text-green-500 mt-1">•</div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Progress indicator */}
              <div className="mt-6">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Proficiency</span>
                  <span>
                    {tech.level === "Advanced"
                      ? "85-100%"
                      : tech.level === "Intermediate"
                      ? "65-85%"
                      : "50-65%"}
                  </span>
                </div>
                <div className="w-full bg-white/50 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      tech.level === "Advanced"
                        ? "w-11/12"
                        : tech.level === "Intermediate"
                        ? "w-3/4"
                        : "w-2/3"
                    } ${tech.color.split(" ")[0].replace("bg-", "bg-")}`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Strengths */}
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 border border-blue-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Shield className="text-blue-600" />
                Backend Focus
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Server size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Server-side Development
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Building robust APIs and business logic
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Database size={18} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Data Management</h4>
                    <p className="text-gray-600 text-sm">
                      SQL & NoSQL databases, data modeling
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <GitBranch className="text-green-600" />
                Development Practices
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Code2 size={18} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Clean Code & Testing
                    </h4>
                    <p className="text-gray-600 text-sm">
                      TDD, SOLID principles, comprehensive testing
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Zap size={18} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">DevOps & CI/CD</h4>
                    <p className="text-gray-600 text-sm">
                      Docker, GitHub Actions, automated deployment
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Currently Learning */}
        <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Currently Learning & Exploring
              </h3>
              <p className="text-gray-300 mb-4">
                Continuously expanding my skill set with modern backend
                technologies
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20">
                  Spring Cloud
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20">
                  Kubernetes
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20">
                  Apache Kafka
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20">
                  Microservices Patterns
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-blue-500/20 p-4 rounded-xl">
                <Code2 size={32} className="text-blue-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
