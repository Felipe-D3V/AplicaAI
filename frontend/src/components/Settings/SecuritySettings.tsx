import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

export default function SecuritySettings() {

    return (

        <Card title="Segurança">

            <div className="space-y-4">

                <Button variant="secondary">
                    Alterar Senha
                </Button>

                <Button variant="secondary">
                    Encerrar todas as sessões
                </Button>

            </div>

        </Card>

    );

}