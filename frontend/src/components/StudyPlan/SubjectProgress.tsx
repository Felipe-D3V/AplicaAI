import Card from "../UI/Card/Card";
import ProgressBar from "../UI/ProgressBar/ProgressBar";
import StudyTopic from "./StudyTopic";


interface SubjectProgressProps {
    subject: string;
    progress: number;
    topics: string[];
}


export default function SubjectProgress({
    subject,
    progress,
    topics
}: SubjectProgressProps){

    return (

        <Card>


            <h2 className="
                text-xl
                font-bold
                mb-4
            ">
                {subject}
            </h2>


            <div className="
                flex
                justify-between
                mb-2
                text-sm
            ">

                <span>
                    Progresso
                </span>

                <span className="font-semibold">
                    {progress}%
                </span>

            </div>



            <ProgressBar 
                progress={progress}
                color="bg-blue-600"
            />



            <div className="
                mt-6
                space-y-3
            ">

                {
                    topics.map((topic,index)=>(

                        <StudyTopic
                            key={index}
                            title={topic}
                            completed={index < 2}
                        />

                    ))
                }

            </div>


        </Card>

    );
}