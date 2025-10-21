import Link from "next/link"
import AuthButton from "@/components/AuthButton"

export function Header() {
    const navigationLinks = [
        { path: "/", label: "Home" },
        { path: "/profile", label: "Perfil" },
        // { path: "/about", label: "Nosotros" },
        // { path: "/contact", label: "Contacto" },
        { path: "/cart", label: "Carrito" },
        { path: "/checkout", label: "Checkout" },
    ]

    return (
        <header className="w-full">
            <nav className="flex justify-between items-center">
                <h2 className="text-5xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Min Commerce</h2>
                <ul className="flex list-none gap-3 justify-end h-full">
                    {navigationLinks.map((navLink, index) =>
                        <li key={index}>
                            <Link href={navLink.path} className="inline-block px-8 py-3 text-base font-semibold text-cyan-600 transition duration-300 rounded-lg hover:bg-cyan-50 hover:text-cyan-700 border border-cyan-200 hover:border-cyan-300">
                                {navLink.label}
                            </Link>
                        </li>
                    )}
                </ul>
                <AuthButton />
            </nav>
        </header>
    )
}