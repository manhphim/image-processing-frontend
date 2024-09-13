'use client';

import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/providers/auth-provider';
import api from '@/configs/api';

export default function LogoutButton() {
  const { isAuthenticated, setIsAuthenticated } = useAuth() || {};

  if (!isAuthenticated || !setIsAuthenticated) {
    return null;
  }

  const handleLogout = async () => {
    try {
      const response = await api.post('/api/logout');
      console.log(response);
      if (response.status === 200) {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      type='submit'
      onClick={handleLogout}
      className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
      <LogOut className='h-5 w-5 mr-2' />
      Log out
    </Button>
  );
}
