const Navbar = ({ cart }) => {
    const cartItems = cart || [];

    return (
        <div className="navbar bg-white border-b border-[#f2f2f2] px-4 md:px-10 lg:px-50 justify-between">
            <div className="navbar-start w-auto">
                <div className="flex items-center gap-1 font-medium">
                    <div className="dropdown dropdown-start">
                        <div tabIndex={0} role="button" className="btn btn-ghost p-1 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-lg dropdown-content bg-white rounded-box mt-3 w-52  p-2 shadow text-[#101727] text-4xl font-semibold">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <h2 className="text-3xl md:text-4xl text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-3 font-black">DigiTools</h2>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2 px-1 text-2xl font-medium text-[#101727]">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-2 md:gap-5 w-auto">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <img width="22" src="./assets/products/shopping-cart.png" alt="Cart" />
                            <span className="badge badge-sm indicator-item bg-white text-black border-none">{cartItems.length}</span>
                        </div>
                    </div>
                </div>

                <button className="hidden sm:block font-medium text-[#101727]">Login</button>
                <button className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-semibold py-2 px-4 rounded-full hover:scale-105 transition-transform text-sm md:text-base whitespace-nowrap">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Navbar;
