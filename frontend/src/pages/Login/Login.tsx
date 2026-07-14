import { useState } from "react";

import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Card from "../../components/UI/Card/Card";
import Alert from "../../components/UI/Alert/Alert";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();



    function handleSubmit(event: React.FormEvent) {

        event.preventDefault();

        setError("");


        if (!email || !password) {
            setError("Preencha todos os campos!");
            return;
        }


        if (!email.includes("@")) {
            setError("Digite um email válido!");
            return;
        }


        if (password.length < 8) {
            setError("Senha inválida!");
            return;
        }


        login({

        id: 1,

        name: "Felipe Gabriel",

        email: email,

        targetScore: 800,

        level: "Intermediário",

        streak: 12,

        progress: 62

    });

    navigate("/dashboard");

    }



    return (

        <div className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-slate-50
            px-6
        ">


            <Card>

                <div className="w-96">


                    <h1 className="
                        text-3xl
                        font-bold
                        text-center
                        mb-2
                    ">
                        Bem-vindo de volta
                    </h1>


                    <p className="
                        text-gray-500
                        text-center
                        mb-8
                    ">
                        Entre na sua conta e continue seus estudos.
                    </p>



                    {error && (

                        <div className="mb-4">

                            <Alert type="error">
                                {error}
                            </Alert>

                        </div>

                    )}




                    <form 
                        className="space-y-4"
                        onSubmit={handleSubmit}
                    >


                        <Input
                            label="Email"
                            type="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />



                        <Input
                            label="Senha"
                            type="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />



                        <Button
                            type="submit"
                        >
                            Entrar
                        </Button>


                    </form>



                    <p className="
                        text-center
                        text-gray-500
                        mt-6
                    ">

                        Ainda não possui uma conta?
                        {" "}

                        <Link
                            to="/register"
                            className="text-blue-600 font-semibold"
                        >
                            Criar conta
                        </Link>

                    </p>


                </div>


            </Card>


        </div>

    );
}