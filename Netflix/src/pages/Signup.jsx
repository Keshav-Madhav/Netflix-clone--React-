import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='w-full h-screen '>
            <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/fdf508c8-97d0-42fd-a6f9-9bef6bf96934/IN-en-20230731-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="/" />
            <div className="bg-black/60 fixed top-0 ledft-0 w-full h-screen"></div>
            <div className='fixed w-full px-4 py-24 x-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign Up</h1>
                        <form className='w-full flex flex-col'>
                            <input className='p-3 my-2 bg-gray-700 rounded ' type="email" placeholder='Email' autoComplete='email'/>
                            <input className='p-3 my-2 bg-gray-700 rounded ' type="password"placeholder='Password' autoComplete='current-password'/>

                            <button className='bg-red-600 py-3 my-6 rounded font-bpld'>Sign Up</button>

                            <div className='flex items-center justify-between text-sm text-gray-600'>
                                <p><input className='mr-2' type="checkbox" />Remember me</p>
                                <p>Need Help?</p>
                            </div>

                            <p className='py-10'><span className='text-gray-600'>Already Subscribed to Netflix?</span><Link to='/login'> Sign in </Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup