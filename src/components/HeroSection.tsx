import Benner from '../assets/banner-stack.png'
const HeroSection = () => {
    return (
        <section className="container mx-auto bg-white md:py-20 py-13 px-6 md:px-6 flex flex-col md:flex-row items-center justify-between mt-12">
            {/* Left Content */}
            <div className="md:w-1/2 space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight text-center md:text-start">
                    Build Your Ideal <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
                        Development Stack
                    </span>
                </h1>
                <p className="text-gray-600 sm:text-xl text-md md:text-start text-center sm:px-0 px-5">
                    Explore frontend, backend, database, and tooling options,compare them side by side, and put together the stack that fits your next project.
                </p>

                <div className="flex gap-4 md:justify-start justify-center">
                    <button className="sm:px-6 sm:py-3 px-3 py-2 md:text-md text-[13px] bg-gradient-to-r from-orange-400 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:opacity-90 transition">
                        Explore Technologies
                    </button>
                    <button className="sm:px-6 sm:py-3 px-3 py-2 md:text-md text-[13px] border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
                <img src={Benner} alt="hero-beanner" />
            </div>
        </section>
    );
};

export default HeroSection;