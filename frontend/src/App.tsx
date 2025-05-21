import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SupabaseProvider } from './context/SupabaseContext';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import LineagePage from './pages/LineagePage';
import CatalogPage from './pages/CatalogPage';
import Layout from './components/Layout';
import AuthRequired from './components/AuthRequired';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SupabaseProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<AuthRequired><Layout /></AuthRequired>}>
              <Route index element={<Dashboard />} />
              <Route path="lineage" element={<LineagePage />} />
              <Route path="catalog" element={<CatalogPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SupabaseProvider>
    </QueryClientProvider>
  );
}

export default App;
