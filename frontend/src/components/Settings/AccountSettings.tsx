import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

export default function AccountSettings() {

    return (

        <Card title="Conta">

            <div className="space-y-4">

                <Button variant="secondary">
                    Exportar meus dados
                </Button>

                <Button variant="secondary">
                    Excluir Conta
                </Button>

            </div>

        </Card>

    );

}