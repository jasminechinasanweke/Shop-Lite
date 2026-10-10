import React from "react";
import Nav from "../components/Nav";
import Down from "../components/Down";
import Footer from "../components/Footer";
import Laptop from "../assets/series_laptop.jpg"
import Iphone from "../assets/iphone 19.jpg"
import man from "../assets/man.jpg"
import girl from "../assets/girl.jpg"
import woman from "../assets/woman.jpg"


export default function Blog_post() {
    return (
        <div className="min-h-screen bg-[#ffffff] text-slate-800 mx-auto max-w-6xl">
            <Nav />

            {/* Content */}
            <div>
                <main className=" px-4 py-8">
                    <div>
                        <img src={Laptop} alt="series" className=" h-[818px] w-[1,560px] object-cover" />
                    </div>
                </main>
                {/* time and text */}
                <section className="">
                    <p className="text-sm font-light text-[#ff6543]">feb 22, 2023  -  technology</p>
                    <h2 className="text-4xl font-light text-[#272727]">5 Must-Have Gadgets for the Modern Home</h2>
                </section>
                {/* text and image */}
                <section className=" mt-7">
                    <p className="font-light text-sm text-[#272727]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur facilisis vivamus massa magna. Blandit mauris libero condimentum commodo morbi consectetur sociis convallis sit. Magna diam amet justo sed vel dolor et volutpat integer. Iaculis sit sapien hac odio elementum egestas neque. Adipiscing purus euismod orci sem amet, et. Turpis erat ornare nisi laoreet est euismod.</p>
                    <p className="font-light text-sm text-[#272727] mt-2">
                        Sit suscipit tortor turpis sed fringilla lectus facilisis amet. Ipsum, amet dolor curabitur non aliquet orci urna volutpat. Id aliquam neque, ut vivamus sit imperdiet enim, lacus, vel. Morbi arcu amet, nulla fermentum vitae mattis arcu mi convallis. Urna in sollicitudin in vestibulum erat. Turpis faucibus augue ipsum, at aliquam. Cras sagittis tellus nunc integer vitae neque bibendum eget. Tempus malesuada et pellentesque maecenas. Sociis porttitor elit tincidunt tellus sit ornare. Purus ut quis sed venenatis eget ut ipsum, enim lacus. Praesent imperdiet vitae eu, eu tincidunt nunc integer sit.
                    </p>
                    <h2 className="font-light text-3xl text-[#272727] mt-2">“Sit suscipit tortor turpis sed fringilla lectus facilisis amet. Ipsum, amet dolor curabitur non aliquet orci urna volutpat. Id aliquam neque, ut vivamus sit imperdiet enim, lacus, vel. “</h2>
                    <h3 className="font-light text-xl text-[#272727] mt-2 uppercase">Is this great ?</h3>
                    <ul className="font-light text-sm text-[#272727] mt-2">
                        <li>Blandit mauris libero condimentum commodo sociis convallis sit.</li>
                        <li>Magna diam amet justo sed vel dolor et volutpat integer.</li>
                        <li>Laculis sit sapien hac odio elementum egestas neque.</li>
                    </ul>

                    <p className="font-light text-sm text-[#272727] mt-2">Morbi arcu amet, nulla fermentum vitae mattis arcu mi convallis. Urna in sollicitudin in vestibulum erat. Turpis faucibus augue ipsum, at aliquam. Cras sagittis tellus nunc integer vitae neque bibendum eget. Tempus malesuada et pellentesque maecenas. Sociis porttitor elit tincidunt tellus sit ornare. Purus ut ipsum, enim lacus.
                        Tortor diam dignissim amet, in interdum aliquet. Magnis dictum et eros purus fermentum, massa ullamcorper sit sollicitudin. Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam nec, rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non viverra donec pellentesque. Odio mi consequat libero dolor. Porta ut diam lobortis eget leo, lectus. Nunc tempus feugiat massa laoreet ultrices diam magna quam. Congue auctor auctor luctus neque. Enim lorem ultrices diam donec. Sed id placerat consectetur faucibus.</p>
                    <p className="font-light text-sm text-[#272727] mt-2"> diam dignissim amet, in interdum aliquet. Magnis dictum et eros purus fermentum, massa ullamcorper sit sollicitudin. Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam nec, rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non viverra donec pellentesque. Odio mi consequat libero dolor. Porta ut diam lobortis eget leo, lectus. Nunc tempus feugiat massa laoreet ultrices diam magna  Congue auctor auctor luctus neque. Enim lorem ultrices diam donec. Sed id placerat consectetur faucibus</p>
                </section>
                {/* text and image 2 */}
                <section className=" mt-6">
                    <div className="flex gap-5">
                        <div className="">
                            <img src={Iphone} alt="iphone 19.jpg" className="w-[700px] rounded-lg" />
                        </div>
                        <div className="">
                            <h2 className="font-light text-xl text-[#272727] mt-2 uppercase">Velit, praesent pharetra malesuada </h2>
                            <p className="font-light text-sm text-[#272727] mt-2">Id pulvinar amet. Consequat potenti mollis massa iaculis et, dolor, eget lectus. Aliquam pellentesque molestie felis fames sed eget non euismod eget. Et eget ullamcorper urna, elit ac diam tellus viverra lacus. Cras sagittis tellus nunc integer vitae neque bibendum eget. Tempus malesuada et pellentesque maecenas.</p>
                            <p className="font-light text-sm text-[#272727] mt-2">Tortor diam dignissim amet, in interdum aliquet. Magnis dictum et eros purus fermentum, massa ullamcorper sit sollicitudin. Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam nec, rutrum a diam lacus, nunc integer etiam.</p>
                        </div>

                    </div>
                    <h2 className="font-light text-sm text-[#272727] mt-2">Velit, praesent pharetra malesuada id pulvinar amet. Consequat potenti mollis massa iaculis et, dolor, eget lectus. Aliquam pellentesque molestie felis fames sed eget non euismod eget. Et eget ullamcorper urna, elit ac diam tellus viverra lacus.</h2>
                    <h2 className="font-light text-sm text-[#272727] mt-2">Tortor diam dignissim amet, in interdum aliquet. Magnis dictum et eros purus fermentum, massa ullamcorper sit sollicitudin. Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam nec, rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non viverra donec pellentesque. Odio mi consequat libero dolor. Porta ut diam lobortis eget leo, lectus.</h2>
                </section>
                {/* Comment */}
                <section>
                    <h2 className="uppercase font-light text-2xl text-[#272727] mt-6">3 Comments</h2>
                    <div className="flex gap-5">
                        <div className="mt-7">
                            <img src={man} alt="iphone 19.jpg" className="w-[110px] h-20 rounded-sm" />
                        </div>
                        <div className="">
                            <h2 className="font-semibold text-sm text-[#272727] mt-7">Sam smith  Jul 10</h2>
                            <h3 className="font-light text-sm text-[#272727] mt-1">Mattis pulvinar non viverra donec pellentesque. Odio mi consequat libero dolor. Porta ut diam lobortis eget leo, lectus. Tortor diam dignissim amet, in interdum aliquet. Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam nec, rutrum a diam lacus, nunc integer etiam. </h3>
                            <p className="font-light text-sm text-[#ff6543] mt-1">Reply Now</p>
                        </div>
                    </div>
                    <div className="flex gap-5 mx-auto w-[85%]">
                        <div className="mt-7">
                            <img src={girl} alt="bad girl" className="w-[110px] h-20 rounded-sm" />
                        </div>
                        <div className="">
                            <h2 className="font-semibold text-sm text-[#272727] mt-7">Santie mary Jul 10</h2>
                            <h3 className="font-light text-sm text-[#272727] mt-1">Mattis pulvinar non viverra donec pellentesque. Odio mi consequat libero dolor. Porta ut diam lobortis eget leo, lectus. Tortor diam dignissim amet, in interdum aliquet. Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam nec, rutrum a diam lacus, nunc integer etiam. </h3>
                            <p className="font-light text-sm text-[#ff6543] mt-1">Reply Now</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="mt-7">
                            <img src={woman} alt="bad girl" className="w-[110px] h-20 rounded-sm" />
                        </div>
                        <div className="">
                            <h2 className="font-semibold text-sm text-[#272727] mt-7">Analisa nora  Jul 10</h2>
                            <h3 className="font-light text-sm text-[#272727] mt-1">Mattis pulvinar non viverra donec pellentesque. Odio mi consequat libero dolor. Porta ut diam lobortis eget leo, lectus. Tortor diam dignissim amet, in interdum aliquet. Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam nec, rutrum a diam lacus, nunc integer etiam. </h3>
                            <p className="font-light text-sm text-[#ff6543] mt-1">Reply Now</p>
                        </div>
                    </div>
                </section>
                {/* Leave a comment */}
                <section>
                    <h2 className="uppercase font-light text-2xl text-[#272727] mt-6">Leave a Comments</h2>
                    <div>
                        <h2 className="font-light text-sm text-[#272727] mt-1">Your email address will not be published. Required fields are marked *</h2>

                        <label className="block text-sm text-slate-600 mt-2">
                            <input
                                type="text"
                                placeholder="Write your comment here * *"
                                className="w-full rounded-md border border-[#d9d9d9] bg-white px-3 py-3 text-sm text-slate-700 outline-none "
                            />
                        </label>
                        <div className="grid grid-cols-2 gap-5">
                            <label className="block text-sm text-slate-600 mt-2">
                                <input
                                    type="text"
                                    placeholder="Write your name here *"
                                    className="w-full rounded-md border border-[#d9d9d9] bg-white px-3 py-3 text-sm text-slate-700 outline-none "
                                />
                            </label>
                            <label className="block text-sm text-slate-600 mt-2">
                                <input
                                    type="text"
                                    placeholder="Write your email here * *"
                                    className="w-full rounded-md border border-[#d9d9d9] bg-white px-3 py-3 text-sm text-slate-700 outline-none "
                                />
                            </label>
                        </div>
                        <label className="flex items-center gap-3 text-[13px] text-slate-600 mt-3">
                            <input type="radio" name="payment" className="h-4 w-4 text-[#eeeeee]" />
                            <span>Save my name, email, and website in this browser for the next time.</span>
                        </label>
                        <button className="mt-8 rounded-full bg-[#ff6543] px-6 py-3 text-[11px] font-semibold uppercase  text-[#eeeeee]  hover:bg-[#ea633d]">Post comment</button>

                    </div>
                </section>
            </div>
            <Down />
            <Footer />

        </div >
    );
}
