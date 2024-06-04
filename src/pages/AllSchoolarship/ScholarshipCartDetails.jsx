import React, { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'

const ScholarshipCartDetails = () => {

    const {user} = useContext(AuthContext);


    return (
        <div className="w-100 bg-base-100 shadow-2xl mt-6 mb-10">
                <figure className=''><img src="https://i.ibb.co/GkTjR5P/login.png" alt="Shoes" /></figure>
                {/* <div className="divider"></div> */}
                <div className="bg-gray-200 mt-4">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">University Name:  </h2>
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
    )
}

export default ScholarshipCartDetails
