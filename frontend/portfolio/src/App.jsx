import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        ¡Tailwind está funcionando! ✅
      </h1>
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Prueba de estilos
        </h2>
        <p className="text-gray-600 mb-4">
          Si ves un fondo gris claro, texto azul y esta tarjeta blanca con
          sombra, entonces Tailwind CSS está funcionando correctamente.
        </p>
        <div className="flex space-x-4">
          <button className="btn-primary bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
            Botón Primario
          </button>
          <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-lg transition">
            Botón Secundario
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
