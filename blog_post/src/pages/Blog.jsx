import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { FiSearch } from "react-icons/fi";
import Footer from "../components/Footer";
import Down from "../components/Down";



const categoryList = ["All", "Phones", "Accessories", "Tablets", "Watches"];
const tagList = ["White", "Cheap", "Mobile", "Modern"];
const BASE_URL = "http://ecommerce.reworkstaging.name.ng/v2";

export default function Blog() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    // ================= PRODUCTS =================
    function getProducts() {
        let merchant_data = localStorage.getItem("Admin");
        let merchant = JSON.parse(merchant_data);

        fetch(`${BASE_URL}/products?merchant_id=${merchant.id}`)
            .then((resp) => resp.json())
            .then((result) => {
                console.log(result);
                setProducts(result.data);
            })
            .catch((err) => console.log(err));
    }
    return (
        <div>
            <Nav />
            <main className="relative min-h-[281px] pt-20">
                <div className="absolute inset-0 bg-[#f5f5f5]" />
                <div className="relative p-12 text-center item-center justify-center">
                    <h1 className="text-4xl text-[#272727] uppercase">Blog</h1>
                    <h1 className="text-sm font-sm text-[#272727]">
                        Home / <span className="border-b border-gray-500">Shop</span>
                    </h1>
                </div>
            </main>

            <section className="mx-auto max-w-7xl px-6 py-10">
                <div className="grid gap-8 lg:grid-cols-[1fr_3fr]">
                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* Search */}
                        <div>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="flex-1 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none"
                                />
                                <button className="flex h-10 w-10 items-center justify-center rounded-md bg-[#f5663d] text-white  hover:bg-[#e85d36]">
                                    <FiSearch className="text-sm" />
                                </button>
                            </div>
                        </div>

                        {/* Categories */}
                        <div>
                            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-700">
                                Categories
                            </h3>
                            <div className="border-t border-dashed border-gray-200 pt-4">
                                <ul className="space-y-3 text-sm text-gray-500">
                                    {categoryList.map((item, index) => (
                                        <li key={item} className={index === 0 ? "font-medium text-gray-800" : ""}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Tags */}
                        <div>
                            <h3 className="mb-4 text-sm font-semibold uppercase  text-gray-700">
                                Tags
                            </h3>
                            <div className="border-t border-dashed border-gray-200 pt-4">
                                <ul className="space-y-3 text-sm text-gray-500">
                                    {tagList.map((tag) => (
                                        <li key={tag}>{tag}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="mb-4 text-sm font-semibold uppercase  text-gray-700">
                                Social Links
                            </h3>
                            <div className="border-t border-dashed border-gray-200 pt-4">
                                <ul className="space-y-3 text-sm text-gray-500">
                                    <li>Facebook</li>
                                    <li>Instagram</li>
                                    <li>Twitter</li>
                                    <li>Youtube</li>
                                    <li>Pinterest</li>
                                </ul>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div>
                        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div className="text-sm text-gray-600">Showing 1-9 of 55 results</div>

                            <select className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 outline-none sm:w-auto">
                                <option>Latest</option>
                            </select>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {products.slice(0, 7).map((product, index) => {
                                const categories = ["GADGETS", "PHONES", "DIGITAL WATCH"];
                                const category = categories[index % 3];

                                return (
                                    <div>

                                        {/* Image container */}
                                        <div className="relative border border-slate-200 bg-white hover:border-slate-300 hover:text-slate-900 object-contain">
                                            <img
                                                src={product.image}
                                                alt=""
                                                className="w-full h-[300px] object-cover"
                                            />



                                            {/* Price */}
                                            <div>
                                                <h3>{product.name}</h3>
                                            </div>

                                            <div className="gap-2 mt-2">
                                                <span className="text-gray-400">{product.description}</span><br />
                                                <span className="text-2xl font-bold">{product.title}</span><br />
                                                <span className="text-red-500 font-semibold">£{product.price}</span><br />
                                                <span className="text-red-400">{product.discount}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <Down />
            <Footer />

        </div>
    );

}
