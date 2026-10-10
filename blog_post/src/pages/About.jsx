import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import laptop from "../assets/laptop.png";
import watch from "../assets/watch.png";
import phone from "../assets/phone.jpg";
import Down from "../components/Down";

export default function About() {

    return (
        <div>
            <Nav />
            <main className="relative min-h-[281px] pt-20 mb-10">
                <div className="absolute inset-0 bg-[#f5f5f5]" />
                <div className="relative p-12 text-center item-center justify-center">
                    <h1 className="text-3xl text-[#272727]">ABOUT US</h1>
                    <h1 className="text-lg font-sm text-[#272727]">
                        Home / <span className="border-b border-gray-500">About us</span>
                    </h1>
                </div>
            </main>

            {/* How we work section */}

            <section className="py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                        <div className="flex items-start gap-3 px-2 md:px-4">
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

                        <div className="flex items-start gap-3 px-2 md:px-4">
                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff6543] shadow-[0_10px_20px_rgba(255,101,67,0.25)]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                                    <path d="M12 1 4 5v7c0 5.05 3.41 9.74 8 11 4.59-1.26 8-6.45 8-12V5l-8-4zm0 3.18 5 2.5v5.42c0 3.9-2.44 7.37-5 8.57-2.56-1.2-5-4.67-5-8.57V6.68l5-2.5zm-1 4.82h2v5h-2V9zm0 6h2v2h-2v-2z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <h3 className="mb-1 text-sm font-semibold uppercase  text-[#0f2542]">Quality guarantee</h3>
                                <p className="text-sm leading-6 text-gray-600">Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 px-2 md:px-4">
                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff6543] shadow-[0_10px_20px_rgba(255,101,67,0.25)]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                                    <path d="M18 6h-2.15a2.5 2.5 0 0 0-5.7 0H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6.5-2c.83 0 1.5.67 1.5 1.5S12.33 7 11.5 7 10 6.33 10 5.5 10.67 4 11.5 4zm6.5 16H6V8h12v12zm-2-7h-3v-3h-2v3H9v2h3v3h2v-3h3v-2z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <h3 className="mb-1 text-sm font-semibold uppercase  text-[#0f2542]">Daily offers</h3>
                                <p className="text-sm leading-6 text-gray-600">Amet consectetur adipi elit loreme ipsum dolor sit.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 px-2 md:px-4">
                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff6543] shadow-[0_10px_20px_rgba(255,101,67,0.25)]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 14.59-4.7-4.7 1.41-1.41L11 13.17l6.3-6.3 1.4 1.42z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <h3 className="mb-1 text-sm font-semibold uppercase  text-[#0f2542]">100% secure payment</h3>
                                <p className="text-sm leading-6 text-gray-600">Rem ipsum dolor sit amet, consectetur adipi elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-10 md:py-16">
                <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-2">
                    <div className="relative min-h-[420px] overflow-hidden rounded-sm bg-[#f3f3f3] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)]">
                        <div className="absolute left-0 top-7 h-[190px] w-[68%] rounded-[10px] border border-[#e7e7e7] bg-[#f8f8f8] shadow-[0_0_0_4px_rgba(255,255,255,0.8)]" />
                        <div className="absolute left-[9%] top-[12%] h-[148px] w-[52%] rounded-[8px] border border-[#ebebeb] bg-white opacity-90 shadow-[0_12px_30px_rgba(0,0,0,0.06)]" />
                        <div className="absolute left-[37%] top-[16%] flex h-[90px] w-[110px] items-center justify-center rounded-[18px] bg-[#f9f9f9] shadow-[0_12px_18px_rgba(0,0,0,0.08)]">
                            <img src={watch} alt="Watch" className="h-[70px] w-auto object-contain" />
                        </div>

                        <div className="absolute left-[18%] bottom-[15%] h-[130px] w-[220px] rounded-[24px] bg-[#f3f3f3] shadow-[0_9px_18px_rgba(0,0,0,0.08)]" />
                        <div className="absolute left-[23%] bottom-[18%] h-[92px] w-[92px] rounded-full border-[8px] border-[#f8f8f8] bg-black shadow-[0_8px_18px_rgba(0,0,0,0.12)]" />
                        <div className="absolute left-[34%] bottom-[18%] h-[88px] w-[88px] rounded-full border-[8px] border-[#f8f8f8] bg-[#0d0d0d] shadow-[0_8px_18px_rgba(0,0,0,0.12)]" />

                        <div className="absolute right-[8%] bottom-[10%] h-[220px] w-[230px] rounded-[18px] bg-[#f8f8f8] shadow-[0_12px_18px_rgba(0,0,0,0.06)]">
                            <img src={phone} alt="Phone" className="h-full w-full rounded-[18px] object-cover" />
                        </div>

                        <div className="absolute left-[18%] top-[22%] h-[90px] w-[110px] rounded-[8px] bg-white opacity-80 shadow-[0_10px_16px_rgba(0,0,0,0.04)]" />
                        <div className="absolute left-[10%] bottom-[5%] h-[120px] w-[180px] rounded-[14px] bg-[#efefef] shadow-[0_10px_18px_rgba(0,0,0,0.05)]" />
                        <div className="absolute left-[16%] bottom-[14%] h-[102px] w-[110px] rounded-[12px] bg-[#f9f9f9] shadow-[0_8px_14px_rgba(0,0,0,0.04)]">
                            <img src={laptop} alt="Laptop" className="h-full w-full object-contain" />
                        </div>

                        <div className="absolute left-[43%] top-[59%] flex h-[84px] w-[84px] items-center justify-center rounded-full border-[4px] border-white bg-[#f5f5f5] shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                            <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full border-2 border-[#0d0d0d] bg-white">
                                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#0d0d0d]">
                                    <path d="M8 5.5v13l10-6.5-10-6.5Z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-xl px-2">
                        <h2 className="text-sm font-medium uppercase text-slate-700">
                            Best Digital Store BasicStore
                        </h2>
                        <p className="mt-5 text-base leading-8 text-slate-600">
                            Risus augue curabitur dictum senectus congue velit et. Sed vitae metus nibh sit
                            erat. Nulla adipiscing pharetra pellentesque maecenas odio erat et. Etiam volutpat
                            amet duis erat volutpat vitae eget. Sed vitae metus nibh sit erat. Nulla
                            adipiscing pharetra pellentesque maecenas odio erat et. Etiam volutpat amet duis
                            erat volutpat vitae eget.
                        </p>
                        <p className="mt-4 text-base leading-8 text-slate-600">
                            Nulla adipiscing pharetra pellentesque maecenas odio erat et. Etiam volutpat amet
                            duis erat volutpat vitae eget. Quisque porttitor vel aliquam non maecenas interdum
                            eget. Risus augue curabitur dictum senectus congue velit et.
                        </p>

                        <button className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#f5663d] px-7 py-3 text-xs font-semibold uppercase  text-white shadow-[0_12px_24px_rgba(245,102,61,0.22)] hover:bg-[#e85d36]">
                            Go to shop
                        </button>
                    </div>
                </div>
            </section>

            <Down />
            {/* {footer} */}
            <Footer />

        </div>
    );
}
