import Card from "../UI/Card/Card";
import ProgressBar from "../UI/ProgressBar/ProgressBar";


interface SubjectPerformanceProps {

    subject:string;
    progress:number;
    color:string;

}



export default function SubjectPerformance({
    subject,
    progress,
    color
}:SubjectPerformanceProps){


    return (

        <Card>


            <div className="
                flex
                justify-between
                mb-3
            ">

                <h3 className="
                    font-bold
                ">
                    {subject}
                </h3>


                <span>
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