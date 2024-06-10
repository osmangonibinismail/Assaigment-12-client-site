

const AboutSection = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-300">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src='https://i.ibb.co/VNDj6fF/705.jpg' className="w-4/5 rounded-lg shadow-2xl" />
                    <img src='https://i.ibb.co/T2dTLVw/715.jpg' className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-4 p-4'>
                    <h3 className='text-2xl font-bold text-orange-500'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & high quality <br /> Scholarship</h1>
                    <p className="py-4 text-slate-800">High-quality Scholarship is not just about system; it's a commitment<br /> to excellence in sourcing, preparation, and presentation.</p>
                    <p className="py-4 text-slate-800">Whether enjoyed at a fine dining Scholarship or<br /> in the comfort of your own home, high-quality Scholarship leaves<br /> a lasting impression, reminding us of the joys of <br />good Scholarship done right.</p>
                    <button className="btn btn-active btn-secondary bg-orange-600">Get More Info</button>
                </div>
            </div>
        </div>
        <div className="text-center mt-10"></div>
    </div>
  )
}

export default AboutSection
