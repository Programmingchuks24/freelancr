import { LoginForm } from "@/components/login-form"

export default function Page() {
  return (
    <div>
    
          <p className="text-4xl font-bold m-2">FreeLanc<span className="text-blue-500">r</span></p>
          <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
              <LoginForm />
            </div>
          </div>
        </div>
  )
}
