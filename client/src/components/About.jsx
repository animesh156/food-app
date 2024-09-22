import rst from "../assets/rest.jpg"

function About() {
  return (
    <div className=" container mx-auto ">

   <div className="text-center">
   <h1 className="text-5xl font-serif mb-28 mt-14 about">ABOUT</h1>
   <p className="abt text-3xl ">The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

  

  <div className="flex justify-center">
   <img src={rst} alt="rest-img" className="lg:w-[70rem] mb-28 mt-28 " />

  </div>

  <h1 className="font-extrabold text-4xl">Opening Hours</h1>

  <div className="grid grid-cols-2 text-3xl mb-28 mt-24">
       <div >
       <p className="timing">Mon & Tue CLOSED</p>
        <p className="mt-12 timing">Wednesday 10.00 - 24.00</p>
        <p className="mt-12 timing">Thursday 10:00 - 24:00</p>
       </div>

       <div>
       <p className="timing">Friday 10:00 - 12:00</p>
        <p className="mt-12 timing">Saturday 10:00 - 23:00</p>
        <p className="mt-12 timing font-Josefin Sans">Sunday Closed</p>
       </div>


  </div>
   

   </div>
   
    
    </div>
  )
}

export default About