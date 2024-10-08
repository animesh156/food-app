/* eslint-disable react/prop-types */
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Alert } from "@material-tailwind/react";

function Payment() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [address,setAddress] = useState('')
  const [showAlert,setShowAlert] = useState(false)
 
  const totalBill = localStorage.getItem('totalAmount')

  const totalAmount = JSON.parse(totalBill)

  const navigate = useNavigate()

  const getUserData = () => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      return {
        token: parsedUser.token,
        userId: parsedUser._id,
      };
    }
    return { token: null, userId: null };
  };

  const { token, userId } = getUserData();




  const handleSubmit = async(e) => {
    e.preventDefault();
    setName('')
    setAddress('')
    setMobileNumber('')
    setEmail('')

    try {
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      await axios.delete(`https://food-app-backend-eight.vercel.app/cart/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Send the token in the header
        },
      });

      localStorage.removeItem('totalAmount')
      
      navigate('/')
  
    } catch (error) {
      console.error("Error clearing the cart:", error);
    }
  
    
  }

  return (
    <>
    <div className="dark:bg-black 2xl:h-screen md:h-svh  lg:min-h-fit   bg-white">

    {showAlert && (
      <div className="fixed top-0 left-0 w-full z-50">
        <Alert className="text-black bg-green-400 lg:w-72 py-2 px-4 mt-1 m-auto text-center">
          Order Placed
        </Alert>
      </div>)}
     
        <form  onSubmit={handleSubmit} className="mx-auto  max-w-screen-xl px-4 2xl:px-0">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">

          <div className="mt-10 rounded-2xl dark:border-red-500 border-2 border-black p-6 mb-4 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md ">
              <div className="flow-root">
                <div className="-my-3 divide-y divide-yellow-400 dark:divide-gray-800">
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-bold dark:text-orange-500">
                      Subtotal
                    </dt>
                    <dd className="text-base font-bold dark:text-cyan-300">
                    ₹{totalAmount}
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3 ">
                    <dt className="text-base font-bold dark:text-orange-500">
                      Discount
                    </dt>
                    <dd className="text-base font-bold dark:text-cyan-300">₹15</dd>
                  </dl>
                 
                  <dl className="flex items-center justify-between gap-4 py-3 ">
                    <dt className="text-base font-bold dark:text-orange-500">
                      Delivery Charge
                    </dt>
                    <dd className="text-base font-bold dark:text-cyan-300">
                    ₹40
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-bold dark:text-orange-500">
                      Total
                    </dt>
                    <dd className="text-base font-bold dark:text-cyan-300">
                    ₹{totalAmount + 25}
                    </dd>
                  </dl>
                </div>
              </div>
            
            </div>

            <div className="min-w-0 flex-1 flex-col space-y-8   -mt-2 ">
              <div className="space-y-4">
                <h2 className="text-2xl text-center font-bold mb-2 dark:text-orange-500">
                  Delivery Details
                </h2>
                <div className="flex flex-col ">
                  <div>
                    <input
                      type="text"
                      id="your_name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className=" w-full mb-6 dark:bg-black rounded-2xl border-2 p-2.5 text-sm border-cyan-300 text-orange-500 "
                      placeholder="your name"
                      required="true"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="your_email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className=" w-full dark:bg-black mb-6 rounded-2xl border-2 p-2.5 text-sm border-cyan-300 text-orange-500 "
                      placeholder="your email"
                      required="true"
                    />
                  </div>
                    
                  <div>
                    <input
                      type="text"
                      id="your_number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                       className=" w-full dark:bg-black mb-6 rounded-2xl border-2 p-2.5 text-sm border-cyan-300 text-orange-500 "
                      placeholder="your number"
                      required="true"
                    />
                  </div>
                  

                  <div>
                    <input
                      type="text"
                      id="your_address"
                      value={address}
                     onChange={(e) => setAddress(e.target.value)}
                       className=" w-full dark:bg-black mb-6 rounded-2xl border-2 p-2.5 text-sm border-cyan-300 text-orange-500 "
                      placeholder="your address"
                      required="true"
                    />
                  </div>


                  <div className="m-auto mb-4">
                    <button
                      type="submit"
                      className="text-gray-900 font-bold mb-4 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400  rounded-3xl text-sm px-5 py-2.5 text-center me-2 ">
                    
                     
                     Pay ₹{totalAmount}
                    </button>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </form>
      
      </div>
    </>
  );
}

export default Payment;
