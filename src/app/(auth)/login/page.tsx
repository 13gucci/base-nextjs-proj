import LoginForm from '@/app/(auth)/login/login-form';
import { websites } from '@/lib/data';

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center">
            <div className="max-w-2xl w-full mx-auto">
                <h1 className="text-xl font-semibold text-center">
                    Login Page
                </h1>
                <LoginForm />
            </div>
        </div>
    );
}
