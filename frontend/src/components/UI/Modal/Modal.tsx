interface ModalProps {
    isOpen: boolean;
    close: () => void;
    children: React.ReactNode;
}


export default function Modal({
    isOpen,
    close,
    children
}: ModalProps) {

    if(!isOpen) return null;


    return (
        <div className="
            fixed inset-0
            bg-black/50
            flex
            items-center
            justify-center
        ">

            <div className="
                bg-white
                rounded-xl
                p-6
                w-96
            ">

                {children}


                <button
                    onClick={close}
                    className="
                        mt-4
                        text-red-500
                    "
                >
                    Fechar
                </button>

            </div>

        </div>
    );
}