'use client'

import { createClient } from "@/utils/supabase/client";
import Image from 'next/image'

interface GoogleAuthButtonProps {
  mode: 'sign-in' | 'sign-up';
  className?: string;
}

export function GoogleAuthButton({ mode, className = '' }: GoogleAuthButtonProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const handleGoogleAuth = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${siteUrl}/auth/callback?redirect_to=/protected`,
      },
    });
  };

  return (
    <>
      <button
        type="button"
        className={`flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 ${className}`}
        onClick={handleGoogleAuth}
      >
        <Image 
          src="/google.svg" 
          alt="Google" 
          width={20} 
          height={20} 
        />
        {mode === 'sign-in' ? 'Sign in' : 'Sign up'} with Google
      </button>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
    </>
  )
}

export default GoogleAuthButton