import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdReviews } from 'react-icons/md'
import useAuth from '../../../Hooks/useAuth'
import useSingleScholarshipCart from '../../../Hooks/useSingleScholarshipCart';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




const AddReviewUser = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const { id } = useParams();
  const [Hello, setHello] = useSingleScholarshipCart(id);
  
  // const [applicationCart] = useCart();
  

//   useEffect(() => {
//     fetch(`https://assaigment-12-server.vercel.app/allScholarship/${id}`)
//         .then(res => res.json())
//         .then(data => {
//           setHello(data);
//             // console.log(data);
//         })
// }, [id])

  const handleSingleFormData = (e) => {
    e.preventDefault();
    const form = e.target.value;
  
    const scholarshipCategory = form.scholarshipCategory.value;
    const universityName = form.universityName.value;
    const id = form.id.value;
    const reviewDate = form.reviewDate.value;
    const reviewComment = form.reviewComment.value;
    const email = user.email;
    const displayName = user.displayName;
    const photoURL = user.photoURL
    const myFoodRequest = { id, scholarshipCategory, universityName, reviewDate,  email, displayName, photoURL, requestDate, reviewComment
    }
  
    
    // console.table(myFoodRequest);
    fetch(`https://assaigment-11-server-site-henna.vercel.app/requested`, {
        method: "POST",
        // credentials: "include",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(myFoodRequest)
    })
        .then(res => res.json())
        toast.success('Add Review successfully')
        navigate('/')
  
        .then(data => {
            // console.log(data)
            
        })
  }
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn btn-sm bg-emerald-400 text-white" onClick={() => document.getElementById('my_modal_3').showModal()}><MdReviews /></button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">{Hello?.email}</h3>
          <div className="card-body items-center text-center">
            <div className="avatar">
              <div className="w-24 rounded">
                <img src={user?.photoURL ? user?.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
              </div>
            </div>
            {
              user && <>
                <div className="flex gap-2">
                  <p className="font-semibold">User Name:</p>
                  <a>{user.displayName}</a>
                </div>
                <div className="flex gap-3">
                  <p className="font-semibold">User Email:</p>
                  <span>{user.email}</span>
                </div>
              </>
            }
          </div>

          <div className='divider'></div>
          {/* review form */}
          <form onSubmit={handleSingleFormData} className="mb-20 border-dotted border-t border-indigo-500">
            {/* Scholarship name */}
            <div className="md:flex gap-4 mb-4">
              <div className="form-control md:w-1/3">
                <label className="label">
                  <span className="label-text font-bold">
                    Scholarship Name
                  </span>
                </label>
                <label className="input-group">
                  {/* defaultValue={singleFood.foodName} readOnly */}
                  <input type="text" name="scholarshipName"
                    
                    placeholder="Scholarship Name" className="input input-bordered w-full" id="" />
                </label>
              </div>
              {/* University name */}
              <div className="form-control md:w-1/3">
                <label className="label">
                  <span className="label-text font-bold">
                    University Name
                  </span>
                </label>
                <label className="input-group">
                  <input type="text"
                     readOnly name="universityName" placeholder="University Name" className="input input-bordered w-full" id="" />
                </label>
              </div>
              {/* University _id */}
              <div className="form-control md:w-1/3">
                <label className="label">
                  <span className="label-text font-bold">
                    University _id
                  </span>
                </label>
                <label className="input-group">
                  <input type="text"
                     readOnly name="university_id" placeholder="University _id" className="input input-bordered w-full" id="" />
                </label>
              </div>

            </div>

            {/* Rating point */}
            <div className="md:flex gap-4 mb-4">
              <div className="form-control md:w-1/3">
                <label className="label">
                  <span className="label-text font-bold">
                    Rating point
                  </span>
                </label>
                <label className="input-group">
                  <input type="number" name="ratingPoint" className="input input-bordered w-full" placeholder="Rating point" id="" />
                </label>

              </div>
              {/* Review date */}
              <div className="form-control md:w-1/3">
                <label className="label">
                  <span className="label-text font-bold">
                    Review date
                  </span>
                </label>
                <label className="input-group">
                  <DatePicker readOnly selected={startDate} onChange={(date) => setStartDate(date)} name="reviewDate" className="input input-bordered w-full" placeholder="Review Date" />
                </label>
              </div>
              {/*  */}
              <div className="form-control md:w-1/3">
                <label className="label">
                  <span className="label-text font-bold">
                    User Image URL
                  </span>
                </label>
                <label className="input-group">
                  <input type="text"
                     readOnly name="userImageURL" placeholder="Food Image URL" className="input input-bordered w-full" id="" />
                </label>
              </div>
            </div>
            {/* 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">
                    User Name
                  </span>
                </label>
                <label className="input-group">
                  <input type="text"
                     readOnly name="userName" placeholder="User Name" className="input input-bordered w-full" id="" />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">
                    User Email
                  </span>
                </label>
                <label className="input-group">
                  <input type="email"
                     readOnly name="userEmail" placeholder="Your Email" className="input input-bordered w-full" id="" />
                </label>
              </div>
            </div>
            {/* 5 */}
            {/* Review comment */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">
                  Review Comment
                </span>
              </label>
              <label className="input-group">
                <input type="text" name="reviewComment" placeholder="Review Comment" className="input input-bordered input-lg w-full" id="" />
              </label>
            </div>
            {/* add button */}
            <input type="submit" value="Add Review" className="mt-6 w-full btn btn-primary" />

          </form>
        </div>
      </dialog>
    </div>
  )
}

export default AddReviewUser

