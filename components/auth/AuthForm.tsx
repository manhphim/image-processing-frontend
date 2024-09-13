'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import EmailInput from './EmailInput';
import SocialLoginButton from './SocialLoginButton';
import AuthFormContainer from './AuthFormContainer';

// Define the Zod schema for email validation
const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

// Infer the TypeScript type from the schema
type EmailSchema = z.infer<typeof emailSchema>;

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);

  // Use react-hook-form with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailSchema>({
    resolver: zodResolver(emailSchema),
  });

  const handleMagicLinkLogin = async (data: EmailSchema) => {
    setIsLoading(true);

    // Here you would typically call your authentication service
    // For demonstration, we'll just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // If successful, you might redirect or update state
    console.log('Magic link sent to:', data.email);
    setIsLoading(false);
  };

  const handleSocialLogin = (provider: string) => {
    // Here you would typically initiate OAuth flow with the provider
    console.log('Social login with:', provider);
    window.location.assign(`/api/oauth2/authorization/${provider}`);
  };

  return (
    <AuthFormContainer>
      <form
        className='mt-8 space-y-6'
        onSubmit={handleSubmit(handleMagicLinkLogin)}>
        <EmailInput register={register} errors={errors} />
        <div>
          <Button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
            disabled={isLoading}>
            <Mail className='h-5 w-5 mr-2' aria-hidden='true' />
            {isLoading ? 'Sending...' : 'Send Magic Link'}
          </Button>
        </div>
      </form>

      <div className='mt-6'>
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-gray-300' />
          </div>
          <div className='relative flex justify-center text-sm'>
            <span className='px-2 bg-white text-gray-500'>
              Or continue with
            </span>
          </div>
        </div>

        <div className='mt-6 grid grid-cols-3 gap-3'>
          <SocialLoginButton provider='google' onClick={handleSocialLogin} />
          <SocialLoginButton provider='facebook' onClick={handleSocialLogin} />
          <SocialLoginButton provider='github' onClick={handleSocialLogin} />
        </div>
      </div>
    </AuthFormContainer>
  );
}
