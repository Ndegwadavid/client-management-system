// app/(dashboard)/reception/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  UserPlus, 
  Users, 
  Search, 
  Clock,
  ChevronRight,
  Calendar,
} from 'lucide-react';

const stats = [
  { name: 'Today\'s Registrations', value: '12', icon: Users },
  { name: 'Waiting for Examination', value: '5', icon: Clock },
  { name: 'Total Active Clients', value: '128', icon: Users },
];

const recentClients = [
  { id: 'M/2025/02/001', name: 'John Doe', time: '10:30 AM', status: 'Waiting' },
  { id: 'M/2025/02/002', name: 'Jane Smith', time: '10:45 AM', status: 'In Examination' },
  { id: 'M/2025/02/003', name: 'Mike Johnson', time: '11:00 AM', status: 'Registered' },
];

export default function ReceptionDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  return (
    <div className="space-y-6">
      {/* Header with Quick Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Reception Dashboard
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Overview of today's activities
          </p>
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="rounded-lg border-gray-300 dark:border-gray-700 
                       bg-white dark:bg-gray-800 
                       text-gray-900 dark:text-white"
            />
          </div>
          <Link 
            href="/reception/new-client"
            className="inline-flex items-center px-4 py-2 rounded-lg
                     bg-blue-600 hover:bg-blue-700 
                     text-white font-medium text-sm
                     transition-colors duration-200"
          >
            <UserPlus className="h-5 w-5 mr-2" />
            New Client
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="rounded-lg p-6
                     backdrop-blur-lg 
                     bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50
                     border border-gray-200 dark:border-gray-700
                     hover:shadow-lg transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.name}
                </p>
                <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
              <stat.icon className="h-8 w-8 text-blue-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Quick Search and Recent Clients */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Search */}
        <div className="rounded-lg p-6
                      backdrop-blur-lg 
                      bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50
                      border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Quick Search
          </h2>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-300 dark:border-gray-700 
                       bg-white dark:bg-gray-800 
                       text-gray-900 dark:text-white
                       pl-10 pr-4 py-2"
              placeholder="Search by name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="rounded-lg p-6
                      backdrop-blur-lg 
                      bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50
                      border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Today's Schedule
          </h2>
          <div className="flex items-center justify-between mb-4">
            <Calendar className="h-5 w-5 text-gray-500" />
            <span className="text-sm text-gray-500">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
          <div className="space-y-2">
            {[
              { time: '09:00 AM', event: 'Morning Setup' },
              { time: '09:30 AM', event: 'First Appointments' },
              { time: '01:00 PM', event: 'Lunch Break' },
              { time: '02:00 PM', event: 'Afternoon Sessions' },
            ].map((item) => (
              <div 
                key={item.time}
                className="flex items-center justify-between p-2 rounded-lg
                         hover:bg-gray-100 dark:hover:bg-gray-700
                         transition-colors duration-200"
              >
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.time}
                </span>
                <span className="text-sm text-gray-500">
                  {item.event}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Clients */}
      <div className="rounded-lg overflow-hidden
                    backdrop-blur-lg 
                    bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50
                    border border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">
            Recent Clients
          </h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {recentClients.map((client) => (
            <div
              key={client.id}
              className="px-6 py-4 flex items-center justify-between
                       hover:bg-gray-50 dark:hover:bg-gray-700
                       transition-colors duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 
                             flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-200 font-medium">
                    {client.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {client.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    ID: {client.id}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  {client.time}
                </span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}