import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useSupabase } from '../context/SupabaseContext';

function Layout() {
  const { supabase, user } = useSupabase();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Duckcode Observability</h1>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-4">{user?.email}</span>
            <button
              onClick={handleSignOut}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 py-6 pr-4">
            <nav className="space-y-1">
              <Link
                to="/"
                className="group flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50 hover:text-gray-900"
              >
                Dashboard
              </Link>
              <Link
                to="/lineage"
                className="group flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50 hover:text-gray-900"
              >
                Data Lineage
              </Link>
              <Link
                to="/catalog"
                className="group flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50 hover:text-gray-900"
              >
                Data Catalog
              </Link>
            </nav>
          </div>

          {/* Main content */}
          <main className="flex-1 py-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
