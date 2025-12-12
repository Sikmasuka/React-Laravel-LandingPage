import { login } from '@/routes';
import { store } from '@/routes/register';
import { Form, Head } from '@inertiajs/react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';

export default function Register() {
    return (
        <AuthLayout
            title="Create an account"
            description="Enter your details below to create your account"
        >
            <Head title="Register" />

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_0_40px_-10px_rgba(168,85,247,0.2)] backdrop-blur-md">
                <Form
                    {...store.form()}
                    resetOnSuccess={['password', 'password_confirmation']}
                    disableWhileProcessing
                    className="flex flex-col gap-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label
                                        htmlFor="name"
                                        className="text-gray-300"
                                    >
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="name"
                                        name="name"
                                        placeholder="Full name"
                                        className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

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
                                        required
                                        tabIndex={2}
                                        autoComplete="email"
                                        name="email"
                                        placeholder="email@example.com"
                                        className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="grid gap-2">
                                    <Label
                                        htmlFor="password"
                                        className="text-gray-300"
                                    >
                                        Password
                                    </Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                        tabIndex={3}
                                        autoComplete="new-password"
                                        name="password"
                                        placeholder="Password"
                                        className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                <div className="grid gap-2">
                                    <Label
                                        htmlFor="password_confirmation"
                                        className="text-gray-300"
                                    >
                                        Confirm password
                                    </Label>
                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        required
                                        tabIndex={4}
                                        autoComplete="new-password"
                                        name="password_confirmation"
                                        placeholder="Confirm password"
                                        className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
                                    />
                                    <InputError
                                        message={errors.password_confirmation}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    // UPDATED: Gradient changed to Cyan->Blue, Shadows changed to Cyan
                                    className="mt-2 w-full border-0 bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 hover:from-cyan-500 hover:to-blue-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
                                    tabIndex={5}
                                    data-test="register-user-button"
                                    disabled={processing} // Good practice to re-add disabled state while processing
                                >
                                    {processing && (
                                        <Spinner className="text-white" />
                                    )}
                                    Create account
                                </Button>
                            </div>

                            <div className="text-center text-sm text-gray-400">
                                Already have an account?{' '}
                                <TextLink
                                    href={login()}
                                    tabIndex={6}
                                    className="text-cyan font-medium transition-colors hover:text-cyan-400"
                                >
                                    Log in
                                </TextLink>
                            </div>
                        </>
                    )}
                </Form>
            </div>
        </AuthLayout>
    );
}
