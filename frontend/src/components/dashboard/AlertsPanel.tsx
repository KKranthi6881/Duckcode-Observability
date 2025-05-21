import React from 'react';
import { Link } from 'react-router-dom';

const AlertsPanel: React.FC = () => {
  // Mock data for alerts
  const alerts = [
    {
      id: 1,
      severity: 'critical',
      title: 'Marketing ETL Failed',
      message: 'Pipeline failed due to connection timeout',
      time: '45 minutes ago',
    },
    {
      id: 2,
      severity: 'warning',
      title: 'Data Quality Issue',
      message: 'Missing values detected in transaction_id field',
      time: '2 hours ago',
    },
    {
      id: 3,
      severity: 'warning',
      title: 'Schema Drift Detected',
      message: 'New columns added to source database',
      time: '3 hours ago',
    },
    {
      id: 4,
      severity: 'info',
      title: 'Pipeline Runtime Increasing',
      message: 'Financial reports ETL runtime increased by 20%',
      time: '1 day ago',
    },
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
            Critical
          </span>
        );
      case 'warning':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
            Warning
          </span>
        );
      case 'info':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            Info
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
            Unknown
          </span>
        );
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical':
        return (
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        );
      case 'warning':
        return (
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        );
      case 'info':
        return (
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow">
      <div className="px-6 py-5 border-b border-neutral-200 dark:border-neutral-700 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Active Alerts</h3>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">Issues requiring your attention</p>
        </div>
        <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
          {alerts.length}
        </span>
      </div>
      <div className="px-6 py-4">
        <ul className="divide-y divide-neutral-200 dark:divide-neutral-700">
          {alerts.map((alert) => (
            <li key={alert.id} className="py-4">
              <div className="flex items-start">
                {getSeverityIcon(alert.severity)}
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-neutral-900 dark:text-white">{alert.title}</p>
                    {getSeverityBadge(alert.severity)}
                  </div>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{alert.message}</p>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-500">{alert.time}</p>
                </div>
                <button className="ml-4 text-neutral-400 hover:text-neutral-500 dark:hover:text-neutral-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 py-4 bg-neutral-50 dark:bg-neutral-700/50 border-t border-neutral-200 dark:border-neutral-700">
        <Link to="/alerts" className="text-sm font-medium text-primary-600 hover:text-primary-500">
          View all alerts →
        </Link>
      </div>
    </div>
  );
};

export default AlertsPanel;