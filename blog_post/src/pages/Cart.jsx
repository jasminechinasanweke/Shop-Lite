import React, { useState, useEffect } from "react";
import { FiMinus, FiPlus,FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Down from "../components/Down";


function parsePrice(value) {
    if (typeof value === "number") return value;
    return Number(String(value ?? "").replace(/[^0-9.]/g, "")) || 0;
}

export default function Cart() {
    const [cart, setCart] = useState(() => {
        try {
            const saved = JSON.parse(localStorage.getItem("buyCart")) || [];
            return saved
                .filter((item) => item.source === "api")
                .map((item) => ({
                    ...item,
                    price: parsePrice(item.price),
                    qty: Number(item.qty) || 1,
                }));
        } catch (err) {
            console.error("Failed to parse cart:", err);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("buyCart", JSON.stringify(cart));
    }, [cart]);

    const subtotal = cart.reduce(
        (sum, item) => sum + Number(item.price) * Number(item.qty),
        0
    );

    function increase(product_id) {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.product_id === product_id
                    ? { ...item, qty: Number(item.qty) + 1 }
                    : item
            )
        );
    }

    function decrease(product_id) {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.product_id === product_id
                    ? { ...item, qty: Math.max(1, Number(item.qty) - 1) }
                    : item
            )
        );
    }

    // New Delete Function
    function deleteItem(product_id) {
        setCart((prevCart) => prevCart.filter((item) => item.product_id !== product_id));
    }
    return (
        <div className="min-h-screen text-slate-800">
            <Nav />

            <main className="mx-auto max-w-[1200px] px-4 py-10 md:py-16">
                <div className="space-y-8">
                    <div className="grid gap-4 border-b border-dashed border-slate-200 pb-5 md:grid-cols-[1.4fr_1fr_0.5fr]">
                        <div className="text-[11px] font-semibold uppercase  text-slate-500">Product</div>
                        <div className="text-[11px] font-semibold uppercase  text-slate-500">Quantity</div>
                        <div className="text-right text-[11px] font-semibold uppercase  text-slate-500">Subtotal</div>
                    </div>

                    {cart.map((item) => (
                        <div
                            key={item.product_id}
                            className="grid items-center gap-4 border-b border-dashed border-slate-200 pb-6 md:grid-cols-[1.4fr_1fr_0.5fr_0.5fr]"
                        >
                            <div className="flex items-center gap-5">
                                <div className="flex h-24 w-24 items-center justify-center rounded-md border border-slate-200 bg-[#f1f1f1] p-3">
                                    <img src={item.image} alt={item.name} className="h-full w-full object-contain" />
                                </div>
                                <div>
                                    <div className="text-xl font-light text-slate-700">{item.name}</div>
                                    <div className="mt-2 text-base text-[#ff6f4a]">${Number(item.price)}.00</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-start">
                                <div className="inline-flex items-center rounded-md border border-slate-200 bg-white">
                                    <button type="button" onClick={() => decrease(item.product_id)} className="flex h-10 w-10 items-center justify-center text-slate-600 hover:bg-slate-50">
                                        <FiMinus className="text-sm" />
                                    </button>
                                    <span className="w-8 text-center text-lg text-slate-700">{item.qty}</span>
                                    <button type="button" onClick={() => increase(item.product_id)} className="flex h-10 w-10 items-center justify-center text-slate-600 hover:bg-slate-50">
                                        <FiPlus className="text-sm" />
                                    </button>
                                </div>
                            </div>

                            <div className="text-right text-2xl font-medium text-[#ff6f4a]">
                                ${(Number(item.price) * Number(item.qty))}.00
                            </div>
                            {/* Delete Button */}
                            <div className="justifyself-end flex">
                                <button
                                    type="button"
                                    onClick={() => deleteItem(item.product_id)}
                                    className="h-10 w-10 text-red-400 hover:text-red-500 "
                                    title="Remove item"
                                >
                                    <FiTrash2 className="text-xl" />
                                </button>
                            </div>

                        </div>
                    ))}

                    <div className="pt-4">
                        <div className="mb-5 text-[11px] font-semibold uppercase  text-slate-500">Cart Totals</div>

                        <div className="max-w-xl space-y-5 border-t border-dashed border-slate-200 pt-4">
                            <div className="flex items-center justify-between text-sm uppercase  text-slate-500">
                                <span>Subtotal</span>
                                <span className="text-slate-700">${subtotal}.00</span>
                            </div>
                            <div className="flex items-center justify-between border-t border-dashed border-slate-200 pt-4 text-sm uppercase  text-slate-500">
                                <span>Total</span>
                                <span className="text-slate-700">${subtotal}.00</span>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <button type="button" className="rounded-full bg-[#ff6f4a] px-6 py-3 text-[11px] font-semibold uppercase  text-white hover:bg-[#ea633d]">
                                Update cart
                            </button>
                            <Link to="/shop">
                                <button type="button" className="rounded-full bg-[#1f1f1f] px-6 py-3 text-[11px] font-semibold uppercase  text-white hover:bg-[#000]">
                                    Continue shopping
                                </button>
                            </Link>
                            <Link to="/checkout">
                                <button type="button" className="rounded-full bg-[#ff6f4a] px-6 py-3 text-[11px] font-semibold uppercase  text-white hover:bg-[#ea633d]">
                                    Proceed to checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Down />
            <Footer />
        </div>
    );
}