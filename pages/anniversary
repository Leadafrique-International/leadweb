import { useState } from 'react';

const ProgramDownload = () => {
  const [downloadState, setDownloadState] = useState('idle');

  const handleDownload = async () => {
    try {
      setDownloadState('downloading');
      
      // Simulate download delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create download link
      const link = document.createElement('a');
      link.href = '/program.pdf'; // Adjust this path to your PDF location
      link.download = '20th_Anniversary_Program.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloadState('success');
      setTimeout(() => setDownloadState('idle'), 2000);
    } catch (error) {
      setDownloadState('error');
      setTimeout(() => setDownloadState('idle'), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-blue-50 rounded-lg">
            {/* Document Icon */}
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              20th Anniversary Program
            </h1>
            <p className="text-sm text-gray-500">PDF Document • 2024</p>
          </div>
        </div>

        {/* Preview Card */}
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Includes:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>Order of Service</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>Hymns and Readings</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>Program Schedule</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>Anniversary Details</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          disabled={downloadState === 'downloading'}
          className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200
            ${downloadState === 'downloading' 
              ? 'bg-blue-100 text-blue-500 cursor-wait'
              : downloadState === 'success'
              ? 'bg-green-100 text-green-700'
              : downloadState === 'error'
              ? 'bg-red-100 text-red-700'
              : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
        >
          {downloadState === 'downloading' ? (
            <>
              <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              <span>Downloading...</span>
            </>
          ) : downloadState === 'success' ? (
            <>
              {/* Checkmark Icon */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Downloaded Successfully!</span>
            </>
          ) : downloadState === 'error' ? (
            <>
              {/* Error Icon */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Download Failed</span>
            </>
          ) : (
            <>
              {/* Download Icon */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Program PDF</span>
            </>
          )}
        </button>

        {/* Footer */}
        <p className="text-xs text-center text-gray-500">
          Click the button above to download the complete program
        </p>
      </div>
    </div>
  );
};

export default ProgramDownload;
