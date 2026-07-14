import React from "react";

interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    label?: string;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
    type = "text",
    placeholder,
    value,
    label,
    disabled = false,
    onChange
}: InputProps) {

    return (
        <div className="flex flex-col gap-2">

            {label && (
                <label className="text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            <input
                type={type}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                onChange={onChange}
                className="
                    px-4 py-2
                    border border-gray-300
                    rounded-lg
                    outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    disabled:bg-gray-200
                "
            />

        </div>
    );
}