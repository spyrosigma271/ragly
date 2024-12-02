export function WelcomeCard({ email }: { email: string }) {
  return (
    <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 transition-colors max-w-full overflow-hidden">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white break-words">
          Welcome, {email}!
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Upload your first document to get started with RAGLY's powerful analysis features.
        </p>
        <div className="pt-4">
          <div className="inline-flex items-center text-sm text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-4 py-2 rounded-md">
            🚀 Ready to explore RAGLY
          </div>
        </div>
      </div>
    </div>
  );
}