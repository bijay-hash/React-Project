import React, {useState}from 'react';
import { useHistory } from 'react-router';
import firebase from '../config/firebase';

export default function Login() {
    const [IsLoading, setIsLoading] = useState(false);
    const [Error, setError] = useState("");
    const [Form, setForm] = useState({email: "", password: ""});
    const history = useHistory();

    function handleForm(e){

        if(IsLoading) return;
        setIsLoading(true);
        e.preventDefault();

        firebase
        .auth()
        .signInWithEmailAndPassword(Form.email,Form.password)
        .then((res) => {
            history.replace("/");
            setError("");
            setIsLoading(false);
        })
        .catch((e) => {
            setError(e.message);
            setIsLoading(false);
        });

    }
    function handleInput(e){
        setForm({...Form, [e.target.name]: e.target.value});
    }

    return (
        <div className="flex h-screen bg-gray-200">
            <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700">
            <form onSubmit={handleForm} className="m-5 w-10/12">
              {(Error !== "") && <p className="text-center text-red-400">{Error}</p>}
              <h1 className="w-full text-4xl tracking-widest text-center my-6">Login</h1> 
                <div className="w-full my-6">
                    <input type="email" name="email" className="p-2 rounded shadow w-full text-black" placeholder="Email or Username" value={Form.email} onChange={handleInput} />
                </div>
                <div>
                    <input type="password" name="password" className="p-2 rounded shadow w-full text-black" placeholder="password" value={Form.password} onChange={handleInput} />
                </div>
                <div className="w-full my-10">
                    <button type="submit" className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-300 text-black">
                    {
                        IsLoading ? (<i className="fas fa-circle-notch fa-spin"></i>) : ("Login")
                    }
                    </button>
                </div>
            </form>   
            </div>
        </div>
    );
}
