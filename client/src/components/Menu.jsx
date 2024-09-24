import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Footer from "./Footer";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

function Menu() {
  const [foodItems, setFoodItems] = useState([]);
  const [query, setQuery] = useState("veg");
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({});

  const increment = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 1) + 1, // Increase quantity for the item
    }));
  };

  const decrement = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: prevQuantities[itemId] > 1 ? prevQuantities[itemId] - 1 : 1, // Decrease quantity, but not below 1
    }));
  };

  let userId = "";
  const getToken = () => {
    const user = localStorage.getItem("user"); // Retrieve the user object from localStorage
    if (user) {
      const parsedUser = JSON.parse(user);
      userId = parsedUser._id; // Parse the JSON string back into an object

      return parsedUser.token; // Access the token from the parsed object
    }
    return null; // Return null if there's no user data
  };

  const token = getToken();

  const handleAddCart = async (item) => {
    const quantity = quantities[item._id] || 1;
    try {
      await axios.post(
        "https://food-app-backend-eight.vercel.app/cart",
        {
          quantity: quantity,
          userId: userId,
          foodItemId: item._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setQuantities({});
      window.alert("item added");
    } catch (error) {
      console.log(error);

      window.alert("error");
    }
  };

  useEffect(() => {
    setLoading(true);
    const fetchFoodData = async () => {
      try {
        const res = await axios.get(`https://food-app-backend-eight.vercel.app/menu/${query}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLoading(false);

        setFoodItems(res.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchFoodData();
  }, [query]);

  if (loading) return <Spinner />;

  return (
    <div className="bg-white 2xl:h-screen md:h-svh lg:min-h-fit  dark:bg-zinc-950  dark:text-white ">
      <ul className="text-2xl   font-medium flex flex-row justify-evenly items-center cursor-pointer ">
        <li
          className="border-b-2 border-red-700 hover:font-bold mt-3"
          onClick={() => setQuery("veg")}
        >
          Veg
        </li>
        <li
          className="border-b-2 border-red-700 hover:font-bold mt-3"
          onClick={() => setQuery("non veg")}
        >
          Non Veg
        </li>
        <li
          className="border-b-2 border-red-700 hover:font-bold mt-3"
          onClick={() => setQuery("fast food")}
        >
          Fast Food
        </li>
        <li
          className="border-b-2 border-red-700 hover:font-bold mt-3"
          onClick={() => setQuery("drinks")}
        >
          Drinks
        </li>
      </ul>

      <div className="grid grid-cols-2 px-1  w-auto  md:grid-cols-3    mt-5 auto-cols-auto">
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="flex px-1 justify-center flex-wrap flex-col w-auto  m-auto text-wrap text-center transition hover:shadow-lg mb-12 mt-5 bg-white border lg:w-72 border-gray-200 rounded-lg shadow  dark:bg-black dark:border-cyan-400 dark:hover:shadow-cyan-400"
          >
            <div className="flex m-auto justify-center mt-4">
              <img
                className="rounded-full h-20 w-20 "
                src={item.imageUrl}
                alt="food_img"
              />
            </div>

            <div >
              <a href="#">
                <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
              </a>

              <div className="flex justify-center mb-3">
                <Rating
                  initialRating={3}
                  readonly={true}
                  emptySymbol={<FaRegStar className="text-yellow-500" />}
                  fullSymbol={<FaStar className="text-yellow-500 " />}
                />
              </div>

              <div className="text-center font-extrabold ">
                <span> ₹{item.price}</span>
              </div>

              <div className="flex flex-row justify-center space-x-3 items-center mt-6">
                <span
                  onClick={() => decrement(item._id)}
                  className="border-2 border-red-400  rounded-full py-2 px-2 cursor-pointer"
                >
                  <FiMinus />
                </span>

                <span className="border-2 border-red-400   py-1 rounded-xl px-5 cursor-pointer">
                  {quantities[item._id] || 1}
                </span>
                <span
                  onClick={() => increment(item._id)}
                  className="border-2 border-red-400  rounded-full py-2 px-2 cursor-pointer"
                >
                  <IoMdAdd />
                </span>
              </div>

              <button
                className="border-2 border-black rounded-3xl px-5 py-2 mt-4 mb-3 dark:border-green-500"
                onClick={() => handleAddCart(item)}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
}
export default Menu;
