import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItem = () => {
    const { register, handleSubmit, reset  } = useForm();
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to img bb and then get url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image
            const menuItem = {
                userEmail: data.userEmail,
                scholarshipName: data.scholarshipName,
                universityName: data.universityName,
                universityCountry: data.universityCountry,
                universityCity: data.universityCity,
                subjectName: data.subjectName,
                subjectCategory: data.subjectCategory,
                scholarshipCategory: data.scholarshipCategory,
                degree: data.degree,
                universityWorldRank: parseFloat(data.universityWorldRank),
                rating: parseFloat(data.rating),
                stipend: data.stipend,
                applicationFees: data.applicationFees,
                serviceCharge: data.serviceCharge,
                tuitionFees: data.tuitionFees,
                applicationDeadline: data.applicationDeadline,
                scholarshipPostDate: data.scholarshipPostDate,
                scholarshipDetails: data.scholarshipDetails,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/allScholarship', menuItem);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                // show success pop up
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${data.scholarshipName} added to the All Scholarship Section.`,
                  showConfirmButton: false,
                  timer: 1500
                });
              }
        };
        console.log('with image url', res.data);
    }

    return (
        <div className="bg-stone-400 p-4 rounded-md shadow-sm">
            <div className="flex justify-evenly">
                <h2 className="text-4xl font-bold text-cyan-600">Add Scholarship Page</h2>
            </div>
            {/*  */}
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                        {/*  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Scholarship Name*</span>
                            </label>
                            <input type="text"
                                placeholder="Scholarship Name"
                                {...register('scholarshipName', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        {/*  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">University Name*</span>
                            </label>
                            <input type="text"
                                placeholder="University Name"
                                {...register('universityName', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* location */}
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {/*  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">University Country*</span>
                            </label>
                            <input type="text"
                                placeholder="University Country"
                                {...register('universityCountry', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        {/*  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">University City*</span>
                            </label>
                            <input type="text"
                                placeholder="University City"
                                {...register('universityCity', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        {/* Subject Name  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Subject Name*</span>
                            </label>
                            <input type="text"
                                placeholder="Subject Name"
                                {...register('subjectName', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                    </div>

                    {/* category */}
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {/*Subject category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Subject Category*</span>
                            </label>
                            <select defaultValue="default" {...register('subjectCategory', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select Subject Category</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Agriculture">Agriculture</option>
                            </select>
                        </div>
                        {/*Scholarship Category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Scholarship Category*</span>
                            </label>
                            <select defaultValue="default" {...register('scholarshipCategory', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select Scholarship Category</option>
                                <option value="FullFund">Full fund</option>
                                <option value="Partial">Partial</option>
                                <option value="Self-fund">Self-fund</option>
                            </select>
                        </div>
                        {/*Degree */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Degree*</span>
                            </label>
                            <select defaultValue="default" {...register('degree', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a Degree</option>
                                <option value="Diploma">Diploma</option>
                                <option value="Bachelor">Bachelor</option>
                                <option value="Masters">masters</option>
                            </select>
                        </div>
                    </div>
                    {/* subject name */}
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {/* University World Rank */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">University World Rank*</span>
                            </label>
                            <input type="number"
                                placeholder="University World Rank"
                                {...register('universityWorldRank', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        {/* Rating */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Rating*</span>
                            </label>
                            <input type="text"
                                placeholder="Rating"
                                {...register('rating', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        {/* Stipend */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Stipend</span>
                            </label>
                            <input type="text"
                                placeholder="Stipend"
                                {...register('stipend', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* fees */}
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {/* Tuition Fees  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Tuition Fees*</span>
                            </label>
                            <input type="text"
                                placeholder="Tuition Fees"
                                {...register('tuitionFees', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        {/* Application Fees */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Application Fees*</span>
                            </label>
                            <input type="text"
                                placeholder="Application Fees"
                                {...register('applicationFees', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        {/* Service Charge */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Service Charge*</span>
                            </label>
                            <input type="text"
                                placeholder="Service Charge"
                                {...register('serviceCharge', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {/* User Email */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="text"
                                placeholder="User Email"
                                readOnly
                                value={user?.email}
                                {...register('userEmail', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        {/* Application Deadline */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Application Deadline*</span>
                            </label>
                            <input type="date"
                                placeholder="Application Deadline"
                                {...register('applicationDeadline', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        {/* Scholarship Post Date */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Scholarship Post Date*</span>
                            </label>
                            <input type="date"
                                placeholder="Scholarship Post Date"
                                {...register('scholarshipPostDate', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* recipe details */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Scholarship Details*</span>
                        </label>
                        <textarea {...register('scholarshipDetails', { required: true })} className="textarea textarea-bordered h-24" placeholder="Scholarship Details"></textarea>
                    </div>

                    {/* file input */}
                    <div className="my-4">
                        <input type="file" {...register('image', { required: true })} className="file-input file-input-bordered file-input-md w-full max-w-xs" />
                    </div>
                    {/* submit button */}
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Add Scholarship" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddItem
