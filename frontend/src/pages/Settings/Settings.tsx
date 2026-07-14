import AuthLayout from "../../components/Layout/AuthLayout/AuthLayout";
import BackButton from "../../components/UI/BackButton/BackButton";

import AppearanceSettings from "../../components/Settings/AppearanceSettings";
import NotificationSettings from "../../components/Settings/NotificationSettings";
import SecuritySettings from "../../components/Settings/SecuritySettings";
import AccountSettings from "../../components/Settings/AccountSettings";

export default function Settings() {

    return (

        <AuthLayout>

            <div className="max-w-5xl mx-auto">

                <BackButton />

                <h1 className="text-4xl font-bold mb-3">
                    Configurações ⚙️
                </h1>

                <p className="text-gray-500 mb-10">
                    Personalize sua experiência no AprovaAI.
                </p>

                <AppearanceSettings />

                <NotificationSettings />

                <SecuritySettings />

                <AccountSettings />

            </div>

        </AuthLayout>

    );

}