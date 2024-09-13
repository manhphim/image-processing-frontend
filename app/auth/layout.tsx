import React from 'react';

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='flex min-h-screen bg-primary items-center justify-center'>
      {children}
    </div>
  );
}

export default AuthLayout;
