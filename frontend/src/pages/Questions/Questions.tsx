import QuestionCard from "../../components/Questions/QuestionCard";
import ProgressBar from "../../components/UI/ProgressBar/ProgressBar";
import BackButton from "../../components/UI/BackButton/BackButton";


export default function Questions(){

    return (

        <main className="
            min-h-screen
            bg-slate-50
            p-6
        ">


            <div className="
                max-w-4xl
                mx-auto
            ">
                <BackButton confirm />


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



                <div className="
                    mb-8
                ">

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


                    <ProgressBar progress={25}/>


                </div>




                <QuestionCard/>

            </div>


        </main>

    );

}