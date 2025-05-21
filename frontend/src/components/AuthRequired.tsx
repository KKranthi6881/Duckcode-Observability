import { Navigate } from 'react-router-dom';
import { useSupabase } from '../context/SupabaseContext';

type AuthRequiredProps = {
  children: JSX.Element;
};

function AuthRequired({ children }: AuthRequiredProps) {
  const { user, loading } = useSupabase();

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default AuthRequired;
