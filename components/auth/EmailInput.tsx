import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

type EmailInputProps = {
  register: UseFormRegister<{
    email: string;
  }>;
  errors: FieldErrors<{
    email: string;
  }>;
};

export default function EmailInput({ register, errors }: EmailInputProps) {
  return (
    <div>
      <Label htmlFor='email' className='sr-only'>
        Email address
      </Label>
      <Input
        id='email'
        type='email'
        autoComplete='email'
        className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm'
        placeholder='Email address'
        {...register('email')}
        aria-invalid={errors.email ? 'true' : 'false'}
      />
      {errors.email && (
        <Alert variant='destructive'>
          <AlertDescription>{errors.email.message}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
