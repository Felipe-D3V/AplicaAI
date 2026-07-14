import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";


export default function LogoutButton(){

    return (

        <Link
            to="/"
            className="
                flex
                items-center
                gap-2
                text-red-600
                hover:text-red-700
                font-semibold
            "
        >

            <LogOut size={20}/>

            Sair

        </Link>

    );

}