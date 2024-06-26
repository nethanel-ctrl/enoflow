import { SignOutButton } from '@clerk/nextjs';

/**
 * This is the main page for the dashboard.
 * @returns A Next.js RSC page component.
 */
export default function DashboardHome() {
  return (
    <main>
      <h1>Hello world, this is the dashboard.</h1>
      <SignOutButton />
    </main>
  );
}
