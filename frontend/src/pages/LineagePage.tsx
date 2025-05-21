import { useState } from 'react';

function LineagePage() {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Data Lineage</h1>
      
      <div className="flex gap-4">
        {/* Lineage Graph Area */}
        <div className="flex-grow bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Lineage Graph</h2>
          <div className="h-96 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Lineage graph visualization will be implemented here.</p>
            {/* This will be replaced with actual graph visualization */}
          </div>
        </div>
        
        {/* Metadata Panel */}
        <div className="w-80 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Details</h2>
          {selectedNode ? (
            <div>Selected node details</div>
          ) : (
            <p className="text-gray-500">Select a node to view details</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LineagePage;
