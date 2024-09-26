import { useState } from "react";
import { Alert } from "@material-tailwind/react";
import { IoAlertCircleOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Footer from './Footer'
import { TiTick } from "react-icons/ti";


function Contact() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [ShowAlert, setShowAlert] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);

    if (!name) {
      setAlertMessage("Your lovely name is required!"); // Set error message
      setAlertType("error"); // Set alert type to error
      setShowAlert(true);

      // Hide the alert after 3 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      return; // Stop the form submission if validation fails
    }

    setSubmittedName(name);
    setAlertMessage(`Thank you ${submittedName} your table is booked`);
    setAlertType("success");
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    setName("");
    setNumber("");
  };

  return (
    <>
      <div className="  bg-white dark:bg-zinc-950 dark:text-white ">
        <div className="text-center p-8 ">
          <h1 className="text-5xl  mb-12 dark:text-pink-500 font-bold">Contact Us</h1>
          <p className="text-2xl font-semibold mb-4">
            We offer full-service catering for any event, large or small. We
            understand your needs and we will cater the food to satisfy the
            biggest criteria of them all, both look and taste. Do not hesitate
            to contact us.
          </p>
          <p >
            <b className="text-2xl font-extrabold mt-3 text-rose-500">Near Big Bazar, IT Chowk, Darbhanga</b>
          </p>
          <p className="mt-3 text-2xl font-semibold">
          We would love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out to us. Our team is always ready to help.
          </p>
          <p className="mt-3 text-2xl font-semibold">
            You can also contact us by phone <span className="text-red-500 cursor-pointer">+91-999555544</span> or email{" "}
            <span className="text-sky-500 cursor-pointer">FoodieHub@91</span>
          </p>
        </div>

        {/* alertions */}

     <div className="px-6">

        {ShowAlert && (
          <Alert
            icon={
              
              alertType === "error" ? (
                <IoAlertCircleOutline className="mr-3" size={22} />
              ) : (
                <TiTick className="mr-3" size={22} />
              )
            }
          
            className={`md:w-96 relative  w-auto m-auto py-2  text-black ${
              alertType === "error" ? "bg-red-500" : "bg-cyan-300"
            }`}
            severity={alertType}

         action={
          <button aria-label="close"
         
          className="ml-10 absolute right-2"
          onClick={() => {
           
            setShowAlert(false);
          }}>
         <IoMdClose size={22} />
          </button>
         }

            
          >
            {alertMessage} 
          </Alert>

        )}

</div>
        <h3 className="text-center text-3xl font-black mt-2">Book a Table</h3>

        <form
          className="p-8 flex flex-col lg:max-w-md m-auto text-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col ">
            <label htmlFor="name" className="hidden">
              Full Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              value={name}
              required="true"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              className=" w-full dark:bg-black mb-6 rounded-2xl border-2 p-2.5 text-sm border-cyan-300 text-orange-500 "
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="number" className="hidden">
              People
            </label>
            <input
              type="number"
              name="number"
              id="number"
              required="true"
              placeholder="How Many People"
              min={0}
              max={30}
              className=" w-full dark:bg-black mb-6 rounded-2xl border-2 p-2.5 text-sm border-cyan-300 text-orange-500 "
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="date" className="hidden">
              Date
            </label>
            <input
              type="datetime-local"
              name="date"
              id="date"
              required="true"
              placeholder="Date & Time"
              className=" w-full dark:bg-black mb-6 rounded-2xl border-2 p-2.5 text-sm border-cyan-300 text-orange-500 "
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="tel" className="hidden">
              Number
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              required="true"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Mobile Number"
             className=" w-full dark:bg-black mb-6 rounded-2xl border-2 p-2.5 text-sm border-cyan-300 text-orange-500 "
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="message" className="hidden">
              Message
            </label>
            <input
              type="text"
              name="message"
              id="message"
              
              placeholder="Message/Special Requirement"
             className=" w-full dark:bg-black mb-6 rounded-2xl border-2 p-2.5 text-sm border-cyan-300 text-orange-500 "
            />
          </div>
 <div>
 <button
            type="submit"
         className="text-white w-20  rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Book
          </button>
 </div>
          
        </form>
        <Footer />
      </div>
    
    </>
  );
}

export default Contact;
