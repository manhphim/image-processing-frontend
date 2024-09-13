import GuardedPage from '@/components/auth/GuardedPage';
import { AuthProvider } from '@/providers/auth-provider';
import React from 'react';

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AuthProvider>
      <GuardedPage whenSignedOut='/auth'>{children}</GuardedPage>
    </AuthProvider>
  );
}

export default AuthLayout;
