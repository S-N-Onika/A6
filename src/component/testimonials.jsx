const testimonials = () => {
    return (
        <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-30 px-4 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-6">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Ready To Transform Your Workflow?
                </h2>

                <p className="text-white text-lg md:text-xl opacity-90 leading-relaxed">
                    Join thousands of professionals who are already using DigiTools to work smarter.<br className="hidden md:block" />
                    Start your free trial today.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                    <button className="bg-white text-[#4f39f6] font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg w-full sm:w-auto">
                        Explore Products
                    </button>
                    <button className="border bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:scale-110 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full hover:bg-white transition-all w-full sm:w-auto">
                        View Pricing
                    </button>
                </div>

                <p className="text-md text-white pt-4">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </div>
    );
};

export default testimonials;
