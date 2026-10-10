import image2 from "../assets/phone.jpg";
import image3 from "../assets/phoneone.png";
import image5 from "../assets/watch.png";
import image7 from "../assets/earbuds.png";
import image8 from "../assets/laptop.png";
import image12 from "../assets/tv.png";


const reviews = [
    {
        text: "I stumbled upon this tech store while searching for a new laptop, and I couldn't be happier with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommend!",
        name: "Emma Chamberlin",
    },
    {
        text: "This tech store is my go-to for all things tech! Whether it's a new smartphone, accessories, or even troubleshooting advice, they've always got me covered. The staff is friendly, and their expertise is unmatched. Trust me; you won't regret shopping here!",
        name: "Thomas John",
    },
    {
        text: "I recently purchased a smartwatch from this tech store, and I'm absolutely thrilled with my purchase! Not only did they have an extensive selection to choose from, but their team helped me find the perfect fit for my lifestyle.",
        name: "Kevin Bryan",
    },
];

 export default function Down (){
        const phoneImage = image2
        const phoneoneImage = image3
        const watchImage = image5
        const earbudsImage = image7
        const laptopImage = image8
        const tvImage = image12
    return(
        <div>
             {/* custormer reviews */}

            <section className="mx-auto max-w-7xl px-6 py-10">

                {/* Heading */}
                <div className="mb-5 flex items-center gap-3">
                    <h2 className="text-sm uppercase text-gray-600">
                        Customers Reviews
                    </h2>

                    <div className="flex-1 border-t border-dashed border-gray-200"></div>
                </div>

                {/* Reviews */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="rounded-md border border-gray-200 p-5"
                        >

                            <p className="text-xs text-gray-600">
                                "{review.text}"
                            </p>

                            {/* Stars */}
                            <div className="mt-4 flex gap-1 text-orange-500">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>

                            <p className="mt-1 text-xs text-gray-700">
                                {review.name}
                            </p>

                        </div>
                    ))}

                </div>

            </section>

            {/* {latest Post} */}
            <section className="bg-white py-12 mb-5">
                <div className="mx-auto w-[90%] px-6 ">
                    {/* Heading */}
                    <div className="mb-5 flex items-center gap-3">
                        <h2 className="text-sm uppercase  text-gray-600">
                            latest post
                        </h2>

                        <div className="flex-1 border-t border-dashed border-gray-200"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
                        <div className="overflow-hidden rounded-md bg-gray-50 max-h-100">
                            <button className="p-1 text-sm font-sm  text-[#ffffff] bg-[#ff6543] uppercase">Gadgets</button>
                            <img src={laptopImage} alt="Instagram post" className=" w-full object-cover" />
                            <h2 className="font-sm text-lg uppercase text-[#272727] mb-2">5 Must-Have Gadgets for the Modern Home</h2>
                            <h2 className="font-sm text-sm text-[#272727]">Dive into the world of cutting-edge technology with our latest blog post.</h2>
                            <button className="text-gray-400 underline">
                                Read More
                            </button>
                        </div>
                        <div className="overflow-hidden rounded-md bg-gray-50 max-h-100">
                            <button className="p-1 text-sm font-sm  text-[#ffffff] bg-[#ff6543] uppercase">Phones</button>
                            <img src={phoneImage} alt="Instagram post" className="w-full object-cover" />
                            <h2 className="font-sm text-lg uppercase text-[#272727] mb-2">Eco-Friendly Innovations Making a Difference</h2>
                            <h2 className="font-sm text-sm text-[#272727]">Dive into the world of cutting-edge technology with our latest blog post.</h2>
                            <button className="text-gray-400 underline">
                                Read More
                            </button>
                        </div>
                        <div className="overflow-hidden rounded-md bg-gray-50 max-h-90">
                            <button className="p-1 text-sm font-sm  text-[#ffffff] bg-[#ff6543] uppercase">Tech</button>
                            <img src={tvImage} alt="Instagram post" className="h-52 w-full object-cover" />
                            <h2 className="font-sm text-lg uppercase text-[#272727] mb-2">The Future of Wearable Tech: Trends to Watch</h2>
                            <h2 className="font-sm text-sm text-[#272727]">Dive into the world of cutting-edge technology with our latest blog post.</h2>
                            <button className="text-gray-400 underline">
                                Read More
                            </button>
                        </div>
                        <div className="overflow-hidden rounded-md bg-gray-50 max-h-90">
                            <button className="p-1 text-sm font-sm  text-[#ffffff] bg-[#ff6543] uppercase">Digital Watch</button>
                            <img src={watchImage} alt="Instagram post" className="h-52 w-full object-cover" />
                            <h2 className="font-sm text-lg uppercase text-[#272727] mb-2">Top Apps and Tools for Remote Work</h2>
                            <h2 className="font-sm text-sm text-[#272727]">Dive into the world of cutting-edge technology with our latest blog post.</h2>
                            <button className="text-gray-400 underline">
                                Read More
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            <section className="border-t border-b border-gray-200 bg-white py-6">
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center text-2xl font-light text-gray-300 md:grid-cols-5">
                    <div className="text-left md:text-center text-gray-400">TECHLIGHT</div>
                    <div className="text-left md:text-center text-gray-400">MiniStore.</div>
                    <div className="text-left md:text-center text-gray-400">ULTRAS</div>
                    <div className="text-left md:text-center text-gray-400">SWANKY</div>
                    <div className="text-left md:text-center text-gray-400">EMILY</div>
                </div>
            </section>
            <div>
                <section className="bg-white py-12">
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <h3 className="mb-8 text-center text-lg font-medium text-slate-700 uppercase">
                            Instagram #Shoplite
                        </h3>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-5">
                            <div className="overflow-hidden rounded-md bg-gray-100">
                                <img src={laptopImage} alt="Instagram post" className="h-52 w-full object-cover" />
                            </div>
                            <div className="overflow-hidden rounded-md bg-gray-100">
                                <img src={watchImage} alt="Instagram post" className="h-52 w-full object-cover" />
                            </div>
                            <div className="overflow-hidden rounded-md bg-gray-100">
                                <img src={earbudsImage} alt="Instagram post" className="h-52 w-full object-cover" />
                            </div>
                            <div className="overflow-hidden rounded-md bg-gray-100">
                                <img src={phoneoneImage} alt="Instagram post" className="h-52 w-full object-cover" />
                            </div>
                            <div className="overflow-hidden rounded-md bg-gray-100">
                                <img src={laptopImage} alt="Instagram post" className="h-52 w-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
 }