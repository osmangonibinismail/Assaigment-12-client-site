import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useSingleScholarshipCart from "../../Hooks/useSingleScholarshipCart";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const ApplicationForm = () => {
    // const { universityName,  subjectCategory, scholarshipCategory} = useLoaderData();
    const { id } = useParams();
    console.log(id)
    const [singleCart] = useSingleScholarshipCart(id);
    console.log(singleCart)

    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [, refetch] = useCart();

    const onSubmit = async (data) => {
        console.log(data)
        // image upload to img bb and then get url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        // if (user && user.email) {
        //     //send cart to the database
        //     const cartItem = {

        //         email: user.email,
        //         // 
        //         phoneNumber: data.phoneNumber,
        //         applicantAddress: data.applicantAddress,
        //         sscResult: data.sscResult,
        //         hscResult: data.hscResult,
        //         gender: data.gender,
        //         degree: data.degree,
        //         studyGap: data.studyGap,
        //         universityName: data.universityName,
        //         scholarshipCategory: data.scholarshipCategory,
        //         subjectCategory: data.subjectCategory,
        //         image: data.image,
        //     }
        // }
        if (res.data.success) {
            //send cart to the database
            const cartItem = {

                email: user.email,
                applicantName: user.name,
                // userId: user._id,
                // scholarshipId: singleCart._id,

                // 
                phoneNumber: data.phoneNumber,
                applicantAddress: data.applicantAddress,
                sscResult: data.sscResult,
                hscResult: data.hscResult,
                gender: data.gender,
                degree: data.degree,
                studyGap: data.studyGap,
                universityName: data.universityName,
                scholarshipCategory: data.scholarshipCategory,
                subjectCategory: data.subjectCategory,
                image: data.image,
            }
            axiosSecure.post('/scholarshipCart', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `successfully added to your scholarship`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch();
                    }
                    navigate('/allScholarship', { state: { from: location } })
                })
        }
        else {
            Swal.fire({
                title: "You are not Log in",
                text: "Please log in to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }
    // console.log(handleSubmit)

    return (
        <div className="bg-stone-400 p-4 rounded-md shadow-sm">
            <div className="flex justify-evenly">
                <h2 className="text-4xl font-bold text-cyan-600">Apply Scholarship form</h2>
            </div>
            {/*  */}
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                        {/* Applicant phone number */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Applicant phone number*</span>
                            </label>
                            <input type="number"
                                placeholder="Phone Number"
                                {...register('phoneNumber', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        {/* Applicant address */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Applicant address*</span>
                            </label>
                            <input type="text"
                                placeholder="Address (village,district,country)"
                                {...register('applicantAddress', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* result */}
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                        {/*  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">SSC Result*</span>
                            </label>
                            <input type="text"
                                placeholder="SSC Result"
                                {...register('sscResult', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        {/*  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">hSC Result*</span>
                            </label>
                            <input type="text"
                                placeholder="HSC Result"
                                {...register('hscResult', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                    </div>

                    {/* category */}
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {/*gender */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Gender*</span>
                            </label>
                            <select defaultValue="default" {...register('gender', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select Your Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        {/*Degree */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Applying Degree*</span>
                            </label>
                            <select defaultValue="default" {...register('degree', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a Degree</option>
                                <option value="Diploma">Diploma</option>
                                <option value="Bachelor">Bachelor</option>
                                <option value="Masters">masters</option>
                            </select>
                        </div>
                        {/*Study gap */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Study gap*</span>
                            </label>
                            <select defaultValue="default" {...register('studyGap', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select Your Study Gap</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    {/* subject name */}
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {/* University name */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">University Name*</span>
                            </label>
                            <input type="text"
                                readOnly
                                defaultValue={singleCart?.universityName}
                                placeholder="University Name"
                                {...register('universityName', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        {/* Scholarship category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Scholarship Category*</span>
                            </label>
                            <input type="text"
                                readOnly
                                defaultValue={singleCart?.scholarshipCategory}
                                placeholder="Scholarship category"
                                {...register('scholarshipCategory', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        {/* Subject Category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Subject Category</span>
                            </label>
                            <input type="text"
                                readOnly
                                value={singleCart?.subjectCategory}
                                placeholder="Subject Category"
                                {...register('subjectCategory', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* file input */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Applicant photo*</span>
                        </label>
                        <input type="file" {...register('image', { required: true })} className="file-input file-input-bordered file-input-md w-full max-w-xs" />
                    </div>
                    {/* submit button */}
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Apply" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ApplicationForm
