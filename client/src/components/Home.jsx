import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleClick = () => {
     navigate('/login');
    console.log(user)
  }

  return (
    <div
    className="
      flex flex-col flex-wrap justify-center h-screen
      bg-cover lg:bg-cover md:bg-cover sm:bg-contain bg-center
    "
    style={{
      backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-black-meat-western-food-banner-background-image_194600.jpg")',
    }}
  >
  
      <div className="headerContainer text-center font-bold bg-opacity-50 bg-black w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-5xl text-wrap mb-14 font-extrabold whitespace-nowrap text-white">Welcome to FoodieHub</h1>
        <p className="text-3xl text-nowrap mt-4 mb-4 text-white">
          Feeling Hungry?
        </p>
      
          <button
            type="button"
            className="text-white mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-3xl text-sm px-5 py-3 text-center me-2 mb-2"
            onClick={handleClick}
          >
            Order Now
          </button>
      
      </div>
    </div>
  );
}

export default Home;
