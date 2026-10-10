import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BASE_URL = "http://ecommerce.reworkstaging.name.ng/v2";

// ================= SIDEBAR MENU =================
let menuitems = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Create Product", link: "/create_product" },
    { name: "Create Category", link: "/create_Category" },
    { name: "View Category", link: "/categorie_view" },
    { name: "User View", link: "/user_view" },
];

function ProductTable() {
    const [products, setProducts] = useState([]);

    // ================= FETCH PRODUCTS =================
    useEffect(() => {
        const merchant_data = localStorage.getItem("Admin");
        const merchant = JSON.parse(merchant_data);

        if (!merchant?.id) return;

        fetch(`${BASE_URL}/products?merchant_id=${merchant.id}`)
            .then((resp) => resp.json())
            .then((result) => {
                const data = result.data || [];
                setProducts(data);
            })
            .catch((err) => console.log(err));
    }, []);

    // ================= DELETE PRODUCT =================
    function deleteProduct(id) {
        const ask = window.confirm("Are you sure you want to delete this product?");
        if (!ask) return;

        fetch(`${BASE_URL}/products/${id}`, {
            method: "DELETE",
        })
            .then((resp) => resp.json())
            .then(() => {
                alert("Product deleted successfully");

                setProducts((prev) => prev.filter((item) => item.id !== id));
            })
            .catch((err) => console.log(err));
    }

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

            {/* ================= MAIN CONTENT ================= */}
            <div className="flex-1 ml-64 p-6 bg-gray-100 min-h-screen">

                <h2 className="text-4xl font-semibold mb-4">Products</h2>

                <div className="overflow-x-auto bg-white shadow rounded">
                    <table className="w-full border border-black">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 text-[#ff6543]">Title</th>
                                <th className="p-2 text-[#ff6543]">Description</th>
                                <th className="p-2 text-[#ff6543]">Price</th>
                                <th className="p-2 text-[#ff6543]">Brand</th>
                                <th className="p-2 text-[#ff6543]">Qty</th>
                                <th className="p-2 text-[#ff6543]">Image</th>
                                <th className="p-2 text-[#ff6543]">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id} className="text-center">
                                    <td className="border p-2">{product.title}</td>
                                    <td className="border p-2">{product.descp}</td>
                                    <td className="border p-2">₦{product.price}</td>
                                    <td className="border p-2">{product.brand}</td>
                                    <td className="border p-2">{product.quantity}</td>

                                    <td className="border p-2 flex justify-center">
                                        <img
                                            src={product.images?.[0]}
                                            alt=""
                                            className="w-16 h-16 object-cover"
                                        />
                                    </td>

                                    <td className="border p-2">
                                        <button
                                            onClick={() => deleteProduct(product.id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            ❌ Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default ProductTable;