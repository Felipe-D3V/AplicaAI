import Card from "../UI/Card/Card";

export default function NotificationSettings() {

    return (

        <Card title="Notificações">

            <div className="space-y-4">

                <label className="flex items-center gap-3">

                    <input
                        type="checkbox"
                        defaultChecked
                    />

                    Receber lembretes de estudo

                </label>

                <label className="flex items-center gap-3">

                    <input
                        type="checkbox"
                        defaultChecked
                    />

                    Receber novidades

                </label>

                <label className="flex items-center gap-3">

                    <input
                        type="checkbox"
                    />

                    Emails promocionais

                </label>

            </div>

        </Card>

    );

}