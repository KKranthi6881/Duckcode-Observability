import React from 'react';

const StatusOverview: React.FC = () => {
  // Mock data for pipeline statuses
  const pipelineStatuses = [
    { name: 'Customer Data ETL', status: 'healthy', lastRun: '10 minutes ago', nextRun: '50 minutes' },
    { name: 'Product Analytics', status: 'warning', lastRun: '1 hour ago', nextRun: '5 hours' },
    { name: 'Financial Reports', status: 'healthy', lastRun: '3 hours ago', nextRun: '21 hours' },
    { name: 'Marketing Dashboard', status: 'error', lastRun: '2 days ago', nextRun: 'manual trigger' },
    { name: 'Inventory Sync', status: 'healthy', lastRun: '30 minutes ago', nextRun: '1.5 hours' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'healthy':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-green-500" fill="currentColor" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="3" />
            </svg>
            Healthy
          </span>
        );
      case 'warning':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
            <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-yellow-500" fill="currentColor" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="3" />
            </svg>
            Warning
          </span>
        );
      case 'error':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
            <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-red-500" fill="currentColor" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="3" />
            </svg>
            Error
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

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow">
      <div className="px-6 py-5 border-b border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Pipeline Status</h3>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">Current status of your data pipelines</p>
      </div>
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
          <thead className="bg-neutral-50 dark:bg-neutral-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-300 uppercase tracking-wider">
                Pipeline
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-300 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-300 uppercase tracking-wider">
                Last Run
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-300 uppercase tracking-wider">
                Next Run
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700">
            {pipelineStatuses.map((pipeline, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white dark:bg-neutral-800' : 'bg-neutral-50 dark:bg-neutral-700/50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900 dark:text-white">
                  {pipeline.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {getStatusBadge(pipeline.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">
                  {pipeline.lastRun}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">
                  {pipeline.nextRun}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-primary-600 hover:text-primary-900 dark:hover:text-primary-400">View details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 bg-neutral-50 dark:bg-neutral-700/50 border-t border-neutral-200 dark:border-neutral-700">
        <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500">
          View all pipelines →
        </a>
      </div>
    </div>
  );
};

export default StatusOverview;