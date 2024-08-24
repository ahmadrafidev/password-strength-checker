import PasswordStrengthChecker from '@/components/PasswordStrengthChecker'
import DarkModeToggle from '@/components/ui/DarkModeToggle';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 md:p-24">
      <header className="p-3 absolute top-0 right-0">
        <DarkModeToggle />
      </header>
      <h1 className="text-2xl md:text-4xl font-bold mb-8 tracking-tighter">Password Strength Checker</h1>
      <PasswordStrengthChecker />
    </main>
  )
}
