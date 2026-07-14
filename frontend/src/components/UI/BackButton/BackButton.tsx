import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
    confirm?: boolean;
}


export default function BackButton({
    confirm = false
}: BackButtonProps){

    function handleClick(e: React.MouseEvent){

        if(confirm){

            const result = window.confirm(
                "Tem certeza que deseja sair? Seu progresso atual pode não ser salvo."
            );


            if(!result){
                e.preventDefault();
            }

        }

    }


    return (

        <Link
            to="/dashboard"
            onClick={handleClick}
            className="
                inline-flex
                items-center
                gap-2
                text-blue-600
                hover:text-blue-800
                font-semibold
                mb-6
            "
        >

            <ArrowLeft size={20}/>

            Voltar para Dashboard

        </Link>

    );

}