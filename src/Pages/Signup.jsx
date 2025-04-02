import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAddUser from '../hooks/useAddUser'; // Import the custom hook
import React from 'react';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signup = async () => {
        if (!name || !email || !password) {
            return toast.error("All fields are required");
        }

        const newUser = {
            name,
            email,
            password, 
            profilePic: "", 
        };

        const result = await useAddUser(newUser);

        if (result.success) {
            localStorage.setItem('user', JSON.stringify(newUser));
            toast.success(result.message);
            navigate("/");
        } else {
            toast.error(result.message);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            
            <div className=' px-10 py-10 rounded-2xl shadow-xl border-2 border-transparent hover:border-pink-500 transition-all duration-300'>
                <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='bg-red-300 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Name'
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='bg-red-300 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Email'
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='bg-red-300 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Password'
                />
                <button
                    onClick={signup}
                    className='bg-red-300 w-full text-white font-bold px-2 py-2 rounded-lg'>
                    Signup
                </button>
                <h2 className='text-white mt-3'>Have an account? <Link className='text-pink-500 font-bold' to={'/login'}>Login</Link></h2>
            </div>
        </div>
    );
}

export default Signup;
