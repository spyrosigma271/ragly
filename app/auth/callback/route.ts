import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;
  const next = requestUrl.searchParams.get("redirect_to") || '/protected';

  if (code) {
    const supabase = await createClient();
    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);
      
      if (error) {
        console.error('Auth exchange error:', error.message);
        return NextResponse.redirect(`${origin}/auth/auth-code-error`);
      }

      // Optional: You can handle specific provider data here
      const { provider } = data.user?.app_metadata || {};
      if (provider === 'google') {
        // You can add any Google-specific logic here if needed
        console.log('Successfully authenticated with Google');
      }

      return NextResponse.redirect(`${origin}${next}`);
    } catch (error) {
      console.error('Unexpected error during auth:', error);
      return NextResponse.redirect(`${origin}/auth/auth-code-error`);
    }
  }

  // URL to redirect to after sign up process completes
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
