import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Down from "../components/Down";




export default function Checkout() {
  
    return (
        <div className="min-h-screen bg-[#fffff] text-slate-800">
            <Nav />

            <main className="mx-auto max-w-[1200px] px-4 py-10 md:py-14">
                <div className="grid gap-10 ">
                    <section className="space-y-5">
                        <div className="grid grid-cols-2">
                            <h2 className="text-[13px] font-semibold uppercase text-slate-700">
                                Billing Details
                            </h2>
                            <h2 className="text-[13px] font-semibold uppercase text-slate-700">
                                Additional Information
                            </h2>
                        </div>


                        <div className=" grid gap-4 sm:grid-cols-2">
                            <label className="block text-sm text-slate-600">
                                <span className="mb-2 block text-[12px] font-medium text-slate-500">First name *</span>
                                <input
                                    type="text"
                                    className="w-full rounded-md border border-[#d9d9d9] bg-white px-3 py-3 text-sm text-slate-700 outline-none "
                                />
                            </label>
                            <label className="block text-sm text-slate-600">
                                <span className="mb-2 block text-[12px] font-medium text-slate-500">Order notes (optional) *</span>
                                <input
                                    type="text"
                                    placeholder="Notes about your order. Like special notes for delivery."
                                    className="w-full rounded-md border border-[#d9d9d9] bg-white px-3 py-3 text-sm text-slate-700 outline-none "
                                />
                            </label>
                        </div>
                        <div>
                            <label className="block text-sm text-slate-600">
                                <span className="mb-2 block text-[12px] font-medium text-slate-500">Last name *</span>
                                <input
                                    type="text"
                                    className=" w-[50%] rounded-md border border-[#d9d9d9] bg-white px-3 py-3 text-sm text-slate-700 outline-none "
                                />
                            </label>
                        </div>

                        <label className="block text-sm text-slate-600">
                            <span className="mb-2 block text-[12px] font-medium text-slate-500">Company name (optional)</span>
                            <input
                                type="text"
                                className=" w-[50%] rounded-md border border-[#d9d9d9] bg-white px-3 py-3 text-sm text-slate-700 outline-none "
                            />
                        </label>

                        <label className="block text-sm text-slate-600">
                            <span className="mb-2 block text-[12px] font-medium text-slate-500">Country / Region *</span>
                            <input
                                type="text"
                                value="United States (US)"
                                readOnly
                                className=" w-[50%] rounded-md border border-[#d9d9d9] bg-white px-3 py-3 text-sm text-slate-700 outline-none"
                            />
                        </label>

                        <label className="block text-sm text-slate-600">
                            <span className="mb-2 block text-[12px] font-medium text-slate-500">Street address *</span>
                            <input
                                type="text"
                                placeholder="House number and street name"
                                className=" w-[50%] rounded-md border border-[#d9d9d9] bg-white px-3 py-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none "
                            />
                        </label>

                        <label className="block text-sm text-slate-600">
                            <input
                                type="text"
                                placeholder="Apartment, suite, etc."
                                className=" w-[50%] rounded-md border border-[#d9d9d9] bg-white px-3 py-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none "
                            />
                        </label>

                        <label className="block text-sm text-slate-600">
                            <span className="mb-2 block text-[12px] font-medium text-slate-500">Town / City *</span>
                            <input
                                type="text"
                                className=" w-[50%] rounded-md border border-[#d9d9d9] bg-white px-3 py-3 text-sm text-slate-700 outline-none "
                            />
                        </label>

                        <label className="block text-sm text-slate-600">
                            <span className="mb-2 block text-[12px] font-medium text-slate-500">State *</span>
                            <input
                                type="text"
                                value="Florida"
                                readOnly
                                className=" w-[50%] rounded-md border border-[#d9d9d9] bg-white px-3 py-3 text-sm text-slate-700 outline-none"
                            />
                        </label>
                        <label className="block text-sm text-slate-600">
                            <span className="mb-2 block text-[12px] font-medium text-slate-500">Zip Code *</span>
                            <input
                                type="text"
                                className=" w-[50%] rounded-md border border-[#d9d9d9] bg-white px-3 py-3 text-sm text-slate-700 outline-none"
                            />
                        </label>
                        <label className="block text-sm text-slate-600">
                            <span className="mb-2 block text-[12px] font-medium text-slate-500">Phone *</span>
                            <input
                                type="text"
                                className=" w-[50%] rounded-md border border-[#d9d9d9] bg-white px-3 py-3 text-sm text-slate-700 outline-none "
                            />
                        </label>
                        <label className="block text-sm text-slate-600">
                            <span className="mb-2 block text-[12px] font-medium text-slate-500">Email address *</span>
                            <input
                                type="email"
                                className=" w-[50%] rounded-md border border-[#d9d9d9] bg-white px-3 py-3 text-sm text-slate-700 outline-none"
                            />
                        </label>
                    </section>

                </div>
            </main>

            <section className="mx-auto max-w-[1200px] px-4 py-10 md:py-14">
                <aside className="max-w-md">
                    <h2 className="text-[13px] font-semibold uppercase  text-slate-700">
                        Cart Totals
                    </h2>

                    <div className="mt-6 space-y-4 border-b border-dashed border-slate-200 pb-6">
                        <div className="flex justify-between text-[12px] uppercase text-slate-500">
                            <span>Subtotal</span>
                            <span className="text-[#ff6543]">$2400.00</span>
                        </div>
                        <div className="flex justify-between text-[12px] uppercase  text-slate-500">
                            <span>Total</span>
                            <span className="text-[#ff6543]">$2400.00</span>
                        </div>
                    </div>

                    <div className="mt-6 space-y-3">
                        <label className="flex items-center gap-3 text-[13px] text-slate-600">
                            <input type="radio" name="payment" defaultChecked className="h-4 w-4 bg-[#ff6543]" />
                            <span>Direct bank transfer</span>
                        </label>
                        <label className="flex items-center gap-3 text-[13px] text-slate-600">
                            <input type="radio" name="payment" className="h-4 w-4" />
                            <span>Check payments</span>
                        </label>
                        <label className="flex items-center gap-3 text-[13px] text-slate-600">
                            <input type="radio" name="payment" className="h-4 w-4" />
                            <span>Cash on delivery</span>
                        </label>
                        <label className="flex items-center gap-3 text-[13px] text-slate-600">
                            <input type="radio" name="payment" className="h-4 w-4" />
                            <span>PayPal</span>
                        </label>
                    </div>

                    <button className="mt-8 rounded-full bg-[#ff6543] px-6 py-3 text-[11px] font-semibold uppercase text-white hover:bg-[#ea633d]">
                        Place an order
                    </button>
                </aside>
            </section>

            <Down />
            {/* {footer} */}
            <Footer />
        </div>
    );
}
