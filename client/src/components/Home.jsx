import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";




function Home() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleClick = () => {
        if(user) navigate('/menu')
          else navigate('/login')
       
  }

  // useEffect(() => {
  //   if (!user) navigate("/login");
  // }, []);

  return (
    <>
      <div className="flex flex-col flex-wrap justify-center bg-white dark:bg-zinc-950 dark:text-white h-screen" >
        <div className="headerContainer text-center font-bold  ">
        <h1 className="text-5xl  text-wrap  mb-14 font-extrabold whitespace-nowrap dark:text-rose-500  ">Welcome to FoodieHub</h1>
       
        <p className="text-3xl text-nowrap mt-4 mb-4 dark:text-sky-500">
           Feeling Hungry ?
      </p>
         {user ?  <button type="button" className="text-white mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-3xl text-sm px-5 py-3 text-center me-2 mb-2" onClick={handleClick}>Order Now</button> :  <button type="button" className="text-white mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-3xl text-sm px-5 py-3 text-center me-2 mb-2" onClick={handleClick}>Login</button>}
         
         
        </div>
      </div>
    </>
  );
}

export default Home;