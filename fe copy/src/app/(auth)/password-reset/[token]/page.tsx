"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { useAuth } from "@/hooks/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import AuthSessionStatus from "@/app/(auth)/AuthSessionStatus"
import Link from "next/link"

const PasswordReset = () => {
    const searchParams = useSearchParams()

    const { resetPassword } = useAuth({ middleware: "guest" })

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState < { [key: string]: string[] } > ({})
    const [status, setStatus] = useState < string | null > (null)

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        //React.FormEvent was missing
        event.preventDefault()

        resetPassword({
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
            setStatus,
        })
    }

    useEffect(() => {
        setEmail(searchParams.get("email") || "")
    }, [searchParams])

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Reset Password</CardTitle>
                <CardDescription>Enter your new password to complete the reset process.</CardDescription>
            </CardHeader>
            <CardContent>
                <AuthSessionStatus className="mb-4" status={status} />
                <form onSubmit={submitForm} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            autoFocus
                        />
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
                        Reset Password
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

export default PasswordReset

