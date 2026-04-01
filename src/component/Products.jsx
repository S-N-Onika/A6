import { use } from "react";

const tagDesign = {
    "New": { bg: "bg-green-100", text: "text-green-700" },
    "Best Seller": { bg: "bg-yellow-100", text: "text-yellow-700" },
    "Popular": { bg: "bg-purple-100", text: "text-purple-700" }
};

const Products = ({ apiData }) => {
    const data = use(apiData);
    console.log(data);
    return (
        <div className="mx-46 space-y-10 mb-30 mt-30">
            <div className="grid grid-cols-1 justify-center contain-center text-center gap-6">
                <h2 className="font-extrabold text-5xl">Premium Digital Tools</h2>
                <p className="text-[#627382FF]">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className="flex justify-center gap-4">
                    <button className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-semibold px-6 text-xl rounded-4xl hover:scale-105 transition-transform text-nowrap">Products</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-4xl hover:scale-105 transition-transform text-nowrap">Cart (0)</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {data.map((item) => {
                    const design = tagDesign[item.tag] || {};
                    return (
                        <div key={item.id} className="w-full space-y-4 border border-gray-200 rounded-3xl p-10">
                            <div className="flex justify-between">
                                <img className="border border-gray-200 p-4 rounded-full" src={item.image} alt={item.name} />
                                <div>
                                    <h3 className={`px-4 py-2 rounded-full text-sm font-semibold ${design.bg} ${design.text}`}
                                    >{item.tag}</h3>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[#101727] text-3xl font-bold">{item.name}</h3>
                                <p className="pt-4 text-[#627382]">{item.description}</p>
                                <h3 className="pt-4"><span className="text-2xl font-black">${item.price}</span><span className="text-[#627382]">/{item.period}</span></h3>
                            </div>
                            <div className="text-[#627382]">
                                {item.features.map(((feature, i) => (
                                    <p key={i}><span className="text-green-500 font-bold pr-2">✔</span> {feature}</p>
                                )))}
                            </div>
                            <button className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-semibold rounded-4xl hover:scale-105 transition-transform text-nowrap w-full py-4">Buy Now</button>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    );
};

export default Products;