"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
            EduGem
          </span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-violet-600 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-violet-600 transition-colors">
            How It Works
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-violet-600 transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-violet-600 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Log In
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600"
          >
            Sign Up
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 p-4">
          <nav className="flex flex-col gap-4 p-4">
            <Link
              href="#features"
              className="text-lg font-medium p-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-lg font-medium p-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-lg font-medium p-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium p-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" className="w-full">
                Log In
              </Button>
              <Button className="w-full bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600">
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

