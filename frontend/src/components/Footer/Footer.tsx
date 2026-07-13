import {
  GraduationCap,
  Mail,
  Globe,
  User,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={30} className="text-blue-400" />
              <h2 className="text-2xl font-bold">AprovaAI</h2>
            </div>

            <p className="text-slate-300">
              Plataforma inteligente para preparação para o ENEM utilizando
              Inteligência Artificial para criar trilhas de estudos
              personalizadas.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Navegação
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Entrar</li>
              <li className="hover:text-white cursor-pointer">Criar Conta</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Desenvolvedor
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
               <Globe size={20} />
                <span>GitHub</span>
              </div>

              <div className="flex items-center gap-3">
                <User size={20} />
                <span>LinkedIn</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} />
                <span>contato@aprovaai.com</span>
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400">

          © 2026 AprovaAI. Todos os direitos reservados.

        </div>

      </div>
    </footer>
  );
}