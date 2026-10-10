import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";

const BASE_URL = "http://ecommerce.reworkstaging.name.ng/v2";

// ✅ MENU ITEMS (added)
let menuitems = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Create product", link: "/create_product" },
    { name: "Create Category", link: "/create_Category" },
    { name: "View product", link: "/product_view" },
    { name: "User view", link: "/user_view" },
];

function Discover() {
    const [categories, setCategories] = useState([]);
    const [loader, setLoader] = useState(true);
    const [merchant, setMerchant] = useState(null);

    // Get merchant
    useEffect(() => {
        let merchant_data = localStorage.getItem("Admin");
        if (merchant_data) {
            setMerchant(JSON.parse(merchant_data));
        }
    }, []);

    // Fetch categories
    useEffect(() => {
        if (!merchant) return;

        const getCategories = async () => {
            try {
                const resp = await axios.get(
                    `${BASE_URL}/categories?merchant_id=${merchant.id}`
                );

                if (resp.status === 200) {
                    setCategories(resp.data);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoader(false);
            }
        };

        getCategories();
    }, [merchant]);

    // Delete
    const deleteCategory = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this category?");
        if (!confirmDelete) return;

        try {
            const resp = await axios.delete(`${BASE_URL}/categories/${id}`);

            if (resp.status === 200) {
                setCategories((prev) => prev.filter((item) => item.id !== id));
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex">

            {/* ================= SIDEBAR ================= */}

            <div className="w-64 bg-[#ff6543] shadow-md fixed inset-y-0 ">
                <Link to="/" className="flex items-center justify-center space-y-4">
                    <div
                        className="text-4xl font-bold cursor-pointer text-slate-800 mb-5 mt-5"
                    >
                        SHOP <span className="font-medium">LITE</span>
                    </div>
                </Link>

                <nav className="p-4 space-y-5  text-slate-800 text-white">
                    {menuitems.map((item, index) => (
                        <Link key={index} to={item.link} className="block p-2 hover:text-black rounded font-medium">
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* ================= MAIN ================= */}
            <div className="flex-1 ml-64 p-6 bg-gray-100 min-h-screen">

                <h2 className="text-2xl font-bold mb-6">Categories</h2>

                {loader ? (
                    <div className="flex justify-center items-center h-[60vh]">
                        <div className="flex items-center gap-2 text-lg">
                            <AiOutlineLoading3Quarters className="animate-spin" />
                            <span>Loading...</span>
                        </div>
                    </div>
                ) : categories.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {categories.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl shadow hover:shadow-lg  p-3"
                            >
                                <img
                                    src={item.image}
                                    alt=""
                                    className="w-full h-40 object-cover rounded-md mb-3"
                                />

                                <h4 className="text-lg font-semibold mb-2">
                                    {item.name}
                                </h4>

                                <div className="flex gap-2">
                                    <Link
                                        to={`/product/${item.id}`}
                                        className="bg-black text-white text-sm px-3 py-1 rounded"
                                    >
                                        View
                                    </Link>

                                    <button
                                        onClick={() => deleteCategory(item.id)}
                                        className="bg-red-500 text-white text-sm px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center mt-10 text-gray-500">
                        No Category yet
                    </p>
                )}
            </div>
        </div>
    );
}

export default Discover;
