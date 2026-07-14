import Card from "../../components/UI/Card/Card";
import Button from "../../components/UI/Button/Button";
import ProgressBar from "../../components/UI/ProgressBar/ProgressBar";

import {
    Brain,
    Target,
    TrendingUp
} from "lucide-react";

import { Link } from "react-router-dom";


export default function DiagnosticResult(){

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

                <div className="w-[550px]">


                    <div className="
                        flex
                        justify-center
                        mb-6
                    ">

                        <div className="
                            bg-blue-100
                            p-4
                            rounded-full
                        ">
                            <Brain
                                size={40}
                                className="text-blue-600"
                            />
                        </div>

                    </div>



                    <h1 className="
                        text-3xl
                        font-bold
                        text-center
                    ">
                        Análise concluída!
                    </h1>


                    <p className="
                        text-gray-500
                        text-center
                        mt-3
                        mb-8
                    ">
                        Nossa IA identificou seu nível atual
                        e criou uma estratégia personalizada.
                    </p>




                    <div className="
                        grid
                        md:grid-cols-2
                        gap-5
                        mb-8
                    ">


                        <div className="
                            border
                            rounded-xl
                            p-5
                        ">

                            <Target
                                className="text-blue-600 mb-3"
                            />

                            <h3 className="font-bold">
                                Nível Atual
                            </h3>

                            <p className="text-gray-500">
                                Intermediário
                            </p>

                        </div>




                        <div className="
                            border
                            rounded-xl
                            p-5
                        ">

                            <TrendingUp
                                className="text-green-600 mb-3"
                            />

                            <h3 className="font-bold">
                                Meta
                            </h3>

                            <p className="text-gray-500">
                                800+ pontos ENEM
                            </p>

                        </div>


                    </div>




                    <div className="mb-8">


                        <div className="
                            flex
                            justify-between
                            mb-2
                        ">

                            <span>
                                Preparação Atual
                            </span>

                            <span>
                                62%
                            </span>

                        </div>


                        <ProgressBar progress={62}/>


                    </div>





                    <div className="
                        bg-blue-50
                        rounded-xl
                        p-5
                        mb-8
                    ">


                        <h3 className="
                            font-bold
                            mb-3
                        ">
                            Recomendações da IA
                        </h3>


                        <ul className="
                            text-gray-600
                            space-y-2
                        ">

                            <li>
                                • Reforçar Matemática básica
                            </li>

                            <li>
                                • Resolver mais questões de Natureza
                            </li>

                            <li>
                                • Praticar redação semanalmente
                            </li>

                        </ul>


                    </div>




                    <Link to="/dashboard">

                        <Button>
                            Ver meu Dashboard
                        </Button>

                    </Link>



                </div>


            </Card>


        </div>

    );
}