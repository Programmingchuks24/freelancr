import { LoginForm } from "@/components/login-form";
export default function Home() {
  return (
  
    <div className=" bg-black flex flex-col gap-10 min-h-svh w-full items-center justify-center p-6 md:p-10">

      <p className="text-3xl tracking-wide text-white">FreeLancr</p>
      <div className="w-full max-w-sm">
        <LoginForm className=""/>
      </div>
    </div>
  );
}
