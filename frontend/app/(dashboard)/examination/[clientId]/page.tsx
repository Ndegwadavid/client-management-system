// app/(dashboard)/examination/[clientId]/page.tsx
'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Save, FileText, ClipboardList } from 'lucide-react';

interface ExaminationFormData {
  // Basic Info
  clinicalHistory: string;
  complaints: string;
  
  // Prescription Data
  rightEye: {
    sph: string;
    cyl: string;
    axis: string;
    add: string;
    va: string;
    ipd: string;
  };
  leftEye: {
    sph: string;
    cyl: string;
    axis: string;
    add: string;
    va: string;
    ipd: string;
  };
  
  // Additional Data
  remarks: string;
  recommendations: string;
  examinedBy: string;
  examinationDate: string;
}

export default function ExaminationPage({ params }: { params: { clientId: string } }) {
  const [formData, setFormData] = useState<ExaminationFormData>({
    clinicalHistory: '',
    complaints: '',
    rightEye: { sph: '', cyl: '', axis: '', add: '', va: '', ipd: '' },
    leftEye: { sph: '', cyl: '', axis: '', add: '', va: '', ipd: '' },
    remarks: '',
    recommendations: '',
    examinedBy: '',
    examinationDate: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Examination data:', formData);
  };

  const handleInputChange = (eye: 'rightEye' | 'leftEye', field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [eye]: {
        ...prev[eye],
        [field]: value
      }
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Eye Examination</h1>
          <p className="text-sm text-gray-500">Patient ID: {params.clientId}</p>
        </div>
        <div className="flex space-x-3">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <FileText className="h-4 w-4 mr-2" />
            View History
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Clinical Information */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <ClipboardList className="h-5 w-5 mr-2" />
            Clinical Information
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Clinical History
              </label>
              <textarea
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.clinicalHistory}
                onChange={(e) => setFormData(prev => ({ ...prev, clinicalHistory: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Presenting Complaints
              </label>
              <textarea
                rows={2}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.complaints}
                onChange={(e) => setFormData(prev => ({ ...prev, complaints: e.target.value }))}
              />
            </div>
          </div>
        </Card>

        {/* Prescription Data */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Prescription Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Right Eye */}
            <div className="space-y-4">
              <h3 className="text-md font-medium text-gray-900">Right Eye (R)</h3>
              <div className="grid grid-cols-2 gap-4">
                {['sph', 'cyl', 'axis', 'add', 'va', 'ipd'].map((field) => (
                  <div key={`right-${field}`}>
                    <label className="block text-sm font-medium text-gray-700 uppercase">
                      {field}
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={formData.rightEye[field as keyof typeof formData.rightEye]}
                      onChange={(e) => handleInputChange('rightEye', field, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Left Eye */}
            <div className="space-y-4">
              <h3 className="text-md font-medium text-gray-900">Left Eye (L)</h3>
              <div className="grid grid-cols-2 gap-4">
                {['sph', 'cyl', 'axis', 'add', 'va', 'ipd'].map((field) => (
                  <div key={`left-${field}`}>
                    <label className="block text-sm font-medium text-gray-700 uppercase">
                      {field}
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={formData.leftEye[field as keyof typeof formData.leftEye]}
                      onChange={(e) => handleInputChange('leftEye', field, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Additional Information */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Additional Information</h2>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Remarks
              </label>
              <textarea
                rows={2}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.remarks}
                onChange={(e) => setFormData(prev => ({ ...prev, remarks: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Recommendations
              </label>
              <textarea
                rows={2}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.recommendations}
                onChange={(e) => setFormData(prev => ({ ...prev, recommendations: e.target.value }))}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Examined By
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.examinedBy}
                  onChange={(e) => setFormData(prev => ({ ...prev, examinedBy: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Examination Date
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.examinationDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, examinationDate: e.target.value }))}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Form Actions */}
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Examination
          </button>
        </div>
      </form>
    </div>
  );
}