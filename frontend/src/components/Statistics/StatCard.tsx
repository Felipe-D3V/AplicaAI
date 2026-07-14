import Card from "../UI/Card/Card";


interface StatCardProps {

    title:string;
    value:string;
    description:string;

}


export default function StatCard({
    title,
    value,
    description
}:StatCardProps){

    return (

        <Card>

            <p className="
                text-gray-500
                text-sm
            ">
                {title}
            </p>


            <h2 className="
                text-3xl
                font-bold
                mt-2
            ">
                {value}
            </h2>


            <p className="
                text-gray-500
                mt-2
            ">
                {description}
            </p>


        </Card>

    );

}