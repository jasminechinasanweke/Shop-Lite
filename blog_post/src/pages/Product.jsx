import React, { useState, useEffect } from "react";
import { FiHeart, FiMinus, FiPlus, FiStar } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Down from "../components/Down";
import womanImage from "../assets/woman.jpg";
import manImage from "../assets/man.jpg";
import image9 from "../assets/ipads.png";
import image10 from "../assets/droon.png";
import image11 from "../assets/peals.png";
import image12 from "../assets/tv.png";
import image13 from "../assets/bluetooth.png";

const BASE_URL = "http://ecommerce.reworkstaging.name.ng/v2";

export default function Product() {
    const ipadImage = image9;
    const droonImage = image10;
    const pealsImage = image11;
    const tvImage = image12;
    const bluetoothImage = image13;

    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);


    useEffect(() => {
        getProduct();
    }, [id]);

    function getProduct() {
        const merchant = JSON.parse(localStorage.getItem("Admin"));

        fetch(`${BASE_URL}/products?merchant_id=${merchant.id}`)
            .then((resp) => resp.json())
            .then((result) => {
                const found = result.data.find(
                    (p) => String(p.product_id ?? p.id) === String(id)
                );
                console.log(found);
                setProduct(found || null);
            })
            .catch((err) => console.log(err));
    }


    const productImageSrc = product?.image || product?.images?.[0] || product?.image_url || "";

    const price = Number(product?.price?.replaceAll(",", "")) || 0;
    const total = price * qty;


    function addToCart(goTo = "/cart") {
        if (!product) {
            console.log("product not loaded yet");
            return;
        }

        const pid = product.product_id ?? product.id;
        const saved = JSON.parse(localStorage.getItem("buyCart") || "[]");
        const existing = saved.find((item) => item.product_id === pid);

        let updated;
        if (existing) {
            updated = saved.map((item) =>
                item.product_id === pid
                    ? { ...item, qty: Number(item.qty || 0) + qty, source: "api" }
                    : item
            );
        } else {
            updated = [
                ...saved,
                {
                    product_id: pid,
                    name: product.name || product.title || "",
                    image: productImageSrc,
                    price,
                    qty,
                    source: "api",
                },
            ];
        }

        console.log("saving to cart:", updated);
        localStorage.setItem("buyCart", JSON.stringify(updated));
        navigate(goTo);
    }

    return (
        <div className="min-h-screen text-slate-800">
            <Nav />

            <main className="mx-auto max-w-[1280px] px-4 py-10 md:py-14">
                <div className="grid gap-10 border border-[#e6e6e6] bg-[#f8f8f8] p-6 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-6 w-full">
                            <div className="flex flex-1 items-center justify-center rounded-md border border-[#e4e4e4] bg-[#f1f1f1] p-6 md:min-h-[520px]">
                                <img
                                    src={product?.image || ""}
                                    alt={product?.name || "Product image"}
                                    className="h-[360px] w-auto object-contain drop-shadow-[0_22px_25px_rgba(0,0,0,0.12)] md:h-[440px]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[520px]">
                        <h1 className="text-3xl font-light uppercase  text-slate-800 md:text-[3rem] md:leading-[1.1]">
                            {product?.name}
                        </h1>

                        <p className="mt-4 text-3xl font-medium text-[#ff6f4a]">
                            ${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </p>

                        <div className="mt-4 flex items-center gap-1 text-[#ff6f4a]">
                            {[...Array(5)].map((_, index) => (
                                <FiStar key={index} className="text-sm" fill="currentColor" />
                            ))}
                        </div>

                        <p className="mt-5 max-w-[440px] text-sm leading-7 text-slate-500 md:text-[15px]">
                            {product?.description}
                        </p>

                        <div className="mt-8 border-t border-dashed border-slate-200 pt-6">
                            <div className="mb-3 text-[11px] font-semibold uppercase text-slate-500">
                                Color
                            </div>
                            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                                <span>Orange</span>
                                <span>Green</span>
                                <span>Blue</span>
                                <span>Black</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="mb-3 text-[11px] font-semibold uppercase  text-slate-500">
                                Size
                            </div>
                            <div className="flex items-center gap-4 text-sm text-slate-600">
                                <span>XL</span>
                                <span>L</span>
                                <span>M</span>
                                <span>S</span>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center gap-4">
                            <div className="inline-flex items-center rounded-md border border-slate-200 bg-white">
                                <button
                                    type="button"
                                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                                    className="flex h-12 w-12 items-center justify-center text-slate-600 hover:bg-slate-50"
                                >
                                    <FiMinus className="text-sm" />
                                </button>
                                <span className="w-10 text-center text-lg text-slate-700">{qty}</span>
                                <button
                                    type="button"
                                    onClick={() => setQty((q) => q + 1)}
                                    className="flex h-12 w-12 items-center justify-center text-slate-600 hover:bg-slate-50"
                                >
                                    <FiPlus className="text-sm" />
                                </button>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => addToCart("/checkout")}
                                    className="rounded-full bg-[#ff6f4a] px-6 py-3 text-[11px] font-semibold uppercase text-white  hover:bg-[#ea633d]"
                                >
                                    Order now
                                </button>
                                <button
                                    type="button"
                                    onClick={() => addToCart("/cart")}
                                    className="rounded-full bg-[#1f1f1f] px-6 py-3 text-[11px] font-semibold uppercase text-white  hover:bg-[#000]"
                                >
                                    Add to cart
                                </button>
                                <button
                                    type="button"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700  hover:border-slate-300 hover:text-slate-900"
                                >
                                    <FiHeart className="text-lg" />
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </main>

            {/* information */}
            <section>
                <section className="border-b border-gray-100 flex justify-center gap-8 mx-auto w-[90%] text-sm">
                    <h2 className="uppercase text-[#ff6543] cursor-pointer">Description</h2>
                    <h2 className="uppercase text-[#272727] cursor-pointer">Additional information</h2>
                    <h2 className="uppercase text-[#272727] cursor-pointer">Reviews (2)</h2>
                </section>
                <section className="border-b border-gray-100 justify-center gap-8 mx-auto w-[90%] text-sm py-6">
                    <h2 className="mb-3 font-semibold">Product Description</h2>
                    <p className="mb-3">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                        Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede.
                    </p>
                    <ul className="mb-3 list-disc list-inside">
                        <li>Donec nec justo eget felis facilisis fermentum</li>
                        <li>Suspendisse urna viverra non, semper suscipit pede.</li>
                    </ul>
                    <p className="mb-3">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                    </p>
                </section>

                {/* Reviews */}
                <section className="flex mx-auto w-[90%] mt-5 gap-3">
                    <div>
                        <img src={womanImage} alt="woman avatar" className="h-20 w-20 object-cover rounded-lg" />
                    </div>
                    <div>
                        <ul className="flex text-[#ff6543]">
                            <li>★</li><li>★</li><li>★</li><li>★</li><li>★</li>
                        </ul>
                        <h1 className="font-semibold">Emma Chamberlin – 11/22/2022</h1>
                        <p className="text-sm">Vitae tortor condimentum lacinia quis vel eros donec ac.</p>
                    </div>
                </section>

                <section className="flex mx-auto w-[90%] mt-5 gap-3">
                    <div>
                        <img src={manImage} alt="man avatar" className="h-20 w-20 object-cover rounded-lg" />
                    </div>
                    <div>
                        <ul className="flex text-[#ff6543]">
                            <li>★</li><li>★</li><li>★</li><li>★</li><li>★</li>
                        </ul>
                        <h1 className="font-semibold">Thompson J. – 11/22/2022</h1>
                        <p className="text-sm">Vitae tortor condimentum lacinia quis vel eros donec ac.</p>
                    </div>
                </section>

                <section className="mx-auto w-[90%] mt-10 border-b border-[#e6e6e6] pb-10">
                    <h2 className="uppercase text-lg mb-2">Add a review</h2>
                    <p className="text-sm mb-3">Your email address will not be published. Required fields are marked *</p>
                    <p className="text-sm font-medium">Your rating *</p>
                    <ul className="flex text-[#dcdcdc] mb-2 cursor-pointer">
                        <li>★</li><li>★</li><li>★</li><li>★</li><li>★</li>
                    </ul>
                    <p className="text-sm mb-1">Choose your photo</p>
                    <button type="button" className="bg-[#f1f1f0] p-2 mb-3 text-xs rounded border border-[#e3e3e3]">Choose your file</button>
                    <input type="text" placeholder="Write your review here *" className="w-full bg-[#ffffff] border border-[#e3e3e3] p-3 rounded-sm" />
                    <div className="flex gap-3 mt-3">
                        <input type="text" placeholder="Write your name here *" className="bg-[#ffffff] border border-[#e3e3e3] p-3 rounded-sm w-[50%]" />
                        <input type="email" placeholder="Write your email here *" className="bg-[#ffffff] border border-[#e3e3e3] p-3 rounded-sm w-[50%]" />
                    </div>
                    <p className="text-sm my-3">Save my name, email, and website in this browser for the next time.</p>
                    <button type="button" className="p-2 px-6 rounded-xl bg-[#ff6543] text-white text-sm cursor-pointer hover:bg-[#ea5533]">Submit</button>
                </section>
            </section>

            {/* Related items */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="mb-5 flex items-center gap-3">
                        <h2 className="text-sm uppercase  text-gray-600">
                            related sell
                        </h2>
                        <div className="flex-1 border-t border-dashed border-gray-200"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
                        <div className="flex flex-col h-60 w-40 items-center justify-center border border-slate-200 bg-white hover:border-slate-300 p-2">
                            <img src={ipadImage} alt="Ipad product" className="h-28 w-auto object-contain mb-2" />
                            <h3 className="text-sm font-medium text-[#0f2542] mb-1">Ipad (6 Gen)</h3>
                            <p className="text-sm font-semibold text-[#ff6543]">$870</p>
                        </div>
                        <div className="flex flex-col h-60 w-40 items-center justify-center border border-slate-200 bg-white  hover:border-slate-300 p-2">
                            <img src={droonImage} alt="Drone product" className="h-28 w-auto object-contain mb-2" />
                            <h3 className="text-sm font-medium text-[#0f2542] mb-1">Drone With Camera</h3>
                            <p className="text-sm font-semibold text-[#ff6543]">$600</p>
                        </div>
                        <div className="flex flex-col h-60 w-40 items-center justify-center border border-slate-200 bg-white  hover:border-slate-300 p-2">
                            <img src={pealsImage} alt="Apple Watch product" className="h-28 w-auto object-contain mb-2" />
                            <h3 className="text-sm font-medium text-[#0f2542] mb-1">Apple Watch (Gen 2)</h3>
                            <p className="text-sm font-semibold text-[#ff6543]">$350</p>
                        </div>
                        <div className="flex flex-col h-60 w-40 items-center justify-center border border-slate-200 bg-white  hover:border-slate-300 p-2">
                            <img src={tvImage} alt="TV product" className="h-28 w-auto object-contain mb-2" />
                            <h3 className="text-sm font-medium text-[#0f2542] mb-1">Ultra HD TV</h3>
                            <p className="text-sm font-semibold text-[#ff6543]">$2000</p>
                        </div>
                        <div className="flex flex-col h-60 w-40 items-center justify-center border border-slate-200 bg-white hover:border-slate-300 p-2">
                            <img src={bluetoothImage} alt="Bluetooth Speaker product" className="h-28 w-auto object-contain mb-2" />
                            <h3 className="text-sm font-medium text-[#0f2542] mb-1">Bluetooth Speaker</h3>
                            <p className="text-sm font-semibold text-[#ff6543]">$60</p>
                        </div>
                    </div>
                </div>
            </section>

            <Down />
            <Footer />
        </div>
    );
}