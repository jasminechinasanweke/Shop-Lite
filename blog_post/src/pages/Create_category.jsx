import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BASE_URL = "http://ecommerce.reworkstaging.name.ng/v2";

// ✅ Sidebar menu
let menuitems = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Create product", link: "/create_product" },
    { name: "View product", link: "/product_view" },
    { name: "View Category", link: "/categorie_view" },
    { name: "User view", link: "/user_view" },
];

function CreatCategory() {
    const [name, setname] = useState("");
    const [image, setimage] = useState("");
    const [user, setUser] = useState({});
    const [validate, setValidate] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        let merchant_data = localStorage.getItem("Admin");
        if (merchant_data) {
            setUser(JSON.parse(merchant_data));
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !image) {
            alert("All fields required");
            setValidate(true);
            return;
        }

        try {
            const resp = await fetch(`${BASE_URL}/categories`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    image,
                    merchant_id: user?.id,
                }),
            });

            const data = await resp.json();

            if (resp.ok) {
                alert("Created Category ✅");

                localStorage.setItem("categories", JSON.stringify(data));
                setname("");
                setimage("");
            } else {
                alert(data.message || "Error creating category");
            }
        } catch (err) {
            console.log(err);
            alert("Network error");
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
            <div className="flex-1 ml-64 bg-gray-100 min-h-screen p-6">

                <div className="bg-gray-50 py-10">
                    <form
                        className="w-full max-w-lg mx-auto bg-white rounded-lg shadow p-6"
                        onSubmit={handleSubmit}
                    >
                        <div className="text-center mb-5">
                            <h3 className="font-mono text-2xl mb-2">
                                Create a Category
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Create categories for your products.
                            </p>
                        </div>

                        {/* NAME */}
                        <div className="mb-4">
                            <label className="text-gray-600">Name</label>
                            <input
                                type="text"
                                className="border border-[#efefef] hover:border-[#ff6543] p-2 w-full rounded-lg outline-none"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                            />
                            {validate && name === "" && (
                                <span className="text-sm text-red-600">
                                    * Name is required
                                </span>
                            )}
                        </div>

                        {/* IMAGE */}
                        <div className="mb-4">
                            <label className="text-gray-600">Image URL</label>
                            <input
                                type="text"
                                className="border border-[#efefef] hover:border-[#ff6543] p-2 w-full rounded-lg outline-none"
                                value={image}
                                onChange={(e) => setimage(e.target.value)}
                            />
                            {validate && image === "" && (
                                <span className="text-sm text-red-600">
                                    * Image is required
                                </span>
                            )}
                        </div>

                        <button className="bg-[#ff6543] text-white py-2 px-6 w-full rounded hover:bg-gray-800 ">
                            Submit
                        </button>
                    </form>
                </div>


            </div>
        </div>
    );
}

export default CreatCategory;