import {
    Target,
    TrendingUp,
    Brain
} from "lucide-react";


import WelcomeCard from "../../components/Dashboard/WelcomeCard";
import StatsCard from "../../components/Dashboard/StatsCard";
import SubjectCard from "../../components/Dashboard/SubjectCard";
import StudyProgress from "../../components/Dashboard/StudyProgress";
import { useAuth } from "../../contexts/AuthContext";
import QuickActions from "../../components/Dashboard/QuickActions";
import AuthLayout from "../../components/Layout/AuthLayout/AuthLayout";


export default function Dashboard(){

    const { user } = useAuth();

    const levelNames: Record<string, string> = {
    BEGINNER: "Iniciante",
    INTERMEDIATE: "Intermediário",
    ADVANCED: "Avançado"
};

    const currentLevel =
    levelNames[user?.level ?? "BEGINNER"] ?? "Iniciante";
    
    return (
<AuthLayout>
        
            
            <div className="
                max-w-7xl
                mx-auto
            ">
                


                <WelcomeCard 
                name={user?.name ?? "Estudante"}
                />

                


                <div className="
                    grid
                    md:grid-cols-3
                    gap-6
                    mb-10
                ">

                    <StatsCard
                        icon={<Target className="text-blue-600"/>}
                        title="Meta ENEM"
                        value={`${user?.targetScore ?? 800}+`}
                    />


                    <StatsCard
                        icon={<TrendingUp className="text-green-600"/>}
                        title="Evolução"
                        value="+12%"
                    />


                    <StatsCard
                        icon={<Brain className="text-purple-600"/>}
                        title="Nível Atual"
                        value={currentLevel}
                    />

                </div>



                <StudyProgress/>



                <div className="
                    grid
                    md:grid-cols-3
                    gap-6
                    mt-10
                ">


                    <SubjectCard
                        name="Matemática"
                        progress={45}
                        color="bg-red-500"
                    />


                    <SubjectCard
                        name="Português"
                        progress={80}
                        color="bg-blue-500"
                    />


                    <SubjectCard
                        name="Natureza"
                        progress={60}
                        color="bg-green-500"
                    />

                    
                </div>
                <QuickActions />


            </div>

        
        </AuthLayout>

    );
}