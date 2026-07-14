import QuestionCard from "../../components/UI/QuestionCard/QuestionCard";
import ProgressBar from "../../components/UI/ProgressBar/ProgressBar";
import AuthLayout from "../../components/Layout/AuthLayout/AuthLayout";

const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: [
            "São Paulo",
            "Brasília",
            "Rio de Janeiro",
            "Belo Horizonte"
        ]
    },
    {
        question: "Quanto é 8 × 7?",
        options: [
            "54",
            "56",
            "58",
            "64"
        ]
    },
    {
        question: "Quem escreveu Dom Casmurro?",
        options: [
            "Machado de Assis",
            "José de Alencar",
            "Carlos Drummond",
            "Monteiro Lobato"
        ]
    }
];

export default function Questions() {

    return (

        <AuthLayout>

            <div className="
                max-w-4xl
                mx-auto
            ">

                <h1 className="
                    text-4xl
                    font-bold
                    mb-3
                ">
                    Banco de Questões 📝
                </h1>

                <p className="
                    text-gray-500
                    mb-8
                ">
                    Pratique e melhore seu desempenho.
                </p>

                <div className="mb-10">

                    <div className="
                        flex
                        justify-between
                        mb-2
                    ">

                        <span>
                            Progresso da lista
                        </span>

                        <span>
                            5/20
                        </span>

                    </div>

                    <ProgressBar progress={25} />

                </div>

                <div className="space-y-8">

                    {questions.map((question, index) => (

                        <QuestionCard
                            key={index}
                            number={index + 1}
                            question={question.question}
                            options={question.options}
                        />

                    ))}

                </div>

            </div>

        </AuthLayout>

    );

}