import { useState } from 'react';

function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data
  const datasets = [
    { id: 1, name: 'sales_data', source: 'Snowflake', updated: '2023-11-15' },
    { id: 2, name: 'customer_info', source: 'MySQL', updated: '2023-11-10' },
    { id: 3, name: 'product_inventory', source: 'Azure SQL', updated: '2023-11-12' },
  ];

  const filteredDatasets = datasets.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.source.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Data Catalog</h1>
      
      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search datasets..."
          className="w-full p-2 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {/* Results */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredDatasets.map((dataset) => (
              <tr key={dataset.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dataset.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dataset.source}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dataset.updated}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-indigo-600 hover:text-indigo-900">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CatalogPage;
