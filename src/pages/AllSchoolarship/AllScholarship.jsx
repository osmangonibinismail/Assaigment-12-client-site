import { Helmet } from "react-helmet-async"


const AllScholarship = () => {
    return (
        <>
            <Helmet>
                <title>OAI || All Scholarship</title>
            </Helmet>
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
        </>
    )
}

export default AllScholarship
