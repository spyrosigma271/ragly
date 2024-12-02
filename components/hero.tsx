import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Header() {
  return (

    <div className="flex flex-col gap-16 items-center">
      <div className="container px-4 mx-auto text-center">
        <h1 className="text-6xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-6">
          Welcome to <span className="text-blue-500">RAGLY</span>
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
          Your intelligent document analysis platform. Upload, analyze, and extract insights from your documents using state-of-the-art AI technology.
        </p>
        <Link href="/sign-up">
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>


      </div>
    </div>
  );
}
