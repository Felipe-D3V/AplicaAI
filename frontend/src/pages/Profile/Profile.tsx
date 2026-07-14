import AuthLayout from "../../components/Layout/AuthLayout/AuthLayout";

import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileStats from "../../components/Profile/ProfileStats";
import Achievements from "../../components/Profile/AchievementCard";

export default function Profile() {

    return (

        <AuthLayout>

            <div className="max-w-7xl mx-auto">


                <h1 className="text-4xl font-bold mb-3">
                    Meu Perfil 👤
                </h1>

                <p className="text-gray-500 mb-10">
                    Gerencie suas informações e acompanhe suas conquistas.
                </p>

                <ProfileHeader />

                <ProfileStats />

                <Achievements />

            </div>

        </AuthLayout>

    );

}