import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingBag, FiTruck, } from "react-icons/fi";

export default function Nav() {
    const [open, setOpen] = useState(false);
    const [down, setdown] = useState(false);
    return (
        <header className="w-full bg-[#f3f3f3]">
            <div className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-2 text-[11px] font-medium  text-slate-600">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                        <span>Need help?</span>
                        <a
                            href="tel:+112233344455"
                            className="font-semibold text-slate-700"
                        >
                            Call us 112233344455
                        </a>
                    </div>

                    <div className="hidden flex-1 justify-center text-center text-slate-500 lg:flex">
                        <span>
                            Summer sale discount off 60% off:{" "}
                            <span className="font-semibold text-slate-800">Shop Now</span>
                        </span>
                    </div>

                    <div className="hidden items-center gap-2 whitespace-nowrap text-slate-500 sm:flex">
                        <FiTruck className="text-sm" />
                        <span>2-3 business days delivery</span>
                    </div>
                </div>
            </div>

            <div className="bg-[#ffffff]">
                <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-4">
                    <Link to="/" className="flex items-center justify-center space-y-2">
                        <div
                            className="text-2xl font-bold  text-slate-800"
                        >
                            SHOP <span className="font-medium">LITE</span>
                        </div>
                    </Link>


                    <div className="flex gap-8 p-5">

                        <Link to="/">HOME</Link>
                        <Link to="/about">ABOUT</Link>
                        <Link to="/shop">SHOP</Link>

                        
                        <div className="relative">

                            <button onClick={() => setOpen(!open)}>
                                <Link to="/Product">PRODUCT ▼</Link>
                            </button>

                            {open && (
                                <div className="absolute mt-2 w-45 bg-white text-gray-800  rounded shadow z-50">
                                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link to="/product">PRODUCT</Link></div>
                                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link to="/cart">CART</Link></div>
                                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link to="/checkout">CHECKOUT</Link></div>
                                </div>
                            )}

                        </div>
                        <div className="relative">

                            <button onClick={() => setdown(!down)}>
                                <Link to="/blog">BLOG ▼</Link>
                            </button>

                            {down && (
                                <div  className="absolute left-0 top-full mt-2 w-44 bg-white text-gray-800 rounded shadow z-50">
                                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link to="/blog">BLOG</Link></div>
                                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link to="/blog_post">BLOG-POST</Link></div>
                                </div>
                            )}

                        </div>
                           <Link to="/contact">CONTACT</Link>

                    </div>

                    <div className="flex items-center gap-3 text-slate-700">
                        <button
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white  hover:border-slate-300 hover:text-slate-900"
                            aria-label="Search"
                        >
                            <FiSearch className="text-lg" />
                        </button>
                        <Link to="/register">
                            <button
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white  hover:border-slate-300 hover:text-slate-900"
                                aria-label="Account"
                            >
                                <FiUser className="text-lg" />
                            </button>
                        </Link>
                      <Link to="/cart">
                            <button
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white  hover:border-slate-300 hover:text-slate-900"
                                aria-label="Cart"
                            >
                                <FiShoppingBag className="text-lg" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header >
    );
}
