import { useAuth, AuthProvider } from './context/AuthContext'; // adjust path if needed
import WeatherApp from './app/WeatherApp';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from './api/Suerbase';
import './App.css';

function AppContent() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return user ? (
    <WeatherApp />
  ) : (
    <div className="screen">
    <div className="card login-card">
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      onlyThirdPartyProviders={false}
      providers={[]}
    />
    <div className='demo-hint '>
      <p>Demo Account</p>
      <p>Email: demo@user.com</p>
      <p>Password: userdemo</p>
    </div>
    </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
