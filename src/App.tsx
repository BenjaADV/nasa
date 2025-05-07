import { RouterProvider } from 'react-router-dom';
import './App.css';
import AppLayout from './components/layout/AppLayout';
import { DashboardContent } from './components/layout/dashboard/DashboardContent';
import { router } from './app/router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
