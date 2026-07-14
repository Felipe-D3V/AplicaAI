import Card from "../UI/Card/Card";
import ProgressBar from "../UI/ProgressBar/ProgressBar";


export default function StudyProgress(){

    return (

        <Card>

            <h2 className="
                text-2xl
                font-bold
                mb-6
            ">
                Progresso dos Estudos
            </h2>


            <div className="
                flex
                justify-between
                mb-2
            ">

                <span>
                    Preparação Geral
                </span>

                <span>
                    72%
                </span>

            </div>


            <ProgressBar progress={72}/>


        </Card>

    );
}