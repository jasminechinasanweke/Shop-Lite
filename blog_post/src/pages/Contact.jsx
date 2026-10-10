import Nav from "../components/Nav";
import home from "../assets/home.jpg";
import Footer from "../components/Footer";
import Down from "../components/Down";



export default function Contact() {

    return (
        <div className="text-slate-700">
            <Nav />
            <main className="relative min-h-[281px] pt-20 mb-20">
                <div className="absolute inset-0 bg-[#f5f5f5]" />
                <div className="relative  p-12  text-center item-center justify-center ">
                    <h1 className="text-3xl text-[#272727]">CONTACT</h1>
                    <h1 className="text-lg  font-sm text-[#272727]">Home / <span className="border-b border-gray-500">Shop</span></h1>
                </div>
            </main>

            <section className="grid grid-cols-2 gap-10 mx-auto max-w-6xl">
                <div>
                    <h2 className="text-[20px] font-semibold uppercase">
                        Contact info
                    </h2>
                    <p className="text-sm font-light">Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p>
                    <div className="flex">
                        <div>
                            <p className="text-lg font-light uppercase mb-2 mt-2">office</p>
                            <p className="text-sm font-light mb-2 mt-2">730 Glenstone Ave 65802, Springfield, US</p>
                            <p className="text-sm font-light mb-2 mt-2">+123 222 333 44</p>
                            <p className="text-sm font-light mb-2 mt-2">info@yourinfo.com</p>
                        </div>
                        <div>
                            <p className="text-lg font-light uppercase mb-2 mt-2">manger</p>
                            <p className="text-sm font-light mb-2 mt-2">730 Glenstone Ave 65802, Springfield, US</p>
                            <p className="text-sm font-light mb-2 mt-2">+123 222 333 44</p>
                            <p className="text-sm font-light mb-2 mt-2">info@yourinfo.com</p>
                        </div>

                    </div>
                </div>
                <div>

                    <h2 className="text-[20px] font-semibold uppercase">
                        any questions?
                    </h2>
                    <p className="text-sm font-light">Use the form below to get in touch with us.</p>

                    <div className="grid grid-cols-2 gap-5">
                        <label className="block text-sm text-slate-600 mt-2">
                            <input
                                type="text"
                                placeholder="Write your  full name here *"
                                className="w-full rounded-md border border-[#dedede] bg-white px-3 py-3 text-sm text-slate-700 outline-none "
                            />
                        </label>
                        <label className="block text-sm text-slate-600 mt-2">
                            <input
                                type="text"
                                placeholder="Write your email here * *"
                                className="w-full rounded-md border border-[#dedede] bg-white px-3 py-3 text-sm text-slate-700 outline-none "
                            />
                        </label>
                    </div>
                    <label className="block text-sm text-slate-600 mt-2">
                        <input
                            type="text"
                            placeholder="Write your phone number here * *"
                            className="w-full rounded-md border border-[#dedede] bg-white px-3 py-3 text-sm text-slate-700 outline-none"
                        />
                    </label>
                    <label className="block text-sm text-slate-600 mt-2">
                        <input
                            type="text"
                            placeholder="Write your subject here * *"
                            className="w-full rounded-md border border-[#dedede] bg-white px-3 py-3 text-sm text-slate-700 outline-none "
                        />
                    </label>
                    <label className="block text-sm text-slate-600 mt-2">
                        <input
                            type="text"
                            placeholder="Write your message here * *"
                            className="w-full rounded-md border border-[#dedede] bg-white px-3 py-3 text-sm text-slate-700 outline-none "
                        />
                    </label>
                    <button className="mt-8 rounded-full bg-[#ff6543] px-6 py-3 text-[11px] font-semibold uppercase  text-[#eeeeee] hover:bg-[#ea633d]">Submit</button>
                </div>


            </section>

            <section className="w-full bg-[#f8f8f8] py-10">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-8">

                    {/* Product Image */}
                    <div className="w-1/2">
                        <img src={home} alt="Watch" className="h-[400px] w-auto object-contain" />
                    </div>

                    {/* Text */}
                    <div className="w-1/2 pl-10">
                        <div className="flex">
                            <div>
                                <p className="text-lg font-light uppercase mb-2 mt-2">office</p>
                                <p className="text-sm font-light mb-2 mt-2">730 Glenstone Ave 65802, Springfield, US</p>
                                <p className="text-sm font-light mb-2 mt-2">+123 222 333 44</p>
                                <p className="text-sm font-light mb-2 mt-2">info@yourinfo.com</p>
                            </div>
                            <div>
                                <p className="text-lg font-light uppercase mb-2 mt-2">manger</p>
                                <p className="text-sm font-light mb-2 mt-2">730 Glenstone Ave 65802, Springfield, US</p>
                                <p className="text-sm font-light mb-2 mt-2">+123 222 333 44</p>
                                <p className="text-sm font-light mb-2 mt-2">info@yourinfo.com</p>
                            </div>

                        </div>
                        <button className="mt-6 rounded-full bg-orange-500 px-7 py-3 text-xs uppercase text-white hover:bg-orange-600">
                            Shop Collection
                        </button>
                    </div>

                </div>
            </section>

            <Down />
            <Footer />
        </div>
    );
}
