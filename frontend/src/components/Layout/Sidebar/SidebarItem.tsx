import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";


interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    path?: string;
    active: boolean;
    danger?: boolean;
    onClick?: () => void;
}

export default function SidebarItem({
    icon: Icon,
    label,
    path,
    active,
    danger = false,
    onClick
}: SidebarItemProps) {

    const className = `
        flex
        items-center
        h-12
        w-full
        rounded-xl
        transition-all
        duration-300

        ${
            active
                ? "bg-blue-600 text-white"
                : danger
                ? "text-red-600 hover:bg-red-50"
                : "hover:bg-gray-100"
        }
    `;

    const content = (
        <>
            <div
                className="
                    flex
                    items-center
                    justify-center
                    w-13
                    shrink-0
                "
            >
                <Icon size={22} />
            </div>

            <span
                className="
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                    whitespace-nowrap
                "
            >
                {label}
            </span>
        </>
    );

    if (onClick) {
        return (
            <button
                type="button"
                onClick={onClick}
                className={className}
            >
                {content}
            </button>
        );
    }

    return (
        <Link
            to={path ?? "/"}
            className={className}
        >
            {content}
        </Link>
    );
}