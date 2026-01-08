import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pt-16">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Tu Nombre
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 mb-6">
              Desarrollador Java / Backend
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creo aplicaciones seguras y escalables con Java
            </p>
          </div>
        </section>
        <section id="about" className="min-h-screen py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Sobre mí
            </h2>
          </div>
        </section>
        <section id="projects" className="min-h-screen py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Proyectos
            </h2>
          </div>
        </section>
        <section id="tech-stack" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Stack Tecnológico
            </h2>
          </div>
        </section>
        <section id="contact" className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Contacto
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;
