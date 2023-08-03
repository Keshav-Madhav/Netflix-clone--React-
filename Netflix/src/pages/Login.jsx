import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const { user, logIn } = UserAuth();
    const navigate = useNavigate();

    const submit = async (e)=>{
        e.preventDefault();
        setError('');
        try{
            await logIn(email, password);
            navigate('/')
        }
        catch (error){
            console.log(error);
            setError(error.message);
        }
    };


    return (
        <div className='w-full h-screen '>
            <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/fdf508c8-97d0-42fd-a6f9-9bef6bf96934/IN-en-20230731-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="/" />
            <div className="bg-black/60 fixed top-0 ledft-0 w-full h-screen"></div>
            <div className='fixed w-full px-4 py-24 x-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign In</h1>
                        {error ? <p className='px-3 py-2 bg-red-400 my-2 rounded'>{error}</p> : null}
                        <form onSubmit={submit} className='w-full flex flex-col'>
                            <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded ' type="email" placeholder='Email' autoComplete='email'/>
                            <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded ' type="password"placeholder='Password' autoComplete='current-password'/>

                            <button className='bg-red-600 py-3 my-6 rounded font-bpld'>Sign In</button>

                            <div className='flex items-center justify-between text-sm text-gray-600'>
                                <p><input className='mr-2' type="checkbox" />Remember me</p>
                                <p>Need Help?</p>
                            </div>

                            <p className='py-10'><span className='text-gray-600'>New to Netflix?</span><Link to='/signup'> Sign Up </Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login