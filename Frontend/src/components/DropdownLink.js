import Link from 'next/link'
import {
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

const DropdownLink = ({ children, ...props }) => (
    <DropdownMenuItem>
        {({ active }) => (
            <Link
                {...props}
                className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
                    active ? 'bg-gray-100' : ''
                } focus:outline-none transition duration-150 ease-in-out`}>
                {children}
            </Link>
        )}
    </DropdownMenuItem>
)

export const DropdownButton = ({ children, ...props }) => (
    <DropdownMenuItem>
        {({ active }) => (
            <button
                className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
                    active ? 'bg-gray-100' : ''
                } focus:outline-none transition duration-150 ease-in-out`}
                {...props}>
                {children}
            </button>
        )}
    </DropdownMenuItem>
)


export default DropdownLink
