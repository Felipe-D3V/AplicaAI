import Card from "../UI/Card/Card";

interface StatsCardProps {
    icon: React.ReactNode;
    title: string;
    value: string;
}

export default function StatsCard({
    icon,
    title,
    value
}: StatsCardProps){

    return (

        <Card>

            {icon}

            <h3 className="font-bold text-lg mt-4">
                {title}
            </h3>

            <p className="text-3xl font-bold mt-2">
                {value}
            </p>

        </Card>

    );
}