import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthContext';
import img1 from "../../assets/6272 (1).jpg"

const SignUp = () => {

    const { createUser, setUser,sighInWithGoogle,updateUser } = use(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate=useNavigate();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignUp = e => {
    setEmailError("");
    setPasswordError("");

    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const photo = form.photo.value;
    const email = form.email.value.trim();
    const password = form.password.value;
   

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    }
    
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    }
    // create user
    createUser(email, password)
      .then(result => {
        const user=(result.user);
        updateUser({displayName:name, photoURL:photo}).then(()=>{
          setUser({...user ,displayName:name, photoURL:photo})
        })
        navigate("/")
        toast.success("SignUp Successfully")
        
      })
      .catch(error => {
        const errorCode = error.code;
  
        if (errorCode === "auth/email-already-in-use") {
          setEmailError("This email is already in use.");
        } else {
          setEmailError("Something went wrong. Please try again.");
        }
      });
  }

  // Google login
  const handleGoogleLogin=()=>{
    
    sighInWithGoogle()
    .then(result => {
      
      const user = result.user;
      console.log("Google User:", user.displayName, user.photoURL);
      setUser(user); 
      navigate(`${location.state ? location.state : "/"}`);
      toast.success("Logged in Successfully");
    })
    .catch(error => {
      console.error(error)
  })
  }
    return (
        <div className='bg-[#f5f5f5] flex gap-3 items-center justify-center min-h-screen pt-9 md:pt-1 '>
             
             {/* <div className='flex-1'>
              <img src={img1} alt="" />
             </div> */}

          <div className=''>
      <div className='flex justify-center mt-4 items-center'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-6  px-2">
          <h2 className='text-3xl font-semibold text-center'>Register your Account</h2>
          <div className="card-body">
            <form onSubmit={handleSignUp} className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input type="text" name='name' className="input focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Name" required />


              {/* photo url */}
              <label className="label">Photo URL</label>
              <input type="text" name='photo' className="input focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Photo URL" required />

              {/* email */}
              <label className="label">Email</label>
              <input type="email" name='email' className="input focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Email" required />
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

              {/* password */}
              <div className="relative">
                <label className="label">Password</label>
                

                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  className="input w-full pr-12 focus:outline-none focus:ring-0 focus:border-gray-600"
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
                {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
              </div>


              <button type='submit' className="btn btn-neutral font-bold mt-4 bg-[#00a7ac] border-none">SignUp</button>
            </form>
            <p className=' font-semibold text-center py-3'>
              Already Have An Account? <Link to="/auth/login" className='text-[#60A5FA]'>Login</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="divider lg:w-96 mx-auto">Or authorize with</div>

      <button onClick={handleGoogleLogin} className="btn lg:w-96 shadow-md py-3  w-full bg-white text-base text-gray-800 hover:shadow-md hover:border-gray-400 flex gap-4  mx-auto  border-[#e5e5e5]">
  <svg className='w-6 h-6' aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

    </div>
        </div>

    );
};

export default SignUp;