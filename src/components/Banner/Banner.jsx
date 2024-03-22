const Banner = () => {
    return (
        <div className="pt-20">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/QPnGhh7/banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl lg:text-6xl font-bold">Welcome to Fitness Excellence!</h1>
                        <p className="mb-5 md:w-8/12 mx-auto w-full text-xl">Ready to take the first step towards a healthier, happier you? Join us at the gym and embark on a journey of self-discovery, growth, and transformation.</p>
                        <button className="btn text-lg bg-[#edf2f4]">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;