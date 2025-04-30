'use client'

import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { Search, User, Menu as MenuIcon } from 'lucide-react'

const navigation = [
  { name: 'Explore', href: '/explore' },
  { name: 'My Cellar', href: '/cellar' },
  { name: 'Community', href: '/community' },
]

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif text-wine-500">VineVault</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-wine-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search and Profile */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-wine-500 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Menu as="div" className="relative">
              <Menu.Button className="p-2 text-gray-600 hover:text-wine-500 transition-colors">
                <User className="w-5 h-5" />
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/profile"
                      className={`${
                        active ? 'bg-wine-50 text-wine-500' : 'text-gray-700'
                      } block px-4 py-2 text-sm`}
                    >
                      Your Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/settings"
                      className={`${
                        active ? 'bg-wine-50 text-wine-500' : 'text-gray-700'
                      } block px-4 py-2 text-sm`}
                    >
                      Settings
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-wine-50 text-wine-500' : 'text-gray-700'
                      } block w-full text-left px-4 py-2 text-sm`}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-600 hover:text-wine-500 transition-colors">
              <MenuIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 