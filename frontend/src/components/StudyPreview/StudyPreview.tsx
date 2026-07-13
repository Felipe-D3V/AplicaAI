import {
  BookOpen,
  CheckCircle2,
  Clock3,
  TrendingUp,
} from "lucide-react";

export default function StudyPreview() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Sua trilha de estudos personalizada
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            A IA organiza automaticamente o que você precisa estudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Lista de estudos */}

          <div className="space-y-5">

            <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow">

              <CheckCircle2 className="text-green-500" />

              <div>
                <h3 className="font-semibold">
                  Função do 1º Grau
                </h3>

                <p className="text-gray-500 text-sm">
                  Concluído
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow">

              <BookOpen className="text-blue-600" />

              <div>
                <h3 className="font-semibold">
                  Questões de Geometria
                </h3>

                <p className="text-gray-500 text-sm">
                  Próxima atividade
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow">

              <Clock3 className="text-yellow-500" />

              <div>
                <h3 className="font-semibold">
                  Revisão Programada
                </h3>

                <p className="text-gray-500 text-sm">
                  Amanhã
                </p>
              </div>

            </div>

          </div>

          {/* Painel */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <div className="flex justify-between items-center mb-8">

              <h3 className="font-bold text-2xl">
                Meta ENEM
              </h3>

              <TrendingUp className="text-blue-600" />

            </div>

            <h2 className="text-5xl font-bold text-blue-600">
              800+
            </h2>

            <p className="text-gray-500 mt-2">
              Pontos desejados
            </p>

            <div className="mt-10">

              <div className="flex justify-between mb-2">
                <span>Progresso Geral</span>
                <span>72%</span>
              </div>

              <div className="bg-gray-200 rounded-full h-4">

                <div className="bg-blue-600 rounded-full h-4 w-[72%]"></div>

              </div>

            </div>

            <div className="mt-10">

              <h4 className="font-semibold mb-3">
                IA recomenda revisar:
              </h4>

              <ul className="space-y-2 text-gray-600">

                <li>• Equação do 2º Grau</li>

                <li>• Trigonometria</li>

                <li>• Cinemática</li>

              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}