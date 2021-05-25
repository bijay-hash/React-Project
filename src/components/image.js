import React,{useState} from 'react'

export default function Image({ index,image,handleRemove })
{
    const [ISHovering, setISHovering] = useState(false);

    return (
    <div className="width-1/3 flex justify-center my-4 px-2">
        <div className="relative"  onMouseEnter={()=>setISHovering(true)} onMouseLeave={()=>setISHovering(false)} >
        <i className={`fas fa-times text-white absolute right-2 cursor-pointer top-2 opacity-90 hover:opacity-100 ${ISHovering? "" : "hidden"}`} onClick={() => handleRemove(index)}></i>
        <img src={image} width="200" />
        </div>
    </div>
    )
}
