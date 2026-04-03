const features = () => {
    return (
        <div className="grid grid-cols-1 justify-center contain-center text-center lg:px-50 space-y-4 bg-[#f1f1f1] py-30">
            <h2 className="font-extrabold text-5xl">Get Started in 3 Steps</h2>
            <p className="text-[#627382FF]">Start using premium digital tools in minutes, not hours.</p>
            <div className="md:flex gap-8 grid mt-8">
                <div className="border border-gray-200 rounded-3xl m-auto p-4 relative bg-white w-100 hover:scale-105 hover:bg-blue-50 place-content-center h-100">
                    <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-2 px-3 rounded-full w-min absolute top-5 right-5 text-white font-bold">01</div>
                    <div className="grid space-y-4 p-12">
                        <img className="mx-auto" src="./assets/user.png" alt="" />
                        <h3 className="font-bold text-2xl">Create Account</h3>
                        <p className="text-[#627382]">Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className="border border-gray-200 rounded-3xl m-auto p-4 relative bg-white w-100 hover:scale-105 hover:bg-blue-50 place-content-center h-100">
                    <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-2 px-3 rounded-full w-min absolute top-5 right-5 text-white font-bold">02</div>
                    <div className="grid justify-center space-y-4 p-12">
                        <img className="mx-auto" src="./assets/package.png" alt="" />
                        <h3 className="font-bold text-2xl">Create Account</h3>
                        <p className="text-[#627382]">Download and start using your premium
                        tools immediately.</p>
                    </div>
                </div>
                <div className="border border-gray-200 rounded-3xl m-auto p-4 relative bg-white w-100 hover:scale-105 hover:bg-blue-50 place-content-center h-100">
                    <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-2 px-3 rounded-full w-min absolute top-5 right-5 text-white font-bold">03</div>
                    <div className="grid items-center space-y-4 p-12">
                        <img className="mx-auto" src="./assets/rocket.png" alt="" />
                        <h3 className="font-bold text-2xl">Start Creating</h3>
                        <p className="text-[#627382]">Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default features;