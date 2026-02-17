import LoginForm from "./components/LoginForm";

export default function LoginPage() {

  return (
    <div className="flex">

        <div className="w-2/5 h-screen! flex flex-col items-center justify-center p-10 login-gradient">
            <h1 className="w-full">Practice makes</h1>
            <h1 className="text-blue-600 w-full">perfect hires.</h1>
            <p className="w-full mt-4 text-sm text-gray-400 font">Sharpen your behavioural interview skills with a realistic AI interviewer.</p>
        </div>

        <LoginForm />
    </div>
  );
}