import PasswordStrengthChecker from '@/components/PasswordStrengthChecker'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 tracking-tighter">Password Strength Checker</h1>
      <PasswordStrengthChecker />
    </main>
  )
}
