import rst from "../assets/rest.jpg"
import Footer from './Footer'

function About() {
  return (
   
  <div className="bg-white dark:text-white dark:bg-zinc-950 p-4 text-center">

  
  
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
  <Footer />

   </div>
  

 
    
  
  )
}

export default About