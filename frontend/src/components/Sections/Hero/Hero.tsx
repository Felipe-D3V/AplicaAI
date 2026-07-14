import Button from "../../UI/Button/Button";
import { ProgressBar } from "../../UI";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            🚀 Plataforma Inteligente para o ENEM
          </span>

          <h1 className="text-5xl font-bold text-gray-900 mt-6 leading-tight">
            Estude do jeito certo com Inteligência Artificial.
          </h1>

          <p className="text-gray-600 text-lg mt-6">
            Descubra suas dificuldades, receba uma trilha de estudos
            personalizada e acompanhe sua evolução até o dia da prova.
          </p>

          <div className="flex gap-4 mt-8">
            <Button>
              Começar Agora
            </Button>

            <Button>
              Saiba Mais
            </Button>
          </div>
        </div>

        {/* Dashboard ilustrativo */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <h3 className="font-bold text-xl mb-6">
            Seu desempenho
          </h3>

          <div className="space-y-5">

            <div>
              <div className="flex justify-between mb-2">
                <span>Matemática</span>
                <span>35%</span>
              </div>

              <ProgressBar 
              progress={35}
              color="bg-red-500"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Português</span>
                <span>82%</span>
              </div>

              <ProgressBar 
              progress={82}
              color="bg-green-500"
              />

            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Natureza</span>
                <span>58%</span>
              </div>

              <ProgressBar 
              progress={58}
              color="bg-yellow-500"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}