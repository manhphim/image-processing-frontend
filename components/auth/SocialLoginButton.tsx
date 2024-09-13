import { Button } from '@/components/ui/button';
import Image from 'next/image';

type SocialLoginButtonProps = {
  provider: string;
  onClick: (provider: string) => void;
};

export default function SocialLoginButton({
  provider,
  onClick,
}: SocialLoginButtonProps) {
  const providerNames: {
    [key: string]: string;
  } = {
    google: 'Google',
    facebook: 'Facebook',
    github: 'GitHub',
  };

  return (
    <Button
      onClick={() => onClick(provider)}
      className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
      <span className='sr-only'>Sign in with {providerNames[provider]}</span>
      <Image
        src={`/${provider}.svg`}
        alt={`${providerNames[provider]} logo`}
        width={20}
        height={20}
        className='w-5 h-5'
      />
    </Button>
  );
}
