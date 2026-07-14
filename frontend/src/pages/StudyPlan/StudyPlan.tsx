import SubjectProgress from "../../components/StudyPlan/SubjectProgress";
import AuthLayout from "../../components/Layout/AuthLayout/AuthLayout";


export default function StudyPlan(){

    return (

        <AuthLayout>


            <div className="
                max-w-7xl
                mx-auto
            ">


                <h1 className="
                    text-4xl
                    font-bold
                    mb-3
                ">
                    Minha Trilha de Estudos 📚
                </h1>


                <p className="
                    text-gray-500
                    mb-10
                ">
                    Sua preparação personalizada criada pela IA.
                </p>




                <div className="
                    grid
                    md:grid-cols-2
                    gap-8
                ">


                    <SubjectProgress
                        subject="Matemática"
                        progress={60}
                        topics={[
                            "Função do 1º Grau",
                            "Equações",
                            "Geometria",
                            "Probabilidade"
                        ]}
                    />



                    <SubjectProgress
                        subject="Português"
                        progress={75}
                        topics={[
                            "Interpretação de Texto",
                            "Gramática",
                            "Redação",
                            "Literatura"
                        ]}
                    />



                    <SubjectProgress
                        subject="Natureza"
                        progress={45}
                        topics={[
                            "Cinemática",
                            "Biologia Celular",
                            "Química Orgânica"
                        ]}
                    />



                    <SubjectProgress
                        subject="Humanas"
                        progress={50}
                        topics={[
                            "História do Brasil",
                            "Geografia",
                            "Filosofia"
                        ]}
                    />


                </div>


            </div>


        </AuthLayout>

    );

}