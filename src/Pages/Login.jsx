import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useGetInfo from '../hooks/useGetInfo'; 
import React from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { getUserInfo, loading } = useGetInfo(); 

    const loginf = async () => {
        const user = await getUserInfo(email, password);

        if (user) {
            localStorage.setItem('user', JSON.stringify(user)); // Store user info in localStorage
            toast.success("Login successful");
            navigate("/");
        } else {
            toast.error("Invalid email or password");
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className=' px-10 py-10 rounded-2xl shadow-xl border-2 border-transparent hover:border-pink-500 transition-all duration-300'>
                <div>
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input
                        type="email"
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-red-300 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-red-300 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className='flex justify-center mb-3'>
                    <button
                        onClick={loginf}
                        className='bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg'
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Do not have an account?{' '}
                        <Link className='text-yellow-500 font-bold' to={'/signup'}>Signup</Link>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Login;
