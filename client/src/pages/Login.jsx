import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";


function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="login h-screen">

<div className='w-80 px-2 py-16 m-auto'>

      <section className="form   m-auto flex justify-center  w-auto  bg-slate-100 dark:bg-zinc-950 border-2 py-6 border-black dark:border-red-500 shadow-md shadow-cyan-200  rounded-3xl">
        <form onSubmit={onSubmit} className="flex justify-center flex-col">
         
            <input
              type="email"
              className=" dark:bg-black lg:w-64  border-cyan-400 border-2 mt-5 rounded-3xl dark:text-orange-500 py-2 px-3 dark:caret-white mb-8"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
         
          
            <input
              type="password"
              className="form-control dark:bg-black lg:w-64 border-cyan-400 border-2 mt-4 mb-6 dark:text-orange-500 py-2 px-3 w-auto rounded-3xl  dark:caret-white "
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
         
          <div className="form-group text-center mt-5 mb-5">
            <button
              type="submit"
              className=" bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Login
            </button>
          </div>

          <div>
           <p className='font-semibold mb-6 dark:text-cyan-300 text-1xl text-center mt-3'>New User ? <Link to='/register' className='text-pink-600'>Sign Up</Link></p> 
          </div>

          
        </form>
      </section>
      </div>
      </div>
  );
}

export default Login;