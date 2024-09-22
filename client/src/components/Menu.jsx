import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import { FaRupeeSign } from "react-icons/fa";

function Menu() {
  const [foodItems, setFoodItems] = useState([]);
  const [query, setQuery] = useState("veg");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchFoodData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/menu/${query}`);
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
    <>
      <ul className="text-2xl mt-12  font-extrabold flex flex-row justify-evenly items-center cursor-pointer ">
        <li
          className="border-b-2 border-red-700 hover:text-3xl"
          onClick={() => setQuery("veg")}
        >
          Veg
        </li>
        <li
          className="border-b-2 border-red-700 hover:text-3xl"
          onClick={() => setQuery("non veg")}
        >
          Non Veg
        </li>
        <li
          className="border-b-2 border-red-700 hover:text-3xl"
          onClick={() => setQuery("fast food")}
        >
          Fast Food
        </li>
        <li
          className="border-b-2 border-red-700 hover:text-3xl"
          onClick={() => setQuery("drinks")}
        >
          Drinks
        </li>
      </ul>

      <div className="flex flex-row flex-wrap justify-around mb-14 mt-14 test ">
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="max-w-sm transition hover:shadow-lg bg-white border w-72 border-gray-200 mt-4 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg h-60 w-[390px] "
                src={item.imageUrl}
                alt=""
              />
            </a>

            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
               <FaRupeeSign />
                {item.price}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
} 
export default Menu