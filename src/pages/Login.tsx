
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const handleVerifyEmail = () => {
    setIsVerifying(true);
    // Mock API call
    setTimeout(() => {
      setIsEmailVerified(true);
      setIsVerifying(false);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-trader-dark flex">
      {/* Left side - Login form */}
      <div className="w-1/2 flex flex-col justify-center px-20">
        <div className="mb-12">
          <img src="/logo.svg" alt="Trader Banqueiro" className="h-12" />
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-2">Bem-vindo de volta</h1>
        <p className="text-gray-400 mb-8">Acesse sua conta para continuar</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <div className="flex gap-4">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-trader-navy border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="Seu email"
              />
              {!isEmailVerified && (
                <button
                  type="button"
                  onClick={handleVerifyEmail}
                  disabled={isVerifying}
                  className="px-6 py-3 bg-primary hover:bg-primary-dark text-trader-dark font-medium rounded-lg transition-colors disabled:opacity-50"
                >
                  {isVerifying ? "Verificando..." : "Verificar"}
                </button>
              )}
            </div>
          </div>

          {isEmailVerified && (
            <div className="animate-fade-in">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-trader-navy border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Sua senha"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <div className="flex justify-end mt-2">
                <button type="button" className="text-sm text-primary hover:text-primary-light">
                  Esqueci minha senha
                </button>
              </div>
            </div>
          )}

          {isEmailVerified && (
            <button
              type="submit"
              className="w-full py-3 bg-primary hover:bg-primary-dark text-trader-dark font-medium rounded-lg transition-colors animate-slide-up"
            >
              Entrar
            </button>
          )}
        </form>
      </div>

      {/* Right side - Feature showcase */}
      <div className="w-1/2 bg-trader-navy p-20 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Potencialize seus investimentos
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Com tecnologia avançada e inteligência de mercado
        </p>
        <div className="relative h-96 bg-trader-dark rounded-2xl overflow-hidden">
          {/* We'll add dashboard preview image here */}
          <div className="absolute inset-0 bg-gradient-to-t from-trader-dark to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Login;
