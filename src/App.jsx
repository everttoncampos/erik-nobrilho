import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Componente da Página Inicial
function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Minha Página Inicial</h1>
      <Link to="/alguma-coisa" className="text-blue-500 underline hover:text-blue-700">
        Ir para /testando-para-ver-se-funciona
      </Link>
    </div>
  );
}

// Componente da Página "Alguma Coisa"
function AlgumaCoisa() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Página Alguma Coisa!</h1>
      <p className="text-gray-700 mb-4">Se você recarregar essa página, ela vai continuar funcionando perfeitamente no Easypanel!</p>
      <Link to="/" className="text-blue-500 underline hover:text-blue-700">
        Voltar para a Home
      </Link>
    </div>
  );
}

// Configuração Geral das Rotas
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alguma-coisa" element={<AlgumaCoisa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;