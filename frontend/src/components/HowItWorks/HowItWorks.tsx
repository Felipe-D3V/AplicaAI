import {
  Brain,
  ClipboardCheck,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Faça o Diagnóstico",
    description:
      "Responda algumas questões para avaliarmos seu nível de conhecimento.",
  },
  {
    icon: Brain,
    title: "IA Analisa",
    description:
      "Nossa IA identifica seus pontos fortes e dificuldades.",
  },
  {
    icon: GraduationCap,
    title: "Receba sua Trilha",
    description:
      "Um plano de estudos personalizado para alcançar sua meta.",
  },
  {
    icon: TrendingUp,
    title: "Acompanhe sua Evolução",
    description:
      "Veja gráficos, estatísticas e acompanhe seu progresso diariamente.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Como funciona?
        </h2>

        <p className="text-center text-gray-500 mb-16">
          Em poucos minutos sua trilha personalizada estará pronta.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon size={30} className="text-blue-600" />
                </div>

                <h3 className="font-bold text-xl mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-500">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}