import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth.jsx';
import { useAlert } from './components/common/Alert.jsx';
import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import LoadingSpinner from './components/common/LoadingSpinner.jsx';
import ProtectedRoute from './components/security/ProtectedRoute.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './App.css';

// Lazy load pages for better performance
// const Home = lazy(() => import('./pages/Home'));
// const Login = lazy(() => import('./components/auth/Login'));
// const Register = lazy(() => import('./components/auth/Register'));
// const BookingPage = lazy(() => import('./components/booking/BookingPage'));
// const MyBookings = lazy(() => import('./pages/MyBookings'));
// const AdminPanel = lazy(() => import('./pages/AdminPanel'));
// const Dashboard = lazy(() => import('./components/dashboard/UserDashboard'));
// const Profile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Create modal root for modals
const ModalRoot = () => {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    const div = document.createElement('div');
    div.id = 'modal-root';
    document.body.appendChild(div);
  }
  return null;
};

const AppContent = () => {
  const { AlertRenderer } = useAlert();

  return (
    <>
      <ModalRoot />
      <Navbar />
      
      <main className="flex-grow-1">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Public Routes */}
            {/* <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}
            
            {/* Protected User Routes */}
            <Route element={<ProtectedRoute allowedRoles={['user', 'admin']} />}>
              {/* <Route path="/bookings" element={<BookingPage />} />
              <Route path="/my-bookings" element={<MyBookings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/dashboard" element={<Dashboard />} /> */}
            </Route>
            
            {/* Admin Only Routes */}
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              {/* <Route path="/admin" element={<AdminPanel />} />
              <Route path="/admin/users" element={<AdminPanel />} />
              <Route path="/admin/bookings" element={<AdminPanel />} /> */}
            </Route>
            
            {/* 404 */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </main>
      
      <Footer />
      
      {/* Global Toast Alerts */}
      <AlertRenderer position="top-right" />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="app-container d-flex flex-column min-vh-100">
          <AppContent />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;