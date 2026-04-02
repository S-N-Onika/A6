const Footer = () => {
    return (
        <footer className="bg-[#0b1120] text-white pb-10 pt-30 px-6 md:px-20 lg:px-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20 text-center md:text-left">
                <div className="lg:col-span-2 space-y-6 flex flex-col items-center md:items-start">
                    <h2 className="text-4xl font-black">DigiTools</h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with our suite of powerful tools.
                    </p>
                </div>

                <div className="flex flex-col gap-6 items-center md:items-start">
                    <h3 className="text-xl font-bold">Product</h3>
                    <ul className="space-y-4 text-gray-400 text-lg">
                        <li className="hover:text-white cursor-pointer">Features</li>
                        <li className="hover:text-white cursor-pointer">Pricing</li>
                        <li className="hover:text-white cursor-pointer">Templates</li>
                        <li className="hover:text-white cursor-pointer">Integrations</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6 items-center md:items-start">
                    <h3 className="text-xl font-bold">Company</h3>
                    <ul className="space-y-4 text-gray-400 text-lg">
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Blog</li>
                        <li className="hover:text-white cursor-pointer">Careers</li>
                        <li className="hover:text-white cursor-pointer">Press</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6 items-center md:items-start">
                    <h3 className="text-xl font-bold">Resources</h3>
                    <ul className="space-y-4 text-gray-400 text-lg">
                        <li className="hover:text-white cursor-pointer">Documentation</li>
                        <li className="hover:text-white cursor-pointer">Help Center</li>
                        <li className="hover:text-white cursor-pointer">Community</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6 items-center md:items-start">
                    <h3 className="text-xl font-bold">Social Links</h3>
                    <div className="flex gap-3">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80">
                            <img src="./assets/instagram.png" alt="" />
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80">
                            <img src="./assets/facebook.png" alt="" />
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80">
                            <img src="./assets/Twitter.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-gray-700 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
                <p className="text-gray-500 text-lg">© 2026 Digitools. All rights reserved.</p>

                <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-gray-500 text-lg list-none items-center">
                    <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                    <li className="hover:text-white cursor-pointer">Terms of Service</li>
                    <li className="hover:text-white cursor-pointer">Cookies</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
