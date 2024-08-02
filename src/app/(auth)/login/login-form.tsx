'use client';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    loginSchema,
    TLoginSchema,
    TRegisterSchema,
} from '@/schema/authen.schema.validate';
import envConfig from '@/utils/config';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function LoginForm() {
    const form = useForm<TLoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit: SubmitHandler<TLoginSchema> = async (data) => {
        try {
            const response = await fetch(
                `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/login`,
                {
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                }
            ).then(async (res) => {
                const payload = await res.json();
                const data = {
                    status: res.status,
                    payload,
                };
                if (!res.ok) {
                    throw data;
                }
                return data;
            });
        } catch (error) {
            const errors = (error as any).payload.errors as {
                field: string;
                message: string;
            }[];

            if (errors) {
                errors.forEach((error) => {
                    form.setError(error.field as 'email' | 'password', {
                        message: error.message,
                        type: 'server',
                    });
                });
            }
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 ">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Enter name"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button className="w-full" type="submit">
                    Login
                </Button>
            </form>
        </Form>
    );
}
