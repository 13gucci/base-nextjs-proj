import RegisterForm from "@/app/(auth)/register/register-form";
import React from "react";

export default function RegisterPage() {
    return (
        <div className="flex items-center justify-center">
            <div className="max-w-2xl w-full mx-auto">
                <h1 className="text-xl font-semibold text-center">
                    Register Page
                </h1>
                <RegisterForm />
            </div>
        </div>
    );
}
