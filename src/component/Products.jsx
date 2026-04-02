import { use } from "react";
import { toast } from "react-toastify";

const tagDesign = {
    "New": { bg: "bg-green-100", text: "text-green-700" },
    "Best Seller": { bg: "bg-yellow-100", text: "text-yellow-700" },
    "Popular": { bg: "bg-purple-100", text: "text-purple-700" },
};

const Products = ({ apiData, cart, setCart, showCart, setShowCart }) => {
    const data = use(apiData) || [];
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleCart = (item) => {
        const inCart = cart.some(i => i.id === item.id);
        if (inCart) {
            setCart(prev => prev.filter(i => i.id !== item.id));
            toast.error("Item removed from cart");
        }
        else {
            setCart(prev => [...prev, item]);
            toast.success("Item added to cart");
        }
    };

    const handleCheckout = () => {
        setCart([]);
        toast.info("You are ready to check out");
    };

    let content;
    if (!showCart) {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {data.map((item) => {
                    const design = tagDesign[item.tag] || { bg: "bg-gray-100", text: "text-gray-700" };
                    const inCart = cart.some(i => i.id === item.id);
                    return (
                        <div key={item.id} className="w-full flex flex-col justify-between space-y-4 border border-gray-200 rounded-3xl p-10">
                            <div className="flex justify-between items-center">
                                <img className="border border-gray-200 p-4 rounded-full w-20 h-20 object-contain" src={item.image} alt="" />
                                <h3 className={`px-4 py-2 rounded-full text-sm font-semibold ${design.bg} ${design.text}`}>
                                    {item.tag}
                                </h3>
                            </div>
                            <div>
                                <h3 className="text-[#101727] text-3xl font-bold">{item.name}</h3>
                                <p className="pt-4 text-[#627382]">{item.description}</p>
                                <div className="pt-4">
                                    <span className="text-2xl font-black">${item.price}</span>
                                    <span className="text-[#627382]">/{item.period}</span>
                                </div>
                            </div>
                            <div className="text-[#627382] space-y-2">
                                {item.features?.map((feature, i) => (
                                    <p key={i}><span className="text-green-500 font-bold pr-2">✔</span> {feature}</p>
                                ))}
                            </div>
                            <button
                                onClick={() => handleCart(item)}
                                className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-semibold rounded-full hover:scale-105 transition-transform w-full py-4"
                            >
                                {inCart ? "Remove from Cart" : "Add to Cart"}
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    }
    else{
        content = (
            <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-bold mb-6">Your Cart</h3>
                <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm min-h-100 flex flex-col justify-center">
                    {cart.length > 0 ? (
                        <>
                            <div className="space-y-4 mb-8">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl bg-gray-50">
                                        <div className="flex items-center gap-4">
                                            <img src={item.image} className="w-12 h-12 object-contain" alt="" />
                                            <div>
                                                <h4 className="font-bold text-gray-900">{item.name}</h4>
                                                <p className="text-gray-500 text-sm">${item.price}</p>
                                            </div>
                                        </div>
                                        <button onClick={() => handleCart(item)} className="text-red-500 font-bold text-sm hover:scale-125 transition-transform">
                                            remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between items-center py-4 border-t border-gray-100">
                                <span className="text-gray-400 text-lg">Total:</span>
                                <span className="text-3xl font-black">${totalPrice}</span>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className="w-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white py-4 rounded-2xl font-bold text-xl hover:opacity-90 transition-opacity mt-4 shadow-lg shadow-purple-200"
                            >
                                Proceed to Checkout
                            </button>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center space-y-4">
                            <svg className="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0zM12 11l-3-3m3 3l3-3m-3 3v-6" />
                            </svg>
                            <p className="text-gray-400 text-lg">Your cart is empty!</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="mx-4 md:mx-20 lg:mx-46 space-y-10 mb-30 mt-30">
            <div className="grid grid-cols-1 justify-center contain-center text-center gap-6">
                <h2 className="font-extrabold text-5xl">Premium Digital Tools</h2>
                <p className="text-[#627382FF]">
                    Choose from our curated collection of premium digital products designed <br />
                    to boost your productivity and creativity.
                </p>
            </div>

            <div className="flex justify-center gap-4">
                <div className="bg-gray-100 p-1 rounded-full flex gap-2">
                    <button
                        onClick={() => setShowCart(false)}
                        className={`${!showCart ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : "text-gray-500"} font-semibold px-6 py-2 rounded-full transition-all`}
                    >
                        Products
                    </button>
                    <button
                        onClick={() => setShowCart(true)}
                        className={`${showCart ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : "text-gray-500"} font-semibold px-6 py-2 rounded-full transition-all`}
                    >
                        Cart ({cart.length})
                    </button>
                </div>
            </div>
            {content}
        </div>
    );
};

export default Products;
