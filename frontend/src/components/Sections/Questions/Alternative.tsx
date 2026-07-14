interface AlternativeProps {
    letter: string;
    text: string;
}


export default function Alternative({
    letter,
    text
}: AlternativeProps){

    return (

        <button
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

            <span className="
                font-bold
                mr-3
            ">
                {letter})
            </span>

            {text}

        </button>

    );

}