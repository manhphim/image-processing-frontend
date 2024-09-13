'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/providers/auth-provider';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function GuardedPage({
  children,
  whenSignedOut,
}: React.PropsWithChildren<{
  whenSignedOut?: string;
}>) {
  const { isAuthenticated, loading } = useAuth() || {};
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!loading && isAuthenticated === false) {
      setShowAlert(true);
    }
  }, [isAuthenticated, loading]);

  const handleAlertClose = () => {
    setShowAlert(false);
    if (whenSignedOut) {
      window.location.assign(whenSignedOut);
    }
  };

  return (
    <>
      {children}
      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Authentication Required</AlertDialogTitle>
            <AlertDialogDescription>
              Please login to continue.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleAlertClose}>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
