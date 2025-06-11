import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';

import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Login = () => {
  const { LogInUser, sighInWithGoogle, auth, setUser } = use(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef();


  const handleLogIn = e => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value

    // LogIn User
    LogInUser(email, password)
      .then(result => {
        toast.success("logged in successfully");
        setIsLoading(false);
        navigate(`${location.state ? location.state : "/"}`)
        navigate("/")
      })
      .catch(error => {
        setErrorMessage("Invalid email or password")
        setIsLoading(false);
        form.reset()

      })
  }

  // Google login
  const handleGoogleLogin = () => {
    sighInWithGoogle()
      .then(result => {
        const user = result.user;
        console.log("User Info:", user.displayName, user.photoURL);
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Logged in Successfully");
      })
      .catch(error => {
        console.error(error)
      })
  }

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    setErrorMessage("")
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire({

          text: "Password reset link sent. Check your inbox.",
          icon: "success"
        });
      })
      .catch(error => {
        setErrorMessage(error.message);
      })
  }
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover  bg-center px-4"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/RGy6KscK/healthy-lifestyle-running-outdoors-1.jpg')",
      }}
    >

      <div className="bg-[#403f3f]/70 backdrop-blur-xl border border-white/20 shadow-2xl rounded-xl px-6 py-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Login your Account
        </h2>

        <form onSubmit={handleLogIn} className="fieldset space-y-4">
          <label className="block text-white mb-1">Email</label>
          <input type="email" name="email" ref={emailRef} className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white" placeholder="Email" required />

          <div className="relative">
            <label className="block text-white mb-1">Password</label>


            <input
              type={showPass ? "text" : "password"}
              name="password"
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Password"
              required
            />

            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute top-7 right-3 text-gray-600 z-10"
            >
              {showPass ? <FaEye className='text-xl' /> : <FaEyeSlash className='text-xl'></FaEyeSlash>}
            </button>
            {
              errorMessage && <p className='text-red-400 text-xs'>{errorMessage}</p>
            }
          </div>






          <div onClick={handleForgetPassword}><a className="text-sm text-blue-200 hover:underline cursor-pointer">Forgot password?</a></div>


          <button
            type='submit'
            disabled={isLoading}
            className="w-full py-2 cursor-pointer bg-green-400 text-white font-bold rounded-lg transition duration-300"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-white text-center mt-6">
          Don’t have an account?{' '}
          <Link to="/auth/signUp" className="text-blue-300 hover:underline">
            SignUp
          </Link>
        </p>

        <div className="divider lg:w-96 text-white mx-auto">Or authorize with</div>
        <button onClick={handleGoogleLogin} className="btn shadow-md py-3 lg:w-96 w-full bg-white text-base text-gray-800 hover:shadow-md hover:border-gray-400 flex gap-4  mx-auto  border-[#e5e5e5]">
          <svg className='w-6 h-6' aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;