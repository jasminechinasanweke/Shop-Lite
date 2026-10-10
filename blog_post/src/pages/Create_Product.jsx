import { useState } from "react";
import { Link } from "react-router-dom";
const BASE_URL = "http://ecommerce.reworkstaging.name.ng/v2";
let menuitems = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Create Category", link: "/create_Category" },
    { name: "View_product", link: "/product_view" },
    { name: "View Category", link: "/categorie_view" },
    { name: "User view", link: "/user_view" },
];

function create_Product() {
    const [title, setTitle] = useState("");
    const [descp, setDescp] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [quantity, setQuantity] = useState("");
    const [images, setImages] = useState("");
    const [currency, setCurrency] = useState("");
    const [validate, setValidate] = useState(false)

    const createNewProduct = async (e) => {
        e.preventDefault();
        
        if (!title || !descp || !price || !brand || !quantity || !images || !currency) {
            alert("All fields required");
            setValidate(true)
            return;
        }

        let merchant_data = localStorage.getItem("Admin");
        let merchant = JSON.parse(merchant_data);
        let category_data = localStorage.getItem("categories");
        let category = JSON.parse(category_data);

        const categoryId = Array.isArray(category)
            ? category[0]?.id
            : category?.id || category;

        const products_obj = {
            title,
            descp,
            price: Number(price),
            brand,
            quantity: Number(quantity),
            images,
            currency,
            category_id: categoryId,
            merchant_id: merchant?.id,
        };


        try {
            const resp = await fetch(`${BASE_URL}/products`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(products_obj),
            });

            const data = await resp.json();
            let result = data;
            if (result.code === 404) {
                alert("An error occurred");
                console.log(data);
            } else {
                alert("Product created successfully");
                console.log(data);
                // save to localStorage
                localStorage.setItem("Product", JSON.stringify(data));

                // clear form
                setTitle("");
                setDescp("");
                setPrice("");
                setBrand("");
                setQuantity("");
                setImages("");
                setCurrency("");
            }
        } catch (err) {
            console.log(err);
            alert("An error occurred");
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

            {/* ================= MAIN CONTENT ================= */}
            <div className="flex-1 ml-64 bg-gray-100 min-h-screen p-6">

                <div className="bg-gray-50 py-10">
                    <form
                        onSubmit={createNewProduct}
                        className="w-full max-w-lg mx-auto bg-white rounded-lg shadow p-6"
                    >
                        <div className="text-center mb-5">
                            <h3 className="font-semibold text-2xl mb-2">
                                Create Product
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Add a new product to your store.
                            </p>
                        </div>

                        {/* TITLE */}
                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder="Title"
                                className="border border-[#efefef] hover:border-[#ff6543] p-2 w-full rounded-lg outline-none "
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                             {validate == true && title == "" ? <span className="text-sm text-red-700">* Title Is Required</span> : null}
                        </div>

                        {/* DESCRIPTION */}
                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder="Description"
                                className="border border-[#efefef] hover:border-[#ff6543] p-2 w-full rounded-lg outline-none"
                                value={descp}
                                onChange={(e) => setDescp(e.target.value)}
                            />
                             {validate == true && descp == "" ? <span className="text-sm text-red-700">*Description Is Required</span> : null}
                        </div>

                        {/* PRICE */}
                        <div className="mb-3">
                            <input
                                type="number"
                                placeholder="Price"
                                className="border border-[#efefef] hover:border-[#ff6543] p-2 w-full rounded-lg outline-none"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                             {validate == true && price == "" ? <span className="text-sm text-red-700">*Price Is Required</span> : null}
                        </div>

                        {/* BRAND */}
                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder="Brand"
                                className="border border-[#efefef] hover:border-[#ff6543] p-2 w-full rounded-lg outline-none"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            />
                             {validate == true && brand == "" ? <span className="text-sm text-red-700">* Brand Is Required</span> : null}
                        </div>

                        {/* QUANTITY */}
                        <div className="mb-3">
                            <input
                                type="number"
                                placeholder="Quantity"
                                className="border border-[#efefef] hover:border-[#ff6543] p-2 w-full rounded-lg outline-none"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                             {validate == true && quantity == "" ? <span className="text-sm text-red-700">* Quantity Is Required</span> : null}
                        </div>

                        {/* IMAGE */}
                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder="Image URL"
                                className="border border-[#efefef] hover:border-[#ff6543] p-2 w-full rounded-lg outline-none"
                                value={images}
                                onChange={(e) => setImages(e.target.value)}
                            />
                             {validate == true && images == "" ? <span className="text-sm text-red-700">* Image address Is Required</span> : null}
                        </div>

                        {/* CURRENCY */}
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Currency"
                                className="border border-[#efefef] hover:border-[#ff6543] p-2 w-full rounded-lg outline-none"
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                            />
                             {validate == true && currency == "" ? <span className="text-sm text-red-700">*Currency Is Required</span> : null}
                        </div>

                        <button className="bg-[#ff6543] text-white w-full py-2 rounded hover:bg-gray-800">
                            Create Product
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );


}
export default create_Product;
