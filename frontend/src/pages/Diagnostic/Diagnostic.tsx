import Card from "../../components/UI/Card/Card";
import Button from "../../components/UI/Button/Button";
import ProgressBar from "../../components/UI/ProgressBar/ProgressBar";

import QuestionCard from "../../components/QuestionCard/QuestionCard";


export default function Diagnostic(){

    return (

        <div className="
            min-h-screen
            bg-slate-50
            flex
            justify-center
            items-center
            px-6
        ">


            <Card>


                <div className="w-[500px]">


                    <h1 className="
                        text-3xl
                        font-bold
                        text-center
                        mb-2
                    ">
                        Diagnóstico Inicial
                    </h1>


                    <p className="
                        text-center
                        text-gray-500
                        mb-8
                    ">
                        Vamos descobrir seu nível atual.
                    </p>



                    <div className="mb-8">

                        <div className="
                            flex
                            justify-between
                            mb-2
                        ">
                            <span>
                                Questão 1 de 10
                            </span>

                            <span>
                                10%
                            </span>

                        </div>


                        <ProgressBar progress={10}/>

                    </div>



                    <QuestionCard

                        question="
                        Qual o resultado de 2 + 2?
                        "

                        options={[
                            "3",
                            "4",
                            "5",
                            "6"
                        ]}

                    />


                    <div className="
                        mt-8
                        flex
                        justify-end
                    ">

                        <Button>
                            Próxima
                        </Button>

                    </div>


                </div>


            </Card>


        </div>

    );
}