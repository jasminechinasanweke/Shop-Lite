import { FaTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <div>
            {/* {footer} */}
            <footer className="border-t border-gray-200 bg-white py-12">
                <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
                    <div>
                        <div className="mb-4 text-3xl font-light text-slate-800 uppercase">
                            SHOP<span className="font-medium">LITE</span>
                        </div>
                        <p className="max-w-xs text-sm text-gray-500">
                            Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.
                        </p>
                        <div className="mt-5 flex gap-3 text-gray-500">
                            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 hover:text-orange-500"><FaFacebookF className="text-sm" /></a>
                            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 hover:text-orange-500"><FaTwitter className="text-sm" /></a>
                            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 hover:text-orange-500"><FaPinterestP className="text-sm" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase text-slate-700">Quick Links</h4>
                        <ul className="space-y-3 text-sm uppercase text-gray-500">
                            <Link to="/"><li className="mb-2 hover:text-[#ff6543] hover:underline">Home</li></Link>
                            <Link to="/about"><li className="mb-2 hover:text-[#ff6543] hover:underline">About</li></Link>
                            <Link to="/shop"><li className="mb-2 hover:text-[#ff6543] hover:underline">Shop</li></Link>
                            <Link to="/blog"><li className="mb-2 hover:text-[#ff6543] hover:underline">Blogs</li></Link>
                            <Link to="/contact"><li className="mb-2 hover:text-[#ff6543] hover:underline">Contact</li></Link>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase text-slate-700">Help &amp; Info</h4>
                        <ul className="space-y-3 text-sm uppercase text-gray-500">
                            <li>Track your order</li>
                            <li>Returns policies</li>
                            <li>Shipping + delivery</li>
                       <Link to="/contact"><li className="mb-2 hover:text-[#ff6543] hover:underline">Contact</li></Link>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase text-slate-700 hover:text-[#ff6543]"><Link to="/contact">Contact us</Link></h4>
                        <p className="text-sm leading-7 text-gray-500">
                            Do you have any queries or suggestions?
                            <span className="mt-2 block text-gray-700">yourinfo@gmail.com</span>
                        </p>
                        <p className="mt-4 text-sm leading-7 text-gray-500">
                            If you need support? Just give us a call.
                            <span className="mt-2 block text-gray-700">+55 111 222 333 44</span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
