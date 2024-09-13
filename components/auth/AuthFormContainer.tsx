import { ReactNode } from 'react';

type AuthFormContainerProps = {
  children: ReactNode;
};

export default function AuthFormContainer({
  children,
}: AuthFormContainerProps) {
  return (
    <div className='max-w-md w-full space-y-8 p-8 bg-primary rounded-xl shadow-md'>
      <div className='text-center'>
        <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
          Sign in to your account
        </h2>
      </div>
      {children}
    </div>
  );
}
