interface QuestionCardProps {
    number: number;
    question: string;
    options: string[];
}

export default function QuestionCard({
    number,
    question,
    options
}: QuestionCardProps) {

    return (

        <div className="
            bg-white
            rounded-2xl
            shadow-md
            p-8
            space-y-6
        ">

            <div>

                <span className="
                    text-blue-600
                    font-semibold
                ">
                    Questão {number}
                </span>

                <h2 className="
                    text-xl
                    font-bold
                    mt-2
                ">
                    {question}
                </h2>

            </div>

            <div className="space-y-3">

                {options.map((option, index) => (

                    <button
                        key={index}
                        className="
                            w-full
                            text-left
                            border
                            rounded-xl
                            p-4
                            hover:bg-blue-50
                            hover:border-blue-600
                            transition
                        "
                    >
                        {option}
                    </button>

                ))}

            </div>

        </div>

    );

}