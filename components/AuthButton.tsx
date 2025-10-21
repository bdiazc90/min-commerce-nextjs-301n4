// Este botón dirá: Ingresar con Google (en caso NO haya sesión)
// o dirá: Hola, Bruno. Cerrar sesión (en caso haya sesión)

"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link";
import { Button } from "./ui/button";

export default function AuthButton() {
    const { data: session } = useSession()

    if (session) {
        return (
            <div className="flex gap-2">
                <Link href={"/profile"} className="text-sm border-1 rounded-lg px-6 py-2 h-8 flex items-center">{session.user?.name}</Link>
                <Button variant="destructive" onClick={() => signOut()}>Cerrar sesión</Button>
            </div>
        )
    }

    return <Button onClick={() => signIn("google")}>Iniciar con Google</Button>
}