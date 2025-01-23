import React, {useState} from 'react'
import AuthLayout from '../../component/layout/AuthLayout';
import AuthInput from '../../component/input/AuthInput';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  //Handel login form submit
  const handelLogin = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)){
      setError("Please enter valid email address.");
      return;
    }

    if(!password){
      setError("Please enter the password.");
      return;
    }

    setError("");
    //Login Api
    try {
      
    } catch (error) {
      
    }
  };
  
  return (
    <AuthLayout>
    <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
      <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
      <p className='text-xs text-slate-700 mt-[5px] mb-6'>
        Please enter your detail to log in
      </p>
      <form onSubmit={handelLogin}>

        <AuthInput 
        value={email}
        onChange={({target}) => setEmail(target.value)}
        lable="Email Address"
        placeholder="john@example.com"
        type="text"
        />

        <AuthInput 
        value={password}
        onChange={({target}) => setPassword(target.value)}
        lable="Password"
        placeholder="Min 8 characters"
        type="password"
        />

        {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

        <button type="submit" className='btn-primary'>
          LOGIN
        </button>

        <p className='text-[13px] text-slate-800 mt-3'>
          Don't have an account ? {" "}
          <Link className="font-medium text-primary underline" to="/signUp">
          SignUp
          </Link>
        </p>

      </form>
    </div>
    </AuthLayout>
  );
};

export default LoginForm
