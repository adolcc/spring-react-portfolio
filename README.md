# Actualizar README.md si existe, o crear nuevo

cat > README.md << 'EOF'

# Java Developer Portfolio

Modern, responsive portfolio for a Java Backend Developer built with React, Tailwind CSS, and Docker.

## 🚀 Live Demo

[View Live Portfolio](https://spring-react-portfolio.vercel.app)

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **Containerization**: Docker, Docker Compose
- **Deployment**: Vercel
- **Icons**: Lucide React

## 📦 Quick Start

### Local Development (Normal)

\`\`\`bash
npm install
npm run dev
\`\`\`
Open: http://localhost:5173

### Docker Development (Recommended)

\`\`\`bash

# Start development container with hot reload

npm run docker:dev
\`\`\`
Open: http://localhost:5173

### Docker Production (Local Test)

\`\`\`bash

# Build and run production container

npm run docker:prod
\`\`\`
Open: http://localhost:8080

## 🐳 Docker Commands

| Command                  | Description                 |
| ------------------------ | --------------------------- |
| \`npm run docker:dev\`   | Start development container |
| \`npm run docker:prod\`  | Start production container  |
| \`npm run docker:build\` | Build Docker image          |
| \`npm run docker:run\`   | Run built image             |
| \`npm run docker:stop\`  | Stop all containers         |
| \`docker ps\`            | View running containers     |
| \`docker images\`        | View built images           |

## 📁 Project Structure

\`\`\`
src/
├── components/ # React components
│ ├── Header.jsx # Navigation
│ ├── Hero.jsx # Landing section
│ ├── About.jsx # About me
│ ├── Projects.jsx # Project showcase
│ ├── TechStack.jsx # Skills & technologies
│ └── Contact.jsx # Contact information
├── data/ # JSON data files
│ └── projects.json # Project data
├── App.jsx # Main application
└── main.jsx # Entry point
\`\`\`

## 🚀 Deployment

### Automatic Deployment (Vercel)

Push to the \`main\` branch triggers automatic deployment to Vercel.

### Manual Build & Deploy

\`\`\`bash

# Build the project

npm run build

# The dist/ folder is ready for deployment

# Upload to Vercel, Netlify, or any static host

\`\`\`

## 🏗️ Docker Architecture

- **Development Container**: Node.js with hot reload for development
- **Production Container**: Nginx serving built React app
- **Multi-stage Build**: Optimized image size
- **Volume Mounting**: Live code changes in development

## 🔧 Development

\`\`\`bash

# Install dependencies

npm install

# Run linter

npm run lint

# Preview production build

npm run preview
\`\`\`

## 📄 License

MIT License
EOF
