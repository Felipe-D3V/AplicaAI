interface QuestionCardProps {
    question: string;
    options: string[];
}


export default function QuestionCard({
    question,
    options
}: QuestionCardProps){

    return (

        <div className="
            space-y-6
        ">

            <h2 className="
                text-xl
                font-semibold
            ">
                {question}
            </h2>


            <div className="space-y-3">

                {options.map((option,index)=>(

                    <button
                        key={index}
                        className="
                            w-full
                            text-left
                            border
                            rounded-xl
                            p-4
                            hover:bg-blue-50
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