"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/hooks/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

const Register = () => {
    const { register } = useAuth({
        middleware: "guest",
        redirectIfAuthenticated: "/dashboard",
    })

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState < { [key: string]: string[] } > ({})

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault()

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>Create a new account</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={submitForm} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                            autoFocus
                        />
                        {errors.name && <p className="text-sm text-destructive">{errors.name[0]}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                        {errors.email && <p className="text-sm text-destructive">{errors.email[0]}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                            autoComplete="new-password"
                        />
                        {errors.password && <p className="text-sm text-destructive">{errors.password[0]}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="passwordConfirmation">Confirm Password</Label>
                        <Input
                            id="passwordConfirmation"
                            type="password"
                            value={passwordConfirmation}
                            onChange={(event) => setPasswordConfirmation(event.target.value)}
                            required
                        />
                        {errors.password_confirmation && (
                            <p className="text-sm text-destructive">{errors.password_confirmation[0]}</p>
                        )}
                    </div>

                    <Button type="submit" className="w-full">
                        Register
                    </Button>
                </form>
            </CardContent>
            <CardFooter className="flex justify-center">
                <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary hover:underline">
                        Login
                    </Link>
                </p>
            </CardFooter>
        </Card>
    )
}

export default Register

