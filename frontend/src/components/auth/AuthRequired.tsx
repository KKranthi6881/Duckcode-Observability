import { Navigate } from 'react-router-dom';
import { useSupabase } from '../../context/SupabaseContext';
import LoadingScreen from '../common/LoadingScreen';

interface AuthRequiredProps {
  children: React.ReactNode;
}

const AuthRequired = ({ children }: AuthRequiredProps) => {
  const { user, loading } = useSupabase();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default AuthRequired;