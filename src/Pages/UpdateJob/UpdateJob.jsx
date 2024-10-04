import {  useState } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"


import DatePicker from "react-datepicker"
import toast from "react-hot-toast"
import useAuth from "../../hooks/useAuth"
import useAxiosSecure from "../../hooks/useAxiosSecure"

const UpdateJob = () => {
    const updatedJob = useLoaderData()
    const navigate = useNavigate()
   const {_id,job_title,description,buyer,category,min_price,max_price,deadline} = updatedJob

   const {user} = useAuth()
   const axiosSecure = useAxiosSecure()

  
   const [startDate, setStartDate] = useState(deadline ? new Date(deadline) : new Date());

   const handleUpdate = async(e)=>{
     e.preventDefault()
     const from = e.target;
     const job_title = from.job_title.value;
     const description = from.description.value;
     const deadline = startDate;
     const min_price = parseInt(from.min_price.value);
     const max_price = parseInt(from.max_price.value);
     const category = from.category.value;
     const email = from.email.value;
     const updatedData = {
        job_title,
        description,
        deadline,
        min_price,
        max_price,
        category,
        buyer: {
            email,
            name : user?.displayName,
            photo : user?.photoURL
        }
     }
     try{
        await axiosSecure.put(`/job/${_id}`, updatedData)
      toast.success('Job Data updated successfully')
       navigate('/my-posted-job')
     }catch(error){
      toast.error(error.message)
     }
   }
    
    return (
      <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
        <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
          <h2 className='text-lg font-semibold text-gray-700 capitalize '>
            Update a Job
          </h2>
  
          <form onSubmit={handleUpdate}>
            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              <div>
                <label className='text-gray-700 ' htmlFor='job_title'>
                  Job Title
                </label>
                <input
                  id='job_title'
                  name='job_title'
                  type='text'
                  defaultValue={job_title}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
              <div>
                <label className='text-gray-700 ' htmlFor='emailAddress'>
                  Email Address
                </label>
                <input
                  id='emailAddress'
                  type='email'
                  name='email'
                  disabled
                  defaultValue={buyer?.email}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div className='flex flex-col gap-2 '>
                <label className='text-gray-700'>Deadline</label>
  
                {/* Date picker input field */}
                <DatePicker className="border p-2 rounded-md" required selected={startDate} onChange={(date) => setStartDate(date)} />

              </div>
  
              <div className='flex flex-col gap-2 '>
                <label className='text-gray-700 ' htmlFor='category'>
                  Category
                </label>
                <select
                  name='category'
                  id='category'
                  defaultValue={category}
                  className='border p-2 rounded-md'
                >
                  <option value='Web Development'>Web Development</option>
                  <option value='Graphics Design'>Graphics Design</option>
                  <option value='Digital Marketing'>Digital Marketing</option>
                </select>
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='min_price'>
                  Minimum Price
                </label>
                <input
                  id='min_price'
                  name='min_price'
                  type='number'
                  defaultValue={min_price}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
              <div>
                <label className='text-gray-700 ' htmlFor='max_price'>
                  Maximum Price
                </label>
                <input
                  id='max_price'
                  name='max_price'
                  type='number'
                  defaultValue={max_price}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2 mt-4'>
              <label className='text-gray-700 ' htmlFor='description'>
                Description
              </label>
              <textarea
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                name='description'
                id='description'
                defaultValue={description}
                cols='30'
              ></textarea>
            </div>
            <div className='flex w-full justify-end mt-6'>
              <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 w-full'>
                Update
              </button>
            </div>
          </form>
        </section>
      </div>
    )
  }
  
  export default UpdateJob