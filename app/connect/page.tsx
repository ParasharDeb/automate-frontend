'use client'
import axios from 'axios'
export default function Linkedin() {
    const ClickHandler = () => {
        const token = localStorage.getItem('authToken') || '';
        axios.get( `http://localhost:8080/api/v1/auth/linkedin?token=${encodeURIComponent(token)}`);
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <button
                className="bg-blue-400 px-20 py-5 rounded-lg cursor-pointer"
                onClick={ClickHandler}>
                Submit
            </button>
        </div>
    );
}
