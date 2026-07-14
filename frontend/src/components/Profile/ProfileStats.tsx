import StatCard from "../Statistics/StatCard";

export default function ProfileStats() {

    return (

        <div
            className="
                grid
                md:grid-cols-3
                gap-6
                my-10
            "
        >

            <StatCard
                title="Dias Consecutivos"
                value="12 🔥"
                description="Continue assim!"
            />

            <StatCard
                title="Questões Resolvidas"
                value="342"
                description="Desde o início"
            />

            <StatCard
                title="Progresso Geral"
                value="62%"
                description="Preparação ENEM"
            />

        </div>

    );

}