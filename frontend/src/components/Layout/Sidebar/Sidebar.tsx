import { useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import {
    GraduationCap,
    LayoutDashboard,
    BookOpen,
    FileText,
    BarChart3,
    User,
    Settings,
    LogOut
} from "lucide-react";

const links = [
    {
        icon: LayoutDashboard,
        label: "Dashboard",
        path: "/dashboard"
    },
    {
        icon: BookOpen,
        label: "Trilha",
        path: "/study-plan"
    },
    {
        icon: FileText,
        label: "Questões",
        path: "/questions"
    },
    {
        icon: BarChart3,
        label: "Estatísticas",
        path: "/statistics"
    },
    {
        icon: User,
        label: "Perfil",
        path: "/profile"
    },
    {
        icon: Settings,
        label: "Configurações",
        path: "/settings"
    }
];

export default function Sidebar() {

    const location = useLocation();
    const { logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
    logout();
    navigate("/");
}

    return (

            <aside
                className="
                group
                flex
                flex-col
                w-20
                hover:w-64
                sticky
                top-0
                h-screen
                bg-white
                border-r
                shadow-sm
                overflow-hidden
                transition-all
                duration-300
                "
            >

            <div
    className="
        h-20
        flex
        items-center
        border-b
    "
>

    <div
        className="
            w-20
            flex
            justify-center
            items-center
            shrink-0
            
        "
    >
        <GraduationCap
            size={32}
            className="text-blue-600"
        />
    </div>

    <span
        className="
            opacity-0
            w-0
            overflow-hidden

            group-hover:opacity-100
            group-hover:w-auto

            whitespace-nowrap

            text-2xl
            font-bold
            text-blue-600

            transition-all
            duration-300
        "
    >
        AprovaAI
    </span>

</div>

            <nav className="flex-1 p-4 space-y-2">

    {links.map((link) => (

        <SidebarItem
            key={link.path}
            icon={link.icon}
            label={link.label}
            path={link.path}
            active={location.pathname === link.path}
            />

    ))}

            </nav>
            <div className="p-4 mt-auto">

            <SidebarItem
            icon={LogOut}
            label="Sair"
            active={false}
            danger
            onClick={handleLogout}
/>

            </div>

        </aside>

    );

}