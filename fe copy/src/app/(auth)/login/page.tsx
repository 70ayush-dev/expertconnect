"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/hooks/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import AuthSessionStatus from "@/app/(auth)/AuthSessionStatus"

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: "guest",
        redirectIfAuthenticated: "/dashboard",
    })

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState < { [key: string]: string[] } > ({})
    const [status, setStatus] = useState < string | null > (null)

    useEffect(() => {
        if (router.reset?.length > 0 && Object.keys(errors).length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }
    }, [router.reset, errors])

    const submitForm = async (event: React.FormEvent) => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Welcome back! Please login to your account.</CardDescription>
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
                            autoComplete="current-password"
                        />
                        {errors.password && <p className="text-sm text-destructive">{errors.password[0]}</p>}
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="remember"
                            checked={shouldRemember}
                            onCheckedChange={(checked) => setShouldRemember(checked as boolean)}
                        />
                        <Label
                            htmlFor="remember"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Remember me
                        </Label>
                    </div>

                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 items-center">
                <Link href="/forgot-password" className="text-sm text-muted-foreground hover:text-primary">
                    Forgot your password?
                </Link>
                <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-primary hover:underline">
                        Sign up
                    </Link>
                </p>
            </CardFooter>
        </Card>
    )
}

export default Login

