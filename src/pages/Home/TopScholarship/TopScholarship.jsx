import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom"
import { Typewriter } from "react-simple-typewriter"


const TopScholarship = () => {

    const allFood = useLoaderData() || [];
    console.log(allFood)
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('https://assaigment-12-server.vercel.app/allScholarships')
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
    }, [])
    // const {scholarshipName, universityName} = allScholarship; {allScholarship}
    return (
        <div>
            {/* <div className="text-5xl p-10 text-stone-700 text-center font-bold">
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
            </div> */}
            <div className="text-center mb-10">
                <p className="font-medium text-2xl text-[#ed2027]">FEATURED SECTION</p>
                <h1 className="text-5xl font-medium mt-2">Top Scholarship & Low tution Fees University</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-6">
                {
                    item.slice(0, 6).map((p) => (
                        <div className="w-90 bg-base-100 shadow-2xl mt-6 mb-10">
                            <figure className="h-500 w-500"><img className="h-500 w-500" src={p.image} alt="Shoes" /></figure>
                            {/* <div className="divider"></div> */}
                            <div className="bg-gray-200 mt-4">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">University Name:  {p.universityName}</h2>
                                </div>
                                <div className="ml-3 my-2">
                                    <h4 className=""><a className="font-semibold mr-2">Scholarship category: </a>{p.scholarshipCategory}</h4>
                                    <h4 className=""><a className="font-semibold mr-2">Subject Category: </a>{p.subjectCategory}</h4>
                                    <h4 className=""><a className="font-semibold mr-2">University location: </a>{p.universityCountry} {p.universityCity}</h4>
                                    <p><a className="font-semibold mr-2">Application Deadline: </a>{p.applicationDeadline}</p>
                                    <p><a className="font-semibold mr-2">Application Fees: </a>{p.applicationFees}</p>
                                    <h4 className=""><a className="font-semibold mr-2">Rating: </a>{p.rating}</h4>
                                </div>
                                <Link to={`/scholarshipCartDetails/${p._id}`}>
                                    <div className="card-actions justify-center p-6">
                                        <button className="btn btn-outline btn-info w-full">Scholarship Details</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))
                }
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
