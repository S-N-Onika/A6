const Navbar = ({ data }) => {
    console.log(data);
    return (
        <div className="navbar content-center md:py-4 md:px-52 gap-45 bg-white border border-[#f2f2f2]">
            <div className="navbar-start">
                <div className="flex items-center gap-1 font-medium text-xl">
                    <div className="dropdown dropdown-start">
                        <div tabIndex={0} role="button" className="btn m-1 md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                        </div>
                        <ul tabIndex={0} className="menu dropdown-content bg rounded-box z-1  mt-3 p-2 shadow text-[#101727] w-52 text-xl">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <h2 className="text-3xl text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-3 font-black">DigiTools</h2>
                </div>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal gap-5 px-1 text-xl font-medium text-[#101727]">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                <span className="badge badge-sm indicator-item">0</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">0 Items</span>
                                <span className="text-info">Subtotal: $0</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-xs sm:btn-md md:btn-md lg:btn-lg xl:btn-xl font-medium text-[#101727] border-0">Login</button>
                <button className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-semibold py-2 px-4 rounded-full hover:scale-105 transition-transform text-nowrap
                ">Get Started</button>
            </div>
        </div>
    )
}
export default Navbar;