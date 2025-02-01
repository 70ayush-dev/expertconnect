"use client"

import { useState } from "react"
import { useAuth } from "@/hooks/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import AuthSessionStatus from "@/app/(auth)/AuthSessionStatus"
import Link from "next/link"

const ForgotPassword = () => {
    const { forgotPassword } = useAuth({
        middleware: "guest",
        redirectIfAuthenticated: "/dashboard",
    })

    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState < { [key: string]: string[] } > ({})
    const [status, setStatus] = useState < string | null > (null)

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Forgot Password</CardTitle>
                <CardDescription>Enter your email to receive a password reset link.</CardDescription>
            </CardHeader>
            <CardContent>
                <AuthSessionStatus className="mb-4" status={status} />
                <form onSubmit={submitForm} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            autoFocus
                        />
                        {errors.email && <p className="text-sm text-destructive">{errors.email[0]}</p>}
                    </div>
                    <Button type="submit" className="w-full">
                        Email Password Reset Link
                    </Button>
                </form>
            </CardContent>
            <CardFooter className="flex justify-center">
                <p className="text-sm text-muted-foreground">
                    Remember your password?{" "}
                    <Link href="/login" className="text-primary hover:underline">
                        Login
                    </Link>
                </p>
            </CardFooter>
        </Card>
    )
}

export default ForgotPassword

