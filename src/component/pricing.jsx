const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            desc: "Perfect for getting started",
            price: 0,
            features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
            buttonText: "Get Started Free",
            isPopular: false
        },
        {
            name: "Pro",
            desc: "Best for professionals",
            price: 29,
            features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
            buttonText: "Start Pro Trial",
            isPopular: true
        },
        {
            name: "Enterprise",
            desc: "For teams and businesses",
            price: 99,
            features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
            buttonText: "Contact Sales",
            isPopular: false
        }
    ];

    return (
        <div className="bg-white py-30 px md:px-20 lg:px-50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#101727] mb-4">Simple, Transparent Pricing</h2>
                <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mx-auto items-stretch">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative rounded-3xl p-8 shadow-lg transition-transform hover:scale-105 flex flex-col justify-between ${plan.isPopular
                            ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white"
                            : "bg-white text-[#101727] border border-gray-100"
                            }`}
                    >
                        {plan.isPopular && (
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ffedd5] text-[#ea580c] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                Most Popular
                            </span>
                        )}

                        <div>
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold">{plan.name}</h3>
                                <p className={`${plan.isPopular ? "text-purple-100" : "text-gray-400"} mt-2`}>{plan.desc}</p>
                            </div>

                            <div className="mb-8">
                                <span className="text-4xl font-black">${plan.price}</span>
                                <span className={`${plan.isPopular ? "text-purple-100" : "text-gray-400"} text-lg font-medium`}>/Month</span>
                            </div>

                            <div className="mb-8">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <span className={`${plan.isPopular ? "text-white" : "text-green-500"} font-bold text-xl`}>✔</span>
                                        <span className={plan.isPopular ? "text-purple-50" : "text-gray-600"}>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className={`w-full py-4 rounded-full font-black text-lg transition-all ${plan.isPopular
                            ? "bg-white text-[#8b3dff] hover:bg-gray-100"
                            : "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white hover:opacity-100"
                            }`}>{plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
