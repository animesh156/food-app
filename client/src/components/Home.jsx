import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Carousel } from 'antd';
import rst from "../assets/rest.jpg"
import Footer from './Footer'


function Home() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
    console.log(user);
  };



  return (
    <home>

<div className=" relative font-bold h-screen " 
 style={{
  backgroundImage: "url('/home_bg.jpg')",
  backgroundSize: "cover", // Ensures the image covers the entire container
  backgroundPosition: "center", // Centers the image
  backgroundRepeat: "no-repeat" // Ensures the image doesn't repeat
}}
>

  <div className="absolute left-5 top-60">

  <h1 className="md:text-5xl text-lg text-wrap mb-7 font-extrabold whitespace-nowrap text-white">
          Welcome to FoodieHub
        </h1>
        <p className="md:text-3xl text-md text-nowrap mt-4 mb-4 text-white">
          Feeling Hungry?
        </p>

        <button onClick={handleClick} className="py-2.5 px-4  rounded-full bg-sky-400 hover:bg-sky-500">
          Order Now
        </button>

  </div>

      
      </div>



<div className="bg-zinc-100 dark:bg-neutral-950 mt-16 mb-10 ">

<h3 className="text-center font-extrabold text-4xl mb-10 mt-7 dark:text-rose-500">Today Special Menu</h3>

{/*  */}
    <Carousel autoplay arrows='true' adaptiveHeight='true'>
      <div className=" p-3">
        <div className="grid grid-cols-4 md:gap-x-4 gap-x-2 ">
          
          <img src="/burger.jpg" alt="burger_img" className="h-48 md:h-full"  />
          <img src="/pizza.avif" alt="pizza_img" className="carousel-image" />
          <img src="/wings.jpg" alt="wings_img" className="carousel-image" />
          <img src="/pasta.jpg" alt="pasta_img" className="carousel-image" />
        </div>
      </div>

      <div className="p-3">
        <div className="grid grid-cols-4 gap-x-2">
          <img src="/burger.jpg" alt="dessert_img" className="h-48 md:h-full" />
          <img src="/soup.jpg" alt="soup_img" className="carousel-image" />
          <img src="/drinks.jpeg" alt="drink_img" className="carousel-image" />
          <img src="/fries.jpg" alt="fries_img" className="carousel-image" />
        </div>
      </div>

    </Carousel>
   

</div>




<div className=" dark:text-white  p-4 text-center">

  
  
   <h1 className="text-5xl font-serif mb-14 mt-6 abt dark:text-rose-500 ">ABOUT</h1>

   <p className=" text-2xl  abt ">Welcome to our FoodieHub Restaurant, your go-to platform for a seamless and enjoyable dining experience from the comfort of your home. Our mission is to bridge the gap between hungry customers and their favorite restaurants, offering a fast, reliable, and convenient way to order food online.</p>


   <p className="text-2xl mt-5 abt">
   Whether you’re in the mood for a quick bite or planning a special meal, our app brings a variety of dishes right to your fingertips. With just a few taps, you can explore a wide range of menus, customize your order, and have it delivered to your door.
   </p>



  <div className="flex justify-center">
   <img src={rst} alt="rest-img" className="lg:w-[70rem] mb-28 mt-28 " />

  </div>

  <h1 className="font-extrabold text-4xl dark:text-cyan-300">Opening Hours</h1>

  <div className="grid grid-cols-2 text-3xl mb-10 mt-24 font-bold">
       <div >
       <p className="timing">Mon & Tue CLOSED</p>
        <p className="mt-12 timing">Wed 10.00 - 22.00</p>
        <p className="mt-12 timing">Thu 10:00 - 22:00</p>
       </div>

       <div>
       <p className="timing">Fri 10:00 - 12:00</p>
        <p className="mt-12 timing">Sat 10:00 - 22:00</p>
        <p className="mt-12 timing font-Josefin Sans">Sun 10:00 - 23:00</p>
       </div>


  </div>


   </div>

<Footer />
     

     
    </home>
  );
}

export default Home;
