import { useState } from "react";
import { Alert } from "@material-tailwind/react";
import { IoAlertCircleOutline } from "react-icons/io5";

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
      setAlertMessage("Error: Name is required!"); // Set error message
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
      <div className="container ">

      


        <div className="text-center p-8  cnt">
          <h1 className="text-5xl mb-12">Contact Us</h1>
          <p>
            We offer full-service catering for any event, large or small. We
            understand your needs and we will cater the food to satisfy the
            biggest criteria of them all, both look and taste. Do not hesitate
            to contact us.
          </p>
          <p className="w3-text-blue-grey w3-large">
            <b>Catering Service, 42nd Living St, 43043 New York, NY</b>
          </p>
          <p>
            You can also contact us by phone <span>+91-999555544</span> or email{" "}
            <span>DesiFood@.com</span>, or you can book a table by filling below
            form:
          </p>
        </div>

        {ShowAlert && (
           
          <Alert
            icon={alertType === "error" ? <IoAlertCircleOutline size={22} /> : <TiTick size={22}/>}
            className={`bg-${alertType === "error" ? "red" : "cyan"}-500 text-black w-96 m-auto`}
            severity={alertType}
          >
            {alertMessage}
          </Alert>
        )}

        <form
          className="p-14 flex flex-col justify-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="hidden">
              Full Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              value={name}
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
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
              placeholder="How Many People"
              min={0}
              max={30}
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
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
              placeholder="Date & Time"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
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
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Mobile Number"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
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
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
          >
            Book
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
