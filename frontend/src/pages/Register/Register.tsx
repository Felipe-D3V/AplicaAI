import { useState } from "react";

import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Card from "../../components/UI/Card/Card";
import Alert from "../../components/UI/Alert/Alert";

import { Link } from "react-router-dom";


export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");



    function handleSubmit(event: React.FormEvent){

        event.preventDefault(); 
        setError("");

        if (!name || !email || !password || !confirmPassword) {
            setError("Preencha todos os campos!");
            return;
        }


        if (!email.includes("@")) {
            setError("Digite um email válido!");
            return;
        }


        if (password.length < 8) {
            setError("A senha deve ter pelo menos 8 caracteres!");
            return;
        }


        if (password !== confirmPassword) {
            setError("As senhas não coincidem!");
            return;
        }


        console.log({
            name,
            email,
            password
        });


        alert("Cadastro realizado com sucesso!");

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
                        Criar Conta
                    </h1>


                    <p className="
                        text-gray-500
                        text-center
                        mb-8
                    ">
                        Comece sua preparação personalizada para o ENEM.
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
                            label="Nome"
                            placeholder="Digite seu nome"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />


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
                            placeholder="Crie uma senha"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />


                        <Input
                            label="Confirmar senha"
                            type="password"
                            placeholder="Confirme sua senha"
                            value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                        />



                        <Button 
                        type="submit"
                        >
                        Criar Conta
                        </Button>

                    </form>



                    <p className="
                        text-center
                        text-gray-500
                        mt-6
                    ">

                        Já possui uma conta?
                        {" "}

                        <Link
                            to="/login"
                            className="text-blue-600 font-semibold"
                        >
                            Entrar
                        </Link>

                    </p>


                </div>


            </Card>


        </div>

    );
}