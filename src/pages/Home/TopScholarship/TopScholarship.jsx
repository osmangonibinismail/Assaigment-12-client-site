import { Link } from "react-router-dom"
import { Typewriter } from "react-simple-typewriter"


const TopScholarship = () => {
    // const {scholarshipName, universityName} = allScholarship; {allScholarship}
    return (
        <div>
            <div className="text-5xl p-10 text-stone-700 text-center font-bold">
                <span style={{ color: 'green', fontWeight: 'bold' }}>
                    <Typewriter
                        words={['Top Scholarship & Low tution Fees University']}
                        loop={true}
                        cursor
                        cursorStyle='.'
                        typeSpeed={350}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="w-96 bg-base-100 shadow-2xl mt-6 mb-10">
                    <figure><img src="https://i.ibb.co/k5jGd99/iiuc.jpg" alt="Shoes" /></figure>
                    {/* <div className="divider"></div> */}
                    <div className="bg-gray-200 mt-4">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"><a className="font-semibold">University Name: </a> </h2>
                        </div>
                        <div className="ml-3 my-2">
                            <h4 className=""><a className="font-semibold">Scholarship category: </a></h4>
                            <h4 className=""><a className="font-semibold">Subject Category: </a></h4>
                            <h4 className=""><a className="font-semibold">University location: </a></h4>
                            <p><a className="font-semibold">Application Deadline: </a></p>
                            <p><a className="font-semibold">Application Fees: </a></p>
                            <h4 className=""><a className="font-semibold">Rating: </a></h4>
                        </div>
                        <div className="card-actions justify-center p-6">
                            <button className="btn btn-outline btn-info w-full">Scholarship Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-actions justify-center mt-4 mb-4">
                <Link to="/allScholarship"><button
                    className="btn btn-outline bg-slate-200 border-0 border-orange-400 border-b-4 mt-4">All scholarship University
                </button></Link>
            </div>
        </div>
    )
}

export default TopScholarship
