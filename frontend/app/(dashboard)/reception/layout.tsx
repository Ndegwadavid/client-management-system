// app/(dashboard)/reception/layout.tsx
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import Image from 'next/image';
import Link from 'next/link';
import { UserPlus, Search, Users, Clock } from 'lucide-react';

const navigationItems = [
  { name: 'Dashboard', href: '/reception', icon: Users },
  { name: 'New Client', href: '/reception/new-client', icon: UserPlus },
  { name: 'Search', href: '/reception/search', icon: Search },
  { name: 'Queue', href: '/reception/queue', icon: Clock },
];

export default function ReceptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        {/* Top Navigation Bar */}
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/reception" className="flex items-center">
                  <Image
                    src="/assets/logo.png"
                    alt="OptiPlus Logo"
                    width={40}
                    height={40}
                    className="mr-2"
                  />
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    OptiPlus Reception
                  </span>
                </Link>
              </div>

              {/* Navigation Items */}
              <div className="hidden md:flex items-center space-x-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium
                             text-gray-700 dark:text-gray-200
                             hover:bg-gray-100 dark:hover:bg-gray-800
                             transition-colors duration-200"
                  >
                    <item.icon className="h-5 w-5 mr-2" />
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Right Section */}
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">JD</span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-50">
          <div className="flex justify-around">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center py-2 px-3 text-xs font-medium
                         text-gray-700 dark:text-gray-200
                         hover:bg-gray-100 dark:hover:bg-gray-800
                         transition-colors duration-200"
              >
                <item.icon className="h-5 w-5 mb-1" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16 md:mb-0">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}