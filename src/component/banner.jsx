import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faPlay } from '@fortawesome/free-solid-svg-icons';

const Banner = ({ data }) => {
    console.log(data);
    return (
        <>
            <div className="grid grid-cols-1 lg:flex gap-30 md:mx-50 center mx-2 py-15">
                <div className="space-y-4 grid justify-center content-center w-max">
                    <div className="badge badge-soft badge-primary flex items-center gap-2 bg-[#e1e7ff] rounded-3xl text-nowrap p-4">
                        <FontAwesomeIcon
                            icon={faBullseye}
                            className="linear-to-b from-[#4f39f6] to-[#9514fa]"
                        />
                        <span className="font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-nowrap text-sm">
                            New: AI-Powered Tools Available
                        </span>
                    </div>

                    <div className="mt-4 space-y-4">
                        <h1 className="text-6xl font-bold text-[#101727]">
                            Supercharge Your
                        </h1>
                        <h1 className="text-6xl font-bold text-[#101727]">
                            Digital Workflow
                        </h1>
                        <div className="pt-4 space-y-2">
                            <p className="text-[#627382FF]">Access premium AI tools, design assets, templates, and productivity</p>
                            <p className="text-[#627382FF]">software—all in one place. Start creating faster today.</p>
                            <p className="text-[#627382FF]">Explore Products</p>
                        </div>
                        <div className="flex gap-4 pt-8">
                            <button className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-semibold py-2 px-4 rounded-full hover:scale-105 transition-transform text-nowrap">Explore Products</button>
                            <button className="btn btn-outline btn-primary rounded-4xl font-semibold"><FontAwesomeIcon icon={faPlay} style={{ color: "#9514fa", }} />Watch Demo</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="w-full lg:w-200 h-full lg:h-150 object-cover" src="../assets/banner.png" alt="Banner Image" />
                </div>
            </div>
            <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] flex justify-center w-full text-center px-15 py-10">
                <div className="ml px-40 ">
                    <h1 className=" text-white font-extrabold text-[44px]">50K+</h1>
                    <p className="text-gray-300 text-[16px]">Active Users</p>
                </div>
                <div className="ml px-40 border-r-2 border-l-2  border-gray-400">
                    <h1 className=" text-white font-extrabold text-[44px]">200+</h1>
                    <p className="text-gray-300 text-[16px]">Premium Tools</p>
                </div>
                <div className="ml px-40 ">
                    <h1 className=" text-white font-extrabold text-[44px]">4.9</h1>
                    <p className="text-gray-300 text-[16px]">Rating</p>
                </div>
            </div>
        </>
    );
};

export default Banner;