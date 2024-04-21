import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex items-center">
          <Link className="inline-flex items-center" href="#">
            <GamepadIcon className="h-8 w-8 text-indigo-500" />
            <span className="ml-2 text-xl font-bold text-white">GameHub</span>
          </Link>
        </div>
        <nav className="flex flex-col space-y-2">
          <Link className="hover:text-white transition-colors" href="#">
            Home
          </Link>
          <Link className="hover:text-white transition-colors" href="#">
            Games
          </Link>
          <Link className="hover:text-white transition-colors" href="#">
            About
          </Link>
          <Link className="hover:text-white transition-colors" href="#">
            Contact
          </Link>
        </nav>
        <div className="flex flex-col space-y-2">
          <p className="font-medium">Follow Us</p>
          <div className="flex space-x-4">
            <Link className="hover:text-white transition-colors" href="#">
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              <YoutubeIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="font-medium">Subscribe</p>
          <form className="flex space-x-2">
            <Input
              className="flex-1 bg-gray-800 border-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter your email"
              type="email"
            />
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
        <p>© 2024 GameHub. All rights reserved.</p>
      </div>
    </footer>
  )
}

function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function GamepadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}


function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function YoutubeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
