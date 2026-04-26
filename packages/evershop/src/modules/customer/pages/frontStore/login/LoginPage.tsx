import { Card, CardContent } from '@components/common/ui/Card.js';
import { CustomerLoginForm } from '@components/frontStore/customer/LoginForm.js';
import { _ } from '@evershop/evershop/lib/locale/translate/_';
import React from 'react';
import { toast } from 'react-toastify';

interface LoginPageProps {
  homeUrl: string;
  registerUrl: string;
  forgotPasswordUrl: string;
}

export default function LoginPage({
  homeUrl,
  registerUrl,
  forgotPasswordUrl
}: LoginPageProps) {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center p-4 my-8 rounded-2xl bg-gradient-to-br from-gray-900 via-slate-800 to-black shadow-inner">
      <div className="w-full max-w-md transform transition-all duration-500 hover:-translate-y-2">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">{_('Welcome Back!')}</h2>
            <p className="text-gray-300">{_('Please sign in to your account')}</p>
          </div>
          
          <div className="[&_label]:text-gray-300 [&_input]:bg-white/10 [&_input]:border-white/20 [&_input]:text-white [&_input:focus]:border-blue-400 [&_input:focus]:ring-blue-400/50 [&_button]:bg-gradient-to-r [&_button]:from-blue-500 [&_button]:to-cyan-400 [&_button]:text-white [&_button]:border-none [&_button]:rounded-full [&_button]:shadow-lg hover:[&_button]:shadow-cyan-500/50 [&_button]:transition-all [&_button]:duration-300 [&_.card]:bg-transparent [&_.card]:border-none [&_.card]:shadow-none">
            <CustomerLoginForm
              title=""
              subtitle=""
              redirectUrl={homeUrl}
              onError={(error) => {
                toast.error(error.message);
              }}
              className="w-full"
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-300 hover:after:w-full after:transition-all after:duration-300" 
              href={registerUrl}
            >
              {_('Create an account')}
            </a>
            <a
              className="text-pink-400 hover:text-pink-300 font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-pink-300 hover:after:w-full after:transition-all after:duration-300"
              href={forgotPasswordUrl}
            >
              {_('Forgot your password?')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};

export const query = `
  query Query {
    homeUrl: url(routeId: "homepage")
    registerUrl: url(routeId: "register")
    forgotPasswordUrl: url(routeId: "resetPasswordPage")
  }
`;
