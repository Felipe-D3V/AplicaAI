interface CardProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export default function Card({
    title,
    children,
    className = ""
}: CardProps) {

    return (
        <div
            className={`
                bg-white
                rounded-xl
                shadow-md
                p-6
                ${className}
            `}
        >

            {title && (
                <h2 className="text-xl font-bold mb-4">
                    {title}
                </h2>
            )}

            {children}

        </div>
    );
}