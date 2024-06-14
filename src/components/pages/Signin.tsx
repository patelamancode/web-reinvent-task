import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../states/slices/userSlice";
import { login } from "../../services/authServices";
import { validateEmail, validatePassword } from "../utils/UserValidation";
import toast from "react-hot-toast";

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<{email?:string; password?:string}>({});


  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const newErrors: { email?: string; password?: string } = {};
    if (!validateEmail(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!validatePassword(password)) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }
    try {
      const response = await login(email, password);
      dispatch(setUser({ token: response.data.token, userDetails: { email } }));
      navigate("/dashboard");
    } catch (error: any) {
      if (error) {
        toast.error(error.response, {
          style: {
            border: '1px solid #ff4d4d',
            padding: '16px',
            color: '#ff4d4d',
          },
          iconTheme: {
            primary: '#ff4d4d',
            secondary: '#FFFAEE',
          },
        });
      } else {
        toast.error('An unexpected error occurred. Please try again.', {
          style: {
            border: '1px solid #ff4d4d',
            padding: '16px',
            color: '#ff4d4d',
          },
          iconTheme: {
            primary: '#ff4d4d',
            secondary: '#FFFAEE',
          },
        });
      }
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form
        onSubmit={handleSignIn}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <div>
          <div>
            <p>
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-500 hover:text-blue-700 font-bold"
              >
                Sign Up
              </Link>
            </p>
          </div>
          </div>
        </div>
      </form>
      <p className="text-red-500">{error.email || error.password}</p>
    </div>
  );
};

export default SignIn;
