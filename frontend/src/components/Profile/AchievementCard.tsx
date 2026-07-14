import Card from "../UI/Card/Card";

const achievements = [

    "🥉 Primeira Semana de Estudos",

    "🧠 100 Questões Resolvidas",

    "📚 30 Horas de Estudo",

    "✍ Primeira Redação",

    "🎯 Meta Definida",

    "⭐ Estudante Dedicado"

];

export default function Achievements() {

    return (

        <Card title="Conquistas">

            <div
                className="
                    grid
                    md:grid-cols-2
                    gap-4
                "
            >

                {achievements.map((achievement) => (

                    <div
                        key={achievement}
                        className="
                            border
                            rounded-xl
                            p-4
                        "
                    >
                        {achievement}
                    </div>

                ))}

            </div>

        </Card>

    );

}