import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          AprovaAI
        </Link>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Entrar
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Criar Conta
          </Link>
        </div>
      </nav>
    </header>
  );
}