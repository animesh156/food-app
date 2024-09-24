/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { FiSave } from "react-icons/fi";

function Order() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editIndex, setEditIndex] = useState(null); // Track which item is being edited
  const [updatedQuantity, setUpdatedQuantity] = useState(0); // For storing updated quantity
  const navigate = useNavigate();

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

  useEffect(() => {
    if (!userId || !token) return;

    const fetchCartItems = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://food-app-backend-eight.vercel.app/cart/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLoading(false);
        setCartItems(res.data.items);
      } catch (error) {
        console.log("Error fetching cart items:", error);
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [userId, token]);

  const handleEdit = (index) => {
    setEditIndex(index); // Enable edit mode for the selected item
    setUpdatedQuantity(cartItems[index].quantity); // Pre-fill the current quantity
  };

  const handleUpdate = async (itemId) => {
    try {
      // Send the updated quantity to the backend
      await axios.put(
        `https://food-app-backend-eight.vercel.app/cart`,
        {
          quantity: updatedQuantity,
          foodItemId: itemId,
          userId: userId,
        }, // Updated quantity sent in request body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update the quantity in the state after successful update
      setCartItems((prevItems) =>
        prevItems.map((item, index) =>
          index === editIndex ? { ...item, quantity: updatedQuantity } : item
        )
      );
      setEditIndex(null); // Exit edit mode after update
    } catch (error) {
      console.log("Error updating item:", error);
    }
  };

  const handleDelete = async (foodItemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.foodItem._id !== foodItemId)
    );
    try {
      await axios.delete(`https://food-app-backend-eight.vercel.app/cart/${userId}/${foodItemId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Correctly set the token in headers
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <Spinner />;

  if (cartItems.length === 0) return <div className="text-3xl font-extrabold text-center text-red-400 h-lvh dark:bg-black  ">
    
    <h1 className="pt-40 ">Your cart is empty</h1>

    <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-3xl text-sm px-5 py-3 text-center me-2 mb-2 mt-6" onClick={() => navigate('/menu')}>Add Food Item</button>

    </div>;



  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.foodItem.price * item.quantity;
  }, 0);

  localStorage.setItem('totalAmount',  JSON.stringify(totalAmount));

  return (
    <div className=" bg-white dark:bg-black h-lvh text-black  dark:text-orange-500">
      <h1 className="font-bold text-2xl text-center py-5 mb-12">Your Orders</h1>
      <ul className="mb-6">
        {cartItems.map((item, index) => (
          <li
            key={index}
            className="flex flex-row m-auto justify-evenly mt-4  border-2 border-red-500 py-2 w-96 rounded-2xl"
          >
            <div className="flex-grow-0 font-extrabold">
              {item.foodItem.name}{" "}
              {editIndex === index ? (
                // If the item is being edited, show an input field
                <input
                  type="number"
                  min="1"
                  value={updatedQuantity}
                  onChange={(e) => setUpdatedQuantity(parseInt(e.target.value))}
                  className="border-2 w-16 ml-2"
                />
              ) : (
                <> X {item.quantity}</> // Otherwise, show the quantity
              )}
            </div>

            <p className=" font-bold">
              Price: ₹{item.foodItem.price * item.quantity}
            </p>
            <div className="flex flex-row justify-center ">
              {editIndex === index ? (
                // If in edit mode, show the save button
                <FiSave
                  onClick={() => handleUpdate(item._id)}
                  size={22}
                  color="blue"
                  className="mr-1 cursor-pointer"
                >
                  Save
                </FiSave>
              ) : (
                // Otherwise, show the edit button
                <MdEdit
                  onClick={() => handleEdit(index)}
                  size={22}
                  color="green"
                  className="mr-1 cursor-pointer"
                />
              )}
              <MdDelete
                size={22}
                color="red"
                className="cursor-pointer"
                onClick={() => handleDelete(item.foodItem._id)}
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="text-center font-bold mt-10 text-2xl">
        Total Amount: ₹{totalAmount}
      </p>
      <div className=" text-center  mt-7">
        <button
          onClick={() => navigate("/payment")}
        className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          CheckOut
        </button>
        <button
          onClick={() => navigate("/menu")}
          className="ml-5 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-3xl dark:text-black text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Add More Item
        </button>
      </div>
    </div>
  );
}

export default Order;
