interface CardProps {
    title?: string;
    children: React.ReactNode;
}


export default function Card({
    title,
    children
}: CardProps) {

    return (
        <div className="
            bg-white
            rounded-xl
            shadow-md
            p-6
            w-full
        ">

            {title && (
                <h2 className="text-xl font-bold mb-4">
                    {title}
                </h2>
            )}

            {children}

        </div>
    );
}