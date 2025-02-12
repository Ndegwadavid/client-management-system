'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Navigation items with icons and access levels
const navigation = [
  {
    name: 'Reception',
    href: '/reception',
    subitems: [
      { name: 'New Client', href: '/reception/new-client' },
      { name: 'Search', href: '/reception/search' },
      { name: 'Queue', href: '/reception/queue' },
    ],
  },
  {
    name: 'Examination',
    href: '/examination',
    subitems: [
      { name: 'Queue', href: '/examination/queue' },
      { name: 'History', href: '/examination/history' },
    ],
  },
  {
    name: 'Sales',
    href: '/sales',
    subitems: [
      { name: 'Queue', href: '/sales/queue' },
      { name: 'History', href: '/sales/history' },
    ],
  },
  {
    name: 'Collections',
    href: '/collections',
    subitems: [
      { name: 'Pending', href: '/collections/pending' },
      { name: 'Completed', href: '/collections/completed' },
      { name: 'With Balance', href: '/collections/with-balance' },
    ],
  },
  {
    name: 'Admin',
    href: '/admin',
    subitems: [
      { name: 'Dashboard', href: '/admin/dashboard' },
      { name: 'Users', href: '/admin/users' },
      { name: 'Settings', href: '/admin/settings' },
    ],
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleMenu = (menuName: string) => {
    setOpenMenus(prev =>
      prev.includes(menuName)
        ? prev.filter(name => name !== menuName)
        : [...prev, menuName]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-between px-4 bg-blue-600 text-white">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">OptiPlus</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mt-4 px-2">
          {navigation.map((item) => (
            <div key={item.name} className="mb-2">
              <button
                onClick={() => toggleMenu(item.name)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${
                  pathname.startsWith(item.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span>{item.name}</span>
                <ChevronDown
                  className={`h-4 w-4 transform transition-transform ${
                    openMenus.includes(item.name) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openMenus.includes(item.name) && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.subitems.map((subitem) => (
                    <Link
                      key={subitem.href}
                      href={subitem.href}
                      className={`block px-3 py-2 text-sm rounded-md ${
                        pathname === subitem.href
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-500 hover:bg-gray-50'
                      }`}
                    >
                      {subitem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 w-full p-4 border-t">
          <button
            onClick={() => {/* TODO: Implement logout */}}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 w-full px-3 py-2 text-sm"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        {/* Top Navigation */}
        <header className="bg-white shadow">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-500"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-4">
              {/* Add user profile, notifications, etc. here */}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}