import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"


export default function NavBar() {
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6  shadow-sm bg-gray-900">
      <div className="flex items-center gap-4">
        <Link className="flex items-center gap-2" href="#">
        <PlayIcon className="h-6 w-6  text-gray-400" />
          <span className="text-lg font-bold text-gray-400">Board Game Hub</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link className="text-gray-400 hover:text-gray-50" href="#">
            Games
          </Link>
          <Link className="text-gray-400 hover:text-gray-50" href="#">
            About
          </Link>
          <Link className="text-gray-400 hover:text-gray-50" href="#">
            Contact
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <form className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            className="pl-10 pr-4 py-2 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none bg-gray-800 text-gray-50 focus:bg-gray-700"
            placeholder="Search games..."
            type="search"
          />
        </form>
        <Button size="sm" variant={"default"}>
          <MenuIcon className="w-6 h-6 text-gray-50" />
        </Button>
      </div>
    </header>
  )
}

function PlayIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
