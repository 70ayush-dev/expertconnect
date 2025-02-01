import Link from "next/link"

const NavLink = ({ active = false, children, ...props }) => (
    <Link
        {...props}
        className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${active
            ? "border-primary focus:border-primary"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border focus:text-foreground focus:border-border"
            }`}
    >
        {children}
    </Link>
)

export default NavLink

