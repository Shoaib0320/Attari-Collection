// app/(root)/signin/login.js

import SignIn from '@/components/Sign-in/Sign-in';

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
