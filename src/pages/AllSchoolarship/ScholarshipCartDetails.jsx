
import useAuth from '../../Hooks/useAuth';
// import useAllScholarshipCart from '../../Hooks/useScholarshipCart';

const ScholarshipCartDetails = () => {

    // const { user } = useAuth();
    // const [allScholarshipCart] = useAllScholarshipCart();


    return (

        <div className='mt-5 mb-10'>
            {/* {
                allScholarshipCart?.map((p) => (
                    < div className='p-8'>
                        <div className="card lg:card-side bg-base-100 shadow-2xl">
                            <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">University Name: {p.universityName}</h2>
                                <div className="my-2">
                                    <h4 className=""><a className="font-semibold">Scholarship category: </a></h4>
                                    <h4 className=""><a className="font-semibold">University location: </a></h4>
                                    <p><a className="font-semibold">Application Deadline: </a></p>
                                    <p><a className="font-semibold">Subject name: </a></p>
                                    <p><a className="font-semibold">Scholarship Description: </a></p>
                                    <p><a className="font-semibold">Stipend: </a></p>
                                    <p><a className="font-semibold">Post Date: </a></p>
                                    <p><a className="font-semibold">Service Charge: </a></p>
                                    <p><a className="font-semibold">Application Fees: </a></p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-sm btn-primary">Apply Scholarship</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))

            } */}
            < div className='p-8'>
                <div className="card lg:card-side bg-base-100 shadow-2xl">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">University Name: </h2>
                        <div className="my-2">
                            <h4 className=""><a className="font-semibold">Scholarship category: </a></h4>
                            <h4 className=""><a className="font-semibold">University location: </a></h4>
                            <p><a className="font-semibold">Application Deadline: </a></p>
                            <p><a className="font-semibold">Subject name: </a></p>
                            <p><a className="font-semibold">Scholarship Description: </a></p>
                            <p><a className="font-semibold">Stipend: </a></p>
                            <p><a className="font-semibold">Post Date: </a></p>
                            <p><a className="font-semibold">Service Charge: </a></p>
                            <p><a className="font-semibold">Application Fees: </a></p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm btn-primary">Apply Scholarship</button>
                        </div>
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
                {/* <div className="card w-90 glass shadow-2xl">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Reviewer name</h2>
                        <p>Review date</p>
                        <p>Rating point</p>
                        <p>Reviewer Comments</p>
                    </div>
                </div> */}
            </div>
        </div >

    )
}

export default ScholarshipCartDetails
