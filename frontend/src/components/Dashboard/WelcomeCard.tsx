interface WelcomeCardProps {
    name: string;
}

export default function WelcomeCard({
    name
}: WelcomeCardProps) {

    return (

        <div className="mb-10">

            <h1 className="
                text-4xl
                font-bold
            ">
                Olá, {name}! 👋
            </h1>


            <p className="
                text-gray-500
                mt-2
            ">
                Continue sua preparação para o ENEM.
            </p>

        </div>

    );
}