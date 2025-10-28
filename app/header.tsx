'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import AuthButton from "@/components/AuthButton"
import { useSession } from "next-auth/react"

export function Header() {

    const currentUrl = usePathname();
    const { data: session } = useSession();

    const navigationLinks = [
        { path: "/", label: "Home" },
        { path: "/profile", label: "Perfil", hidden: session === null },
        // { path: "/about", label: "Nosotros" },
        // { path: "/contact", label: "Contacto" },
        { path: "/cart", label: "Carrito" },
        { path: "/checkout", label: "Checkout" },
        { path: "/login", label: "Login", hidden: session !== null },
    ]

    return (
        <header className="w-full">
            <nav className="flex justify-between items-center">
                <h2 className="text-5xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Min Commerce</h2>
                <ul className="flex list-none gap-3 justify-end h-full">
                    {navigationLinks.map((navLink, index) => !navLink.hidden && (
                        <li key={index}>
                            <Link href={navLink.path} className={`inline-block px-8 py-3 text-base font-semibold text-cyan-600 transition duration-300 rounded-lg hover:bg-cyan-50 hover:text-cyan-700 border border-cyan-200 hover:border-cyan-300 ${currentUrl === navLink.path ? 'bg-teal-200 text-cyan-700 border-cyan-300' : ''}`}>
                                {navLink.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <AuthButton />
            </nav>
        </header>
    )
}