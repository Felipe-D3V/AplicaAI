import Card from "../UI/Card/Card";
import ProgressBar from "../UI/ProgressBar/ProgressBar";

interface SubjectCardProps {
    name: string;
    progress: number;
    color: string;
}


export default function SubjectCard({
    name,
    progress,
    color
}: SubjectCardProps){

    return (

        <Card>

            <h3 className="font-bold mb-4">
                {name}
            </h3>


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
                color={color}
            />


        </Card>

    );
}