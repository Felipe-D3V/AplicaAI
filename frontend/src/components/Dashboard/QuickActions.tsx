import { Link } from "react-router-dom";
import {
    BookOpen,
    BarChart3,
    ClipboardList
} from "lucide-react";


const actions = [
    {
        title: "Minha Trilha",
        description: "Continue seus estudos personalizados.",
        icon: BookOpen,
        path: "/study-plan"
    },
    {
        title: "Questões",
        description: "Pratique e melhore seu desempenho.",
        icon: ClipboardList,
        path: "/questions"
    },
    {
        title: "Estatísticas",
        description: "Veja sua evolução.",
        icon: BarChart3,
        path: "/statistics"
    }
];


export default function QuickActions(){

    return (

        <div className="mt-14">

            <h2 className="
                text-2xl
                font-bold
                mb-6
            ">
                Acessos rápidos
            </h2>


            <div className="
                mt-10
                grid
                md:grid-cols-3
                gap-8
            ">


                {
                    actions.map((action,index)=>{

                        const Icon = action.icon;


                        return (

                            <Link
                                key={index}
                                to={action.path}
                            >

                                <div className="
                                    bg-white
                                    rounded-2xl
                                    p-6
                                    shadow
                                    hover:shadow-xl
                                    transition
                                    cursor-pointer
                                ">


                                    <Icon
                                        size={32}
                                        className="text-blue-600 mb-4"
                                    />


                                    <h3 className="
                                        font-bold
                                        text-xl
                                    ">
                                        {action.title}
                                    </h3>


                                    <p className="
                                        text-gray-500
                                        mt-2
                                    ">
                                        {action.description}
                                    </p>


                                </div>

                            </Link>

                        );

                    })
                }


            </div>

        </div>

    );

}