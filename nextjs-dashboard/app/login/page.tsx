import LoginForm from '@/app/ui/login-form';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <LoginForm />

      <Link
        href="/signup"
        className="mt-4 text-center text-blue-600 hover:underline"
      >
        Don't have an account? Sign Up
      </Link>
    </main>
  );
}