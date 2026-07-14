interface ProgressBarProps {
    progress: number;
    color?: string;
}

export default function ProgressBar({
    progress,
    color = "bg-blue-600"
}: ProgressBarProps) {

    return (
        <div className="w-full bg-gray-200 rounded-full h-4">

            <div
                className={`
                    ${color}
                    h-4
                    rounded-full
                    transition-all
                `}
                style={{
                    width: `${progress}%`
                }}
            />

        </div>
    );
}