interface AlertProps {
    type?: "success" | "error" | "warning";
    children: React.ReactNode;
}


export default function Alert({
    type="success",
    children
}: AlertProps){


    const styles = {

        success:
        "bg-green-100 text-green-700",

        error:
        "bg-red-100 text-red-700",

        warning:
        "bg-yellow-100 text-yellow-700"

    };


    return (

        <div
            className={`
                p-4
                rounded-lg
                ${styles[type]}
            `}
        >

            {children}

        </div>

    );
}