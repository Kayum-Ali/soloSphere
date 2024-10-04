import { Link, useLocation, useNavigate } from "react-router-dom"
import logo from '../../assets/images/logo.png'
import registerIMG from '../../assets/images/register.jpg'
import { FcGoogle } from "react-icons/fc"

import toast from "react-hot-toast"

import useAuth from "../../hooks/useAuth"
import useAxiosSecure from "../../hooks/useAxiosSecure"
import { useEffect } from "react"

const Register = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {user,
    setUser,
    setLoading,
    loading,
    createUser,
    signInWithGoogle,
    updateUserProfile,} = useAuth()
    const axiosSecure = useAxiosSecure()
    useEffect(()=>{
      if (user) {
        navigate('/')
     
      }
    },[navigate, user])
    
    const from = location.state || '/'
     // google login 
  const handleGoogleLogin = async () => {
    try {
     const result =  await signInWithGoogle();
       await axiosSecure.post(`/jwt`, {email: result?.user?.email})
      toast.success('Sign in with Google Successfully')
      navigate(from, {replace: true});

    } catch (error) {
      // console.error(error);
      toast.error(error?.message)
    }
  };


  // register
  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const photo = e.target.photo.value;
     const result = await createUser(email, password)
      await updateUserProfile(name, photo)
     setUser({...result?.user, photoURL: photo, displayName: name})

     await axiosSecure.post(`/jwt`, {email: result?.user?.email})
      toast.success('User registered successfully')
      navigate(from, {replace: true});

    } catch (error) {
      // console.error(error)
      toast.error(error?.message)
    } finally {
      setLoading(false)
    }
  }
  if(user || loading) return

    return (
      <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
        <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
          <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
            <div className='flex justify-center mx-auto'>
              <img
                className='w-auto h-7 sm:h-8'
                src={logo}
                alt=''
              />
            </div>
  
            <p className='mt-3 text-xl text-center text-gray-600 '>
              Get Your Free Account Now.
            </p>
  
            <div onClick={handleGoogleLogin} className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>
              <div className='px-4 py-2 flex items-center'>
              <FcGoogle />
              <span className=' px-4 py-3 font-bold text-center'>
                Login with Google
              </span>
              </div>
  
           
            </div>
  
            <div className='flex items-center justify-between mt-4'>
              <span className='w-1/5 border-b  lg:w-1/4'></span>
  
              <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                or Registration with email
              </div>
  
              <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
            </div>
            <form onSubmit={handleRegister}>
              <div className='mt-4'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='name'
                >
                  Username
                </label>
                <input
                  id='name'
                  autoComplete='name'
                  name='name'
                  className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                  type='text'
                />
              </div>
              <div className='mt-4'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='photo'
                >
                  Photo URL
                </label>
                <input
                  id='photo'
                  autoComplete='photo'
                  name='photo'
                  className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                  type='text'
                />
              </div>
              <div className='mt-4'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='LoggingEmailAddress'
                >
                  Email Address
                </label>
                <input
                  id='LoggingEmailAddress'
                  autoComplete='email'
                  name='email'
                  className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                  type='email'
                />
              </div>
  
              <div className='mt-4'>
                <div className='flex justify-between'>
                  <label
                    className='block mb-2 text-sm font-medium text-gray-600 '
                    htmlFor='loggingPassword'
                  >
                    Password
                  </label>
                </div>
  
                <input
                  id='loggingPassword'
                  autoComplete='current-password'
                  name='password'
                  className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                  type='password'
                />
              </div>
              <div className='mt-6'>
                <button
                  type='submit'
                  className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                >
                Register
                </button>
              </div>
            </form>
  
            <div className='flex items-center justify-between mt-4'>
              <span className='w-1/5 border-b  md:w-1/4'></span>
  
              <Link
                to='/login'
                className='text-xs text-gray-500 uppercase   link-hover link link-primary'
              >
                or Login
              </Link>
  
              <span className='w-1/5 border-b  md:w-1/4'></span>
            </div>
          </div>
          <div
            className='hidden bg-cover bg-center lg:block lg:w-1/2'
            style={{
              backgroundImage: `url(${registerIMG})`,
            }}
          ></div>
        </div>
      </div>
    )
  }
  
  export default Register