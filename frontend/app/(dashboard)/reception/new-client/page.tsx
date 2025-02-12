'use client';

import { useState, useEffect } from 'react';
import { 
  UserPlus, 
  Save, 
  X, 
  Phone,
  Mail,
  MapPin,
  Calendar,
  Info,
  CheckCircle
} from 'lucide-react';

interface ClientFormData {
  registrationNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
  areaOfResidence: string;
  previousRx: string;
  registrationDate: string;
}

export default function NewClientRegistration() {
  const [formData, setFormData] = useState<ClientFormData>({
    registrationNumber: 'M/2025/02/001',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfBirth: '',
    areaOfResidence: '',
    previousRx: '',
    registrationDate: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      registrationDate: new Date().toISOString().split('T')[0]
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleClear = () => {
    setFormData({
      registrationNumber: 'M/2025/02/001',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      gender: '',
      dateOfBirth: '',
      areaOfResidence: '',
      previousRx: '',
      registrationDate: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white flex items-center">
            <UserPlus className="mr-3 h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
            New Client Registration
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Register a new client in the OptiPlus system
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Registration Info Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Registration Details
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Basic information and contact details
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/50 px-4 py-2 rounded-lg w-full sm:w-auto">
                <p className="text-xs text-gray-500 dark:text-gray-400">Registration No.</p>
                <p className="text-lg font-mono font-bold text-blue-600 dark:text-blue-400">
                  {formData.registrationNumber}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg px-4 py-2.5 bg-gray-50 dark:bg-gray-700 
                           border border-gray-200 dark:border-gray-600
                           text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           transition-all duration-200"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg px-4 py-2.5 bg-gray-50 dark:bg-gray-700 
                           border border-gray-200 dark:border-gray-600
                           text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           transition-all duration-200"
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    className="w-full rounded-lg pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-700 
                             border border-gray-200 dark:border-gray-600
                             text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             transition-all duration-200"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    required
                    className="w-full rounded-lg pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-700 
                             border border-gray-200 dark:border-gray-600
                             text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             transition-all duration-200"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Gender
                </label>
                <select
                  required
                  className="w-full rounded-lg px-4 py-2.5 bg-gray-50 dark:bg-gray-700 
                           border border-gray-200 dark:border-gray-600
                           text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           transition-all duration-200"
                  value={formData.gender}
                  onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value }))}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Date of Birth
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    required
                    className="w-full rounded-lg pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-700 
                             border border-gray-200 dark:border-gray-600
                             text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             transition-all duration-200"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                  />
                </div>
              </div>

              {/* Area of Residence */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Area of Residence
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-700 
                             border border-gray-200 dark:border-gray-600
                             text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             transition-all duration-200"
                    value={formData.areaOfResidence}
                    onChange={(e) => setFormData(prev => ({ ...prev, areaOfResidence: e.target.value }))}
                    placeholder="Enter area of residence"
                  />
                </div>
              </div>

              {/* Previous RX */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Previous RX (if any)
                </label>
                <div className="relative">
                  <Info className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <textarea
                    className="w-full rounded-lg pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-700 
                             border border-gray-200 dark:border-gray-600
                             text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             transition-all duration-200 min-h-[100px]"
                    value={formData.previousRx}
                    onChange={(e) => setFormData(prev => ({ ...prev, previousRx: e.target.value }))}
                    placeholder="Enter previous prescription details (if available)"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row justify-end gap-4">
            <button
              type="button"
              className="px-6 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600
                       text-gray-700 dark:text-gray-300
                       hover:bg-gray-100 dark:hover:bg-gray-800
                       flex items-center justify-center gap-2
                       transition-colors duration-200"
              onClick={handleClear}
            >
              <X className="h-5 w-5" />
              <span>Clear Form</span>
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700
                       text-white font-medium
                       flex items-center justify-center gap-2
                       transition-colors duration-200
                       shadow-lg shadow-blue-600/30"
            >
              <Save className="h-5 w-5" />
              <span>Register Client</span>
            </button>
          </div>
        </form>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed bottom-4 right-4 max-w-sm">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg
                           border-l-4 border-green-500 flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30
                             flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  Registration Successful
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Client has been successfully registered in the system.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}