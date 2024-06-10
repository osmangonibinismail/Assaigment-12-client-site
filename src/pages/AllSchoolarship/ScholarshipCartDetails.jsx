
import { Link, useParams } from 'react-router-dom';
import useSingleScholarshipCart from '../../Hooks/useSingleScholarshipCart';

const ScholarshipCartDetails = () => {
    const { id } = useParams();
    console.log(id)
    const [singleCart] = useSingleScholarshipCart(id);
    console.log(singleCart);


    return (

        <div className='mt-5 mb-10'>
            < div className='p-8'>
                <div className="card lg:card-side bg-base-100 shadow-2xl">
                    <figure><img src={singleCart?.image} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">University Name: {singleCart?.universityCountry}
                        </h2>
                        <div className="my-2">
                            <h4 className=""><a className="font-semibold mr-2">Scholarship category: </a>{singleCart?.scholarshipCategory}</h4>
                            <h4 className=""><a className="font-semibold mr-2">University location: </a>{singleCart?.universityCountry} {singleCart?.universityCity}</h4>
                            <p><a className="font-semibold mr-2">Application Deadline: </a>{singleCart?.applicationDeadline}</p>
                            <p><a className="font-semibold mr-2">Subject name: </a>{singleCart?.subjectName}</p>
                            <p><a className="font-semibold mr-2">Stipend: </a>{singleCart?.stipend}</p>
                            <p><a className="font-semibold mr-2">Post Date: </a>{singleCart?.scholarshipPostDate}</p>
                            <p><a className="font-semibold mr-2">Service Charge: </a>{singleCart?.serviceCharge}</p>
                            <p><a className="font-semibold mr-2">Application Fees: </a>{singleCart?.applicationFees}</p>
                            <p><a className="font-semibold mr-2">Scholarship Description: </a>{singleCart?.scholarshipDetails}</p>
                        </div>
                        <Link to={`/dashboard/payment/${singleCart?._id}`}>
                            <div className="card-actions justify-end">
                                <button className="btn btn-sm btn-primary">Apply Scholarship</button>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
                <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-200 dark:bg-gray-50 dark:text-gray-900 text-gray-900">
                    <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600 text-violet-600">Quisque</span>
                        <h2 className="text-xl font-semibold tracking-wide">date</h2>
                        <p>Rating point</p>
                    </div>
                    <p className="dark:text-gray-800 text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                </div>

            </div>
        </div >

    )
}

export default ScholarshipCartDetails
