import {
  Brain,
  BookOpen,
  FileText,
  BarChart3,
  Clock,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "IA Adaptativa",
    description:
      "A plataforma aprende com seus erros e adapta sua trilha de estudos automaticamente.",
  },
  {
    icon: BookOpen,
    title: "Questões Comentadas",
    description:
      "Resolva questões do ENEM e receba explicações detalhadas para cada resposta.",
  },
  {
    icon: FileText,
    title: "Correção de Redação",
    description:
      "Receba feedback baseado nas competências avaliadas pelo ENEM.",
  },
  {
    icon: BarChart3,
    title: "Estatísticas",
    description:
      "Acompanhe seu desempenho por matéria, assunto e evolução semanal.",
  },
  {
    icon: Clock,
    title: "Plano Diário",
    description:
      "A IA organiza automaticamente o que você deve estudar todos os dias.",
  },
  {
    icon: Trophy,
    title: "Gamificação",
    description:
      "Ganhe conquistas, mantenha sequências e acompanhe sua evolução.",
  },
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Tudo o que você precisa para passar no ENEM
        </h2>

        <p className="text-center text-gray-500 mb-16">
          Uma plataforma completa para estudar de forma inteligente.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <Icon className="text-blue-600" size={28} />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}