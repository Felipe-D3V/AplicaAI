import Sidebar from "../Sidebar/Sidebar";

interface Props {
    children: React.ReactNode;
}

export default function AuthLayout({
    children
}: Props){

    return(

        <div className="flex">

            <Sidebar />

            <main className="
                flex-1
                bg-slate-50
                p-8
            ">

                {children}

            </main>

        </div>

    );

}