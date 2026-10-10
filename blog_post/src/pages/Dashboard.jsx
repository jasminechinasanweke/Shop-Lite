import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BASE_URL = "http://ecommerce.reworkstaging.name.ng/v2";

let menuitems = [
    { name: "Create Product ", link: "/create_product" },
    { name: "Create Category", link: "/create_Category" },
    { name: "View Product", link: "/product_view" },
    { name: "View Category", link: "/categorie_view" },
    { name: "User View", link: "/user_view" },
];

function Dashboard() {
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]); // ✅ cart as array

    useEffect(() => {
        getProducts();
        getUsers();
        getCart();
    }, []);

    // ================= PRODUCTS =================
    function getProducts() {
        let merchant_data = localStorage.getItem("Admin");
        if (!merchant_data) return;

        let merchant = JSON.parse(merchant_data);

        fetch(`${BASE_URL}/products?merchant_id=${merchant.id}`)
            .then((resp) => resp.json())
            .then((result) => {
                const data = result.data || [];
                setProducts(data);
                setTotalProducts(data.length);
            })
            .catch((err) => console.log(err));
    }

    // ================= DELETE PRODUCT =================
    function deleteProduct(id) {
        const confirmDelete = window.confirm("Delete this product?");
        if (!confirmDelete) return;

        fetch(`${BASE_URL}/products/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => {
                const updated = products.filter(p => p.id !== id);
                setProducts(updated);
                setTotalProducts(updated.length);
                alert("Deleted ✅");
            })
            .catch((err) => console.log(err));
    }

    // ================= USERS =================
    function getUsers() {
        fetch(`${BASE_URL}/users`)
            .then((resp) => resp.json())
            .then((result) => {
                const users = result.data || result;
                setTotalUsers(users.length);
            })
            .catch((err) => console.log(err));
    }

    // ================= CART (FIXED) =================
    function getCart() {
        let savedCart = localStorage.getItem("buyCart");

        if (!savedCart) {
            setCart([]);
            return;
        }

        let cartItems = JSON.parse(savedCart);

        // ensure it's an array
        if (Array.isArray(cartItems)) {
            setCart(cartItems);
        } else {
            setCart([]);
        }
    }

    return (
        <div className="flex">
        
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

            {/* Main */}
            <div className="flex-1 ml-64 p-6">

                {/* Cards */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

                    <div className="bg-white p-6 rounded shadow">
                        <h3 className="text-[#ff6543]">Total Product</h3>
                        <p className="text-2xl font-bold">{totalProducts}</p>
                    </div>

                    <div className="bg-white p-6 rounded shadow">
                        <h3 className="text-[#ff6543]">Total User</h3>
                        <p className="text-2xl font-bold">{totalUsers}</p>
                    </div>

                    <div className="bg-white p-6 rounded shadow">
                        <h3 className="text-[#ff6543]">Cart Items</h3>
                        <p className="text-2xl font-bold">{cart.length}</p>
                    </div>

                </section>

                {/* PRODUCTS TABLE */}
                <div className="bg-white rounded shadow p-6">
                    <h2 className="text-xl font-bold mb-4">Products Table</h2>

                    <table className="w-full text-center border">
                        <thead>
                            <tr className="border-b bg-[#dedede]">
                                <th className="py-2 text-[#ff6543]">Title</th>
                                <th className="py-2 text-[#ff6543]">Description</th>
                                <th className="py-2 text-[#ff6543]">Price</th>
                                <th className="py-2 text-[#ff6543]">Brand</th>
                                <th className="py-2 text-[#ff6543]">Quantity</th>
                                <th className="py-2 text-[#ff6543]">Image</th>
                                <th className="py-2 text-[#ff6543]">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="py-4">
                                        No products found
                                    </td>
                                </tr>
                            ) : (
                                products.map((item, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="py-2">{item.title}</td>
                                        <td className="py-2">{item.descp}</td>
                                        <td className="py-2">₦{item.price}</td>
                                        <td className="py-2">{item.brand}</td>
                                        <td className="py-2">{item.quantity || "N/A"}</td>

                                        <td className="py-2">
                                            <img
                                                src={item.images?.[0]}
                                                alt=""
                                                className="w-10 h-10 object-cover mx-auto"
                                            />
                                        </td>

                                        <td className="py-2">
                                            <button
                                                onClick={() => deleteProduct(item.id)}
                                                className="bg-red-500 text-white text-sm px-2 py-1 rounded"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;