interface StudyTopicProps {

    title:string;
    completed:boolean;

}


export default function StudyTopic({
    title,
    completed
}:StudyTopicProps){


    return (

        <div className="
            flex
            items-center
            gap-3
            text-gray-700
        ">


            <span>

                {
                    completed 
                    ? "✅"
                    : "○"
                }

            </span>


            <span>
                {title}
            </span>


        </div>

    );

}