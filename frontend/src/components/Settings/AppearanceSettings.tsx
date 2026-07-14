import Card from "../UI/Card/Card";

export default function AppearanceSettings() {

    return (

        <Card title="Aparência">

            <div className="space-y-4">

                <label className="flex items-center gap-3">

                    <input
                        type="radio"
                        name="theme"
                        defaultChecked
                    />

                    Claro

                </label>

                <label className="flex items-center gap-3">

                    <input
                        type="radio"
                        name="theme"
                    />

                    Escuro

                </label>

            </div>

        </Card>

    );

}