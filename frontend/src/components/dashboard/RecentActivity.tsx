import React from 'react';

const RecentActivity: React.FC = () => {
  // Mock data for recent activities
  const activities = [
    {
      id: 1,
      type: 'dataset_updated',
      name: 'Customer Data',
      user: 'Sarah Chen',
      time: '10 minutes ago',
      description: 'Updated schema with new fields',
      icon: (
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-500 dark:bg-blue-900 dark:text-blue-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
        </div>
      ),
    },
    {
      id: 2,
      type: 'job_failed',
      name: 'Marketing ETL',
      user: 'System',
      time: '45 minutes ago',
      description: 'Failed with error: Connection timeout',
      icon: (
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-500 dark:bg-red-900 dark:text-red-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
      ),
    },
    {
      id: 3,
      type: 'alert_created',
      name: 'Data Quality Alert',
      user: 'Alex Johnson',
      time: '2 hours ago',
      description: 'Created new alert for missing values in transaction_id',
      icon: (
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-yellow-100 text-yellow-500 dark:bg-yellow-900 dark:text-yellow-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
      ),
    },
    {
      id: 4,
      type: 'lineage_updated',
      name: 'Product Analytics',
      user: 'Michael Smith',
      time: '3 hours ago',
      description: 'Added new upstream dependency on inventory data',
      icon: (
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-500 dark:bg-green-900 dark:text-green-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
          </svg>
        </div>
      ),
    },
    {
      id: 5,
      type: 'job_completed',
      name: 'Financial Reports',
      user: 'System',
      time: '5 hours ago',
      description: 'Successfully completed in 3m 42s',
      icon: (
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-purple-500 dark:bg-purple-900 dark:text-purple-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow">
      <div className="px-6 py-5 border-b border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Recent Activity</h3>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">Latest events across your data ecosystem</p>
      </div>
      <div className="px-6 py-4">
        <ul className="divide-y divide-neutral-200 dark:divide-neutral-700">
          {activities.map((activity) => (
            <li key={activity.id} className="py-4">
              <div className="flex items-start">
                {activity.icon}
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-neutral-900 dark:text-white">{activity.name}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{activity.time}</p>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{activity.description}</p>
                  <div className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">
                    {activity.user !== 'System' ? (
                      <span>By {activity.user}</span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-300">
                        Automated
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 py-4 bg-neutral-50 dark:bg-neutral-700/50 border-t border-neutral-200 dark:border-neutral-700">
        <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500">
          View all activity →
        </a>
      </div>
    </div>
  );
};

export default RecentActivity;