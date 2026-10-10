import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Down from "../components/Down";
import image from "../assets/calculator.png";
import image3 from "../assets/phoneone.png";
import image4 from "../assets/pin.png";
import image5 from "../assets/watch.png";
import image6 from "../assets/joysticks.png";
import image7 from "../assets/earbuds.png";
import image8 from "../assets/laptop.png";
import home from "../assets/home.jpg";


const BASE_URL = "http://ecommerce.reworkstaging.name.ng/v2";

const sidebarProducts = {
    featured: [
        {
            name: "Wireless Headset",
            price: "$500",
            image:
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=200&q=80",
        },
        {
            name: "IPhone X Pro Max",
            price: "$820",
            image:
                "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=200&q=80",
        },
        {
            name: "IPhone 11 Pro",
            price: "$960",
            image:
                "https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=200&q=80",
        },
    ],

    latest: [
        {
            name: "Apple AirPod",
            price: "$450",
            image:
                "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=200&q=80",
        },
        {
            name: "Screen Touch Watch",
            price: "$750",
            image:
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=80",
        },
        {
            name: "Digital Watch",
            price: "$660",
            image:
                "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=200&q=80",
        },
    ],

    reviewed: [
        {
            name: "Wireless Joysticks",
            price: "$350",
            image:
                "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=200&q=80",
        },
        {
            name: "Apple White AirPod",
            price: "$330",
            image:
                "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=200&q=80",
        },
        {
            name: "Gimbal Stabilizer",
            price: "$920",
            image:
                "https://images.unsplash.com/photo-1606986628253-8c5a2d8a5c1b?auto=format&fit=crop&w=200&q=80",
        },
    ],

    sale: [
        {
            name: "IPhone 15 Pro Max",
            oldPrice: "$1666",
            price: "$999",
            image:
                "https://images.unsplash.com/photo-1592286927505-2fd9c2b1c5f1?auto=format&fit=crop&w=200&q=80",
        },
        {
            name: "White AirPods",
            oldPrice: "$500",
            price: "$410",
            image:
                "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?auto=format&fit=crop&w=200&q=80",
        },
        {
            name: "Security CCTV Camera",
            oldPrice: "$600",
            price: "$500",
            image:
                "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=200&q=80",
        },
    ],
};


const slides = [
    {
        title: "GOPRO HERO® BLACK",
        description: "Limited stocks available. Grab it now!",
        image: "/gopro-camera.png",
        button: "SHOP COLLECTION",
    },
    {
        title: "DISCOVER NEW TECH",
        description: "Explore our latest technology collection.",
        image: "/home.png",
        button: "SHOP NOW",
    },


];
function ProductColumn({ title, items }) {
    return (
        <div className="rounded-md border border-gray-200 p-5">
            <h2 className="text-sm uppercase  text-gray-600">{title}</h2>
            <div className="my-4 border-t border-dashed border-gray-200"></div>

            <div>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 border-b border-gray-100 py-3 last:border-b-0"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="h-12 w-12 rounded bg-gray-100 object-cover"
                        />

                        <div>
                            <p className="text-xs text-gray-600">{item.name}</p>

                            <div className="mt-1">
                                {item.oldPrice && (
                                    <span className="mr-2 text-xs text-gray-400 line-through">
                                        {item.oldPrice}
                                    </span>
                                )}

                                <span className="text-xs text-orange-500">{item.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Home() {
    const [current, setCurrent] = useState(0);
    const productImage = image;
    const phoneoneImage = image3
    const pinImage = image4
    const watchImage = image5
    const joysticksImage = image6
    const earbudsImage = image7
    const laptopImage = image8




    const previousSlide = () => {
        setCurrent((current - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrent((current + 1) % slides.length);
    };

    const slide = slides[current];
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


            <section className="w-full bg-white">
                <div className="relative flex items-center overflow-hidden bg-[#f5f5f5] sm:h-[400px]">

                    {/* Large circular background */}
                    <div className="absolute right-[10%] top-1/2 aspect-square w-[55%] -translate-y-1/2 rounded-full bg-[#eeeeee] sm:right-[12%] sm:w-[40%]" />

                    {/* Previous arrow */}
                    <button
                        onClick={previousSlide}
                        aria-label="Previous slide"
                        className="absolute left-3 top-1/2 z-20 flex h-7 w-7  items-center justify-center border border-gray-200 text-gray-400 hover:bg-gray-200"
                    >
                        ‹
                    </button>

                    {/* Left text content */}
                    <div className="relative z-10 ml-[12%] w-[42%] sm:ml-[14%] sm:w-[35%]">
                        <h1 className="text-4xl font-light text-[#272727]">
                            {slide.title}
                        </h1>

                        <p className="mt-2 text-[9px] text-gray-500 sm:text-xs">
                            {slide.description}
                        </p>

                        <button className="mt-4 rounded-full bg-[#ff6543] px-4 py-2 text-[8px] uppercase  text-white  hover:bg-[#e94d32] sm:px-6 sm:text-[10px]">
                            {slide.button}
                        </button>
                    </div>

                    {/* Center product image */}
                    <div className="absolute right-[12%] top-1/2 z-10 flex h-full w-[43%] -translate-y-1/2 items-center justify-center sm:right-[15%] sm:w-[35%]">
                        <img
                            src={productImage}
                            alt={slide.title}
                            className="h-[85%] w-full object-contain"
                        />
                    </div>

                    {/* Next arrow */}
                    <button
                        onClick={nextSlide}
                        aria-label="Next slide"
                        className="absolute right-3 top-1/2 z-20 flex h-7 w-7  items-center justify-center border border-gray-200 text-gray-400 hover:bg-gray-200"
                    >
                        ›
                    </button>
                </div>
            </section>

            {/* How we work section */}

            <section className="py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                        <div className="flex gap-3 px-2 md:px-4">
                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff6543] shadow-[0_10px_20px_rgba(255,101,67,0.25)]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                                    <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5V16a2 2 0 0 1-2 2h-1.64a2.5 2.5 0 0 1-4.72 0H9.36a2.5 2.5 0 0 1-4.72 0H3V6.5zm3.5 0a.5.5 0 0 0-.5.5V7h12v-.5a.5.5 0 0 0-.5-.5h-11zm.5 4h8v2H7v-2zm0 4h5v2H7v-2z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <h3 className="mb-1 text-sm font-semibold uppercase  text-[#0f2542]">Free delivery</h3>
                                <p className="text-sm leading-6 text-gray-600">Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>

                        <div className="flex gap-3 px-2 md:px-4">
                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff6543] shadow-[0_10px_20px_rgba(255,101,67,0.25)]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                                    <path d="M12 1 4 5v7c0 5.05 3.41 9.74 8 11 4.59-1.26 8-6.45 8-12V5l-8-4zm0 3.18 5 2.5v5.42c0 3.9-2.44 7.37-5 8.57-2.56-1.2-5-4.67-5-8.57V6.68l5-2.5zm-1 4.82h2v5h-2V9zm0 6h2v2h-2v-2z" />
                                </svg>
                            </div>
                            <div className="">
                                <h3 className="mb-1 text-sm font-semibold uppercase text-[#0f2542]">Quality guarantee</h3>
                                <p className="text-sm leading-6 text-gray-600">Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
                            </div>
                        </div>

                        <div className="flex gap-3 px-2 md:px-4">
                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff6543] shadow-[0_10px_20px_rgba(255,101,67,0.25)]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                                    <path d="M18 6h-2.15a2.5 2.5 0 0 0-5.7 0H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6.5-2c.83 0 1.5.67 1.5 1.5S12.33 7 11.5 7 10 6.33 10 5.5 10.67 4 11.5 4zm6.5 16H6V8h12v12zm-2-7h-3v-3h-2v3H9v2h3v3h2v-3h3v-2z" />
                                </svg>
                            </div>
                            <div className="">
                                <h3 className="mb-1 text-sm font-semibold uppercase  text-[#0f2542]">Daily offers</h3>
                                <p className="text-sm leading-6 text-gray-600">Amet consectetur adipi elit loreme ipsum dolor sit.</p>
                            </div>
                        </div>

                        <div className="flex gap-3 px-2 md:px-4">
                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff6543] shadow-[0_10px_20px_rgba(255,101,67,0.25)]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 14.59-4.7-4.7 1.41-1.41L11 13.17l6.3-6.3 1.4 1.42z" />
                                </svg>
                            </div>
                            <div className="">
                                <h3 className="mb-1 text-sm font-semibold uppercase  text-[#0f2542]">100% secure payment</h3>
                                <p className="text-sm leading-6 text-gray-600">Rem ipsum dolor sit amet, consectetur adipi elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* categories */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    {/* Heading */}
                    <div className="mb-5 flex items-center gap-3">
                        <h2 className="text-sm uppercase  text-gray-600">
                            Categories
                        </h2>

                        <div className="flex-1 border-t border-dashed border-gray-200"></div>
                    </div>



                    <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
                        <div
                            className="flex flex-col h-60 w-40 items-center justify-center border border-slate-200 bg-white  hover:border-slate-300 hover:text-slate-900"
                            aria-label="Cart"
                        >
                            <img
                                src={phoneoneImage}
                                alt="Phone"
                                className="h-20 w-auto object-contain"
                            />
                            <h3 className="mt-3 text-lg text-[#272727]">Phone</h3>
                        </div>
                        <div
                            className="flex flex-col h-60 w-40 items-center justify-center border border-slate-200 bg-white  hover:border-slate-300 hover:text-slate-900"
                            aria-label="Cart"
                        >
                            <img
                                src={pinImage}
                                alt="Playstation"
                                className="h-20 w-auto object-contain"
                            />
                            <h3 className="mt-3 text-lg text-[#227272]">Playstations</h3>
                        </div>
                        <div
                            className="flex flex-col h-60 w-40 items-center justify-center border border-slate-200 bg-white  hover:border-slate-300 hover:text-slate-900"
                            aria-label="Cart"
                        >
                            <img
                                src={watchImage}
                                alt="Digital Watches"
                                className="h-20 w-auto object-contain"
                            />
                            <h3 className="mt-3 text-lg text-[#272727]">Digital watches</h3>
                        </div>
                        <div
                            className="flex flex-col h-60 w-40 items-center justify-center border border-slate-200 bg-white  hover:border-slate-300 hover:text-slate-900"
                            aria-label="Cart"
                        >
                            <img
                                src={joysticksImage}
                                alt="Joysticks"
                                className="h-20 w-auto object-contain"
                            />
                            <h3 className="mt-3 text-lg text-[#272727]">Joysticks</h3>
                        </div>
                        <div
                            className="flex flex-col h-60 w-40 items-center justify-center border border-slate-200 bg-white  hover:border-slate-300 hover:text-slate-900"
                            aria-label="Cart"
                        >
                            <img
                                src={earbudsImage}
                                alt="Earbuds"
                                className="h-20 w-auto object-contain"
                            />
                            <h3 className="mt-3 text-lg text-[#272727]">Earpors</h3>
                        </div>
                        <div
                            className="flex flex-col h-60 w-40 items-center justify-center border border-slate-200 bg-white  hover:border-slate-300 hover:text-slate-900"
                            aria-label="Cart"
                        >
                            <img
                                src={laptopImage}
                                alt="Laptop"
                                className="h-20 w-auto object-contain"
                            />
                            <h3 className="mt-3 text-lg text-[#272727]">Laptop</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* best sell */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    {/* Heading */}
                    <div className="mb-5 flex items-center gap-3">
                        <h2 className="text-sm uppercase  text-gray-600">
                            best sell
                        </h2>

                        <div className="flex-1 border-t border-dashed border-gray-200"></div>
                    </div>

                    <div className="grid grid-cols-4 mt-7 gap-4 mb-5">

                        {products.map((item) => (
                            <div key={item.id}>
                                <div>

                                    {/* Image container */}
                                    <div className="relative border border-slate-200 bg-white  hover:border-slate-300 hover:text-slate-900 object-contain">
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="w-full h-[300px] object-cover"
                                        />



                                        {/* Price */}
                                        <div>
                                            <h3>{item.name}</h3>
                                        </div>

                                        <div className="gap-2 mt-2">
                                            <span className="text-gray-400">{item.descp}</span><br />
                                            <span className="text-2xl font-bold">{item.title}</span><br />
                                            <span className="text-red-500 font-semibold">£{item.price}</span><br />
                                            <span className="text-red-400">{item.discount}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </section >

            {/*  Limeted sell */}
            < section className="w-full bg-[#f8f8f8] py-10" >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-8">

                    {/* Product Image */}
                    <div className="w-1/2">
                        <img src={home} alt="Watch" className="h-[400px] w-auto object-contain" />
                    </div>

                    {/* Text */}
                    <div className="w-1/2 pl-10">
                        <h1 className="text-3xl font-light uppercase  text-gray-700">
                            30% Discount on
                            <br />
                            Apple Collection
                        </h1>

                        {/* Countdown */}
                        <div className="mt-6 flex gap-6">
                            <div>
                                <p className="text-3xl font-medium text-gray-800">21</p>
                                <span className="text-xs text-gray-500">Days</span>
                            </div>

                            <span className="text-2xl text-orange-500">:</span>

                            <div>
                                <p className="text-3xl font-medium text-gray-800">22</p>
                                <span className="text-xs text-gray-500">Hrs</span>
                            </div>

                            <span className="text-2xl text-orange-500">:</span>

                            <div>
                                <p className="text-3xl font-medium text-gray-800">19</p>
                                <span className="text-xs text-gray-500">Min</span>
                            </div>

                            <span className="text-2xl text-orange-500">:</span>

                            <div>
                                <p className="text-3xl font-medium text-gray-800">30</p>
                                <span className="text-xs text-gray-500">Sec</span>
                            </div>
                        </div>

                        <button className="mt-6 rounded-full bg-orange-500 px-7 py-3 text-xs uppercase text-white hover:bg-orange-600">
                            Shop Collection
                        </button>
                    </div>

                </div>
            </section >

            {/* LATEST SELLS */}

            < section className="mx-auto max-w-7xl px-6 py-10" >

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

                    <ProductColumn
                        title="Featured"
                        items={sidebarProducts.featured}
                    />

                    <ProductColumn
                        title="Latest Items"
                        items={sidebarProducts.latest}
                    />

                    <ProductColumn
                        title="Best Reviewed"
                        items={sidebarProducts.reviewed}
                    />

                    <ProductColumn
                        title="On Sale"
                        items={sidebarProducts.sale}
                    />

                </div>

            </section >

            <Down />

            {/* {footer} */}
            <Footer />

        </div >

    );
}