import React, { useState, useRef } from 'react';
import { Upload, FileText, Download, Search, Filter, CheckCircle, AlertCircle, X, Loader } from 'lucide-react';

interface DataManagementProps {
  selectedState: string;
}

interface UploadedFile {
  filename: string;
  originalName: string;
  file_url: string;
  size: number;
  mimetype: string;
  status?: string;
  progress?: number;
}

const API_BASE_URL = 'http://localhost:5000';

export function DataManagement({ selectedState }: DataManagementProps) {
  const [activeTab, setActiveTab] = useState('digitization');

  const tabs = [
    { id: 'digitization', label: 'Data Digitization', icon: FileText },
    { id: 'verification', label: 'Verification', icon: CheckCircle },
    { id: 'integration', label: 'Integration', icon: AlertCircle }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Data Management</h1>
          <p className="text-gray-600 mt-1">Digitize, verify, and integrate FRA legacy records</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="btn-secondary flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>Export Data</span>
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="glass-card rounded-2xl p-2">
        <nav className="flex space-x-2">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gov-green-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-white hover:shadow-md'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {activeTab === 'digitization' && <DigitizationPanel />}
      {activeTab === 'verification' && <VerificationPanel />}
      {activeTab === 'integration' && <IntegrationPanel />}
    </div>
  );
}

function VerificationPanel() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Data Verification Queue</h3>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search records..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-700">Document ID</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Village</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Applicant</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Confidence</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              { id: 'IFR-2023-001', type: 'IFR', village: 'Bharangaon', applicant: 'Ram Singh', confidence: 95, status: 'pending' },
              { id: 'CFR-2023-002', type: 'CFR', village: 'Devgaon', applicant: 'Village Committee', confidence: 87, status: 'verified' },
              { id: 'IFR-2023-003', type: 'IFR', village: 'Khadgaon', applicant: 'Sita Devi', confidence: 92, status: 'pending' },
            ].map((record) => (
              <tr key={record.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900">{record.id}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{record.type}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{record.village}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{record.applicant}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-green-600 rounded-full"
                        style={{ width: `${record.confidence}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600">{record.confidence}%</span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    record.status === 'verified' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                  }`}>
                    {record.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                      Verify
                    </button>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function IntegrationPanel() {
  const [syncing, setSyncing] = useState(false);

  const handleSync = async () => {
    setSyncing(true);
    // Simulate sync operation
    setTimeout(() => {
      setSyncing(false);
      alert('Sync completed successfully!');
    }, 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Sources Integration</h3>
        
        <div className="space-y-4">
          {[
            { source: 'Legacy FRA Records', status: 'connected', records: '125,640' },
            { source: 'Revenue Department', status: 'pending', records: '89,420' },
            { source: 'Forest Department', status: 'connected', records: '234,560' },
            { source: 'Tribal Welfare Dept', status: 'connected', records: '156,780' },
          ].map((source, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{source.source}</h4>
                <p className="text-sm text-gray-600">{source.records} records</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`w-3 h-3 rounded-full ${
                  source.status === 'connected' ? 'bg-green-500' : 'bg-orange-500'
                }`} />
                <span className="text-sm capitalize text-gray-600">{source.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sync Status</h3>
        
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium text-green-900">Last Sync: Success</span>
            </div>
            <p className="text-sm text-green-700">Updated 2 hours ago with 1,234 new records</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Sync Progress</span>
              <span>85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }} />
            </div>
          </div>

          <button 
            onClick={handleSync}
            disabled={syncing}
            className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {syncing && <Loader className="w-4 h-4 animate-spin" />}
            {syncing ? 'Syncing...' : 'Sync Now'}
          </button>
        </div>
      </div>
    </div>
  );
}

function DigitizationPanel() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      await handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      await handleFiles(e.target.files);
    }
  };

  const handleFiles = async (files: FileList) => {
    setIsUploading(true);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      // Add file to list with 'uploading' status
      const newFile: UploadedFile = {
        filename: file.name,
        originalName: file.name,
        file_url: '',
        size: file.size,
        mimetype: file.type,
        status: 'uploading',
        progress: 0
      };
      
      setUploadedFiles(prev => [...prev, newFile]);

      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch(`${API_BASE_URL}/api/upload`, {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (result.success && result.data) {
          // Update file with success status
          setUploadedFiles(prev => 
            prev.map(f => 
              f.originalName === file.name && f.status === 'uploading'
                ? { 
                    ...result.data, 
                    status: 'completed', 
                    progress: 100 
                  }
                : f
            )
          );
        } else {
          throw new Error(result.error || 'Upload failed');
        }
      } catch (error) {
        console.error('Upload error:', error);
        // Update file with error status
        setUploadedFiles(prev => 
          prev.map(f => 
            f.originalName === file.name && f.status === 'uploading'
              ? { ...f, status: 'error', progress: 0 }
              : f
          )
        );
      }
    }

    setIsUploading(false);
  };

  const removeFile = (filename: string) => {
    setUploadedFiles(prev => prev.filter(f => f.filename !== filename));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI-Powered Document Processing</h3>
        
        <div className="space-y-4">
          <div 
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-300 bg-white'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              onChange={handleFileInput}
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png,.tiff,.doc,.docx"
            />
            
            <Upload className={`w-12 h-12 mx-auto mb-4 ${dragActive ? 'text-green-600' : 'text-gray-400'}`} />
            <h4 className="text-lg font-medium text-gray-900 mb-2">Upload FRA Documents</h4>
            <p className="text-gray-600 mb-4">
              Drop scanned FRA claims, verification documents, and legacy records here
            </p>
            <button 
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
            >
              {isUploading && <Loader className="w-4 h-4 animate-spin" />}
              {isUploading ? 'Uploading...' : 'Select Files'}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="font-medium text-blue-900">OCR Processing</div>
              <div className="text-blue-700">Extract text from scanned documents</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="font-medium text-green-900">NER Analysis</div>
              <div className="text-green-700">Identify names, places, coordinates</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Processing Status</h3>
        
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {uploadedFiles.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>No files uploaded yet</p>
            </div>
          ) : (
            uploadedFiles.map((file, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900 text-sm truncate flex-1">
                    {file.originalName}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      file.status === 'completed' ? 'bg-green-100 text-green-800' :
                      file.status === 'uploading' ? 'bg-blue-100 text-blue-800' :
                      file.status === 'error' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {file.status || 'queued'}
                    </span>
                    {file.status === 'completed' && (
                      <button 
                        onClick={() => removeFile(file.filename)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      file.status === 'error' ? 'bg-red-600' : 'bg-green-600'
                    }`}
                    style={{ width: `${file.progress || 0}%` }}
                  />
                </div>
                {file.status === 'completed' && file.file_url && (
                  <a 
                    href={file.file_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-block"
                  >
                    View uploaded file →
                  </a>
                )}
                {file.status === 'error' && (
                  <p className="text-xs text-red-600 mt-2">Upload failed. Please try again.</p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}