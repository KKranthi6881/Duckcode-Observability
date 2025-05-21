import { useSupabase } from '../context/SupabaseContext';

function Dashboard() {
  const { user } = useSupabase();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Welcome, {user?.email}</h2>
        <p className="text-gray-600">This is your data observability dashboard.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold">Data Sources</h3>
            <p className="text-3xl font-bold mt-2">12</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold">Active Pipelines</h3>
            <p className="text-3xl font-bold mt-2">24</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold">Failed Jobs (Last 24h)</h3>
            <p className="text-3xl font-bold mt-2">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
