import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { Form } from '@inertiajs/react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: LoginProps) {
    return (
        <AuthLayout
            title="Log in to your account"
            description="Enter your email and password below to log in"
        >
            {/* Decorative Glows (Updated to Cyan/Purple) */}
            <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]"></div>
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[100px]"></div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_0_40px_-10px_rgba(168,85,247,0.2)] backdrop-blur-md">
                <Form
                    {...store.form()}
                    resetOnSuccess={['password']}
                    className="flex flex-col gap-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label
                                        htmlFor="email"
                                        className="text-gray-300"
                                    >
                                        Email address
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        placeholder="email@example.com"
                                        className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label
                                            htmlFor="password"
                                            className="text-gray-300"
                                        >
                                            Password
                                        </Label>
                                        {canResetPassword && (
                                            <TextLink
                                                href={request()}
                                                className="ml-auto text-sm text-purple-400 transition-colors hover:text-orange-400"
                                                tabIndex={5}
                                            >
                                                Forgot password?
                                            </TextLink>
                                        )}
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        required
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        placeholder="Password"
                                        className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Checkbox
                                        id="remember"
                                        name="remember"
                                        tabIndex={3}
                                        className="border-white/20 data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-600"
                                    />
                                    <Label
                                        htmlFor="remember"
                                        className="text-gray-300"
                                    >
                                        Remember me
                                    </Label>
                                </div>

                                <Button
                                    type="submit"
                                    className="mt-4 w-full border-0 bg-gradient-to-r from-purple-600 to-orange-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 hover:from-purple-500 hover:to-orange-500 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]"
                                    tabIndex={4}
                                    disabled={processing}
                                    data-test="login-button"
                                >
                                    {processing && (
                                        <Spinner className="text-white" />
                                    )}
                                    Log in
                                </Button>
                            </div>

                            {canRegister && (
                                <div className="text-center text-sm text-gray-400">
                                    Don't have an account?{' '}
                                    <TextLink
                                        href={register()}
                                        tabIndex={5}
                                        className="font-medium text-purple-400 transition-colors hover:text-orange-400"
                                    >
                                        Sign up
                                    </TextLink>
                                </div>
                            )}
                        </>
                    )}
                </Form>

                {status && (
                    <div className="mt-4 text-center text-sm font-medium text-green-400">
                        {status}
                    </div>
                )}
            </div>
        </AuthLayout>
    );
}
