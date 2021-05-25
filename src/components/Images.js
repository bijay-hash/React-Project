import React, {useState,useEffect}  from 'react';
import Image from "./image";


export default function Images() {

    const [Images, setImages] = useState([
        "https://images.unsplash.com/photo-1598449356475-b9f71db7d847?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1615650131616-fa552a993e81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1611223155995-dac7d89b776a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    ]);

    useEffect(() => {
        const inputBox = document.getElementById('inputBox');
        inputBox.focus();
        // console.log(inputBox);
    }, [])

    const [NewImageUrl, setNewImageUrl] = useState("");

    function ShowImage() {

        return Images.map((img,index) => <Image  image={img} handleRemove={handleRemove} index={index} key={index} />);

    }

    function handleAdd() {
        if(NewImageUrl !== "")
        {
            setImages([NewImageUrl,...Images]);
            setNewImageUrl("");
        }
    }

    function handleChange(event)
    {
        setNewImageUrl(event.target.value);
    }

    function handleRemove(index)
    {
        // console.log(Images.filter((image, i) => i !== index));
    setImages([...Images.slice(0, index),...Images.slice(index+1,Images.length)]);
    }



    return (
        <section>
            <div className="flex flex-wrap justify-center">
             <ShowImage />
            </div>
            <div className="flex justify-around my-5">
                 <input type="text" id="inputBox" className="p-2 border border-gray shadow rounded w-3/4" onChange={handleChange} value={NewImageUrl} />
                 <button className={`p-2 text-white ${NewImageUrl !== "" ? "bg-indigo-600 bg-opacity-100" : "bg-indigo-600 bg-opacity-50"}`} onClick={handleAdd}>Add New</button>
             </div>
        </section>
    );
}
