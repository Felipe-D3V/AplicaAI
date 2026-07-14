import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { User } from "lucide-react";

export default function ProfileHeader() {

    return (

        <Card>

            <div className="flex items-center gap-8">

                <div
                    className="
                        w-32
                        h-32
                        rounded-full
                        bg-blue-100
                        flex
                        items-center
                        justify-center
                    "
                >
                    <User
                        size={60}
                        className="text-blue-600"
                    />
                </div>

                <div className="flex-1">

                    <h2 className="text-3xl font-bold">
                        Felipe Gabriel
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Ciência da Computação • UNASP
                    </p>

                    <div className="mt-6 space-y-1">

                        <p>
                            🎯 Meta ENEM:
                            <strong> 800+</strong>
                        </p>

                        <p>
                            🧠 Nível:
                            <strong> Intermediário</strong>
                        </p>

                    </div>

                </div>

                <Button>
                    Editar Perfil
                </Button>

            </div>

        </Card>

    );

}