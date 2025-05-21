import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, lazy } from 'react';
import { SupabaseProvider } from './context/SupabaseContext';
import { ThemeProvider } from './context/ThemeContext';
import AuthRequired from './components/auth/AuthRequired';
import AppLayout from './components/layout/AppLayout';
import LoadingScreen from './components/common/LoadingScreen';

// Lazy-loaded pages
const LandingPage = lazy(() => import('./pages/LandingPage'));
const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('./pages/auth/RegisterPage'));
const DashboardPage = lazy(() => import('./pages/dashboard/DashboardPage'));
const LineagePage = lazy(() => import('./pages/lineage/LineagePage'));
const CatalogPage = lazy(() => import('./pages/catalog/CatalogPage'));
const AlertsPage = lazy(() => import('./pages/alerts/AlertsPage'));
const GovernancePage = lazy(() => import('./pages/governance/GovernancePage'));
const CodeDocPage = lazy(() => import('./pages/code/CodeDocPage'));
const SettingsPage = lazy(() => import('./pages/settings/SettingsPage'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SupabaseProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                
                {/* Protected routes */}
                <Route path="/app" element={<AuthRequired><AppLayout /></AuthRequired>}>
                  <Route index element={<Navigate to="/app/dashboard" replace />} />
                  <Route path="dashboard" element={<DashboardPage />} />
                  <Route path="lineage" element={<LineagePage />} />
                  <Route path="catalog" element={<CatalogPage />} />
                  <Route path="alerts" element={<AlertsPage />} />
                  <Route path="governance" element={<GovernancePage />} />
                  <Route path="code" element={<CodeDocPage />} />
                  <Route path="settings" element={<SettingsPage />} />
                </Route>
                
                {/* Catch all route */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </SupabaseProvider>
    </QueryClientProvider>
  );
}

export default App;