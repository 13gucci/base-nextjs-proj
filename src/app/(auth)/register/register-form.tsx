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
    registerSchema,
    TRegisterSchema,
} from '@/schema/authen.schema.validate';
import envConfig from '@/utils/config';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function RegisterForm() {
    const form = useForm<TRegisterSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            confirmPassword: '',
            email: '',
            name: '',
            password: '',
        },
    });

    const onSubmit: SubmitHandler<TRegisterSchema> = async (data) => {
        const response = await fetch(
            `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/register`,
            {
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            }
        ).then((res) => res.json());
        if (response) {
            console.log(response);
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
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter name" {...field} />
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
                                    placeholder="Enter password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Enter confirm password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="w-full" type="submit">
                    Submit
                </Button>
            </form>
        </Form>
    );
}
