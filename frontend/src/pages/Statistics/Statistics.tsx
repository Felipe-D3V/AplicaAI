import StatCard from "../../components/Statistics/StatCard";
import SubjectPerformance from "../../components/Statistics/SubjectPerformance";
import BackButton from "../../components/UI/BackButton/BackButton";


export default function Statistics(){

    return (

        <main className="
            min-h-screen
            bg-slate-50
            p-6
        ">


            <div className="
                max-w-7xl
                mx-auto
            ">
                <BackButton />


                <h1 className="
                    text-4xl
                    font-bold
                    mb-3
                ">
                    Minhas Estatísticas 📊
                </h1>


                <p className="
                    text-gray-500
                    mb-10
                ">
                    Acompanhe sua evolução e descubra onde melhorar.
                </p>




                {/* Resumo */}

                <div className="
                    grid
                    md:grid-cols-3
                    gap-6
                    mb-10
                ">


                    <StatCard
                        title="Questões Resolvidas"
                        value="342"
                        description="Total realizado"
                    />


                    <StatCard
                        title="Taxa de Acerto"
                        value="78%"
                        description="Últimas questões"
                    />


                    <StatCard
                        title="Sequência"
                        value="12 dias"
                        description="Estudando todos os dias"
                    />


                </div>





                {/* Matérias */}


                <h2 className="
                    text-2xl
                    font-bold
                    mb-6
                ">
                    Desempenho por matéria
                </h2>



                <div className="
                    grid
                    md:grid-cols-2
                    gap-6
                ">


                    <SubjectPerformance
                        subject="Matemática"
                        progress={65}
                        color="bg-red-500"
                    />


                    <SubjectPerformance
                        subject="Português"
                        progress={82}
                        color="bg-blue-500"
                    />


                    <SubjectPerformance
                        subject="Natureza"
                        progress={70}
                        color="bg-green-500"
                    />


                    <SubjectPerformance
                        subject="Humanas"
                        progress={75}
                        color="bg-yellow-500"
                    />


                </div>


            </div>


        </main>

    );

}