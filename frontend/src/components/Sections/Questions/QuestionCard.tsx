import Card from "../UI/Card/Card";
import Alternative from "./Alternative";


export default function QuestionCard(){

    return (

        <Card>


            <div className="
                flex
                justify-between
                mb-6
            ">

                <span className="
                    text-sm
                    text-gray-500
                ">
                    Matemática
                </span>


                <span className="
                    text-sm
                    text-gray-500
                ">
                    Questão 1/20
                </span>


            </div>



            <h2 className="
                text-xl
                font-bold
                mb-8
            ">

                Uma função do primeiro grau possui a expressão
                f(x)=2x+3. Qual é o valor de f(4)?

            </h2>



            <div className="
                space-y-4
            ">


                <Alternative
                    letter="A"
                    text="5"
                />


                <Alternative
                    letter="B"
                    text="8"
                />


                <Alternative
                    letter="C"
                    text="11"
                />


                <Alternative
                    letter="D"
                    text="14"
                />


            </div>



        </Card>

    );

}