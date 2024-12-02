import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { WelcomeCard } from "@/components/dashboard/welcome-card"; ;


export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/auth/sign-in");
  }

  return (

    // <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 p-8">
    <div className="flex flex-col gap-16 items-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-8">
          Welcome to RAGLY
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <WelcomeCard email={user.email || ''} />
        </div>
      </div>
    </div>
  );
    
}
