import {useState,useRef} from 'react';
import PropTypes from "prop-types";
import useTFClassify from '../utils/hooks/useTFClassify';

function Image({ index,image,handleRemove,show })
{
    const [ISHovering, setISHovering] = useState(false);
    const imageref = useRef();
    const { predict, predictions, setPredictions, isLoading } = useTFClassify();

    return (
        <div className="relative"  onMouseEnter={()=>setISHovering(true)} onMouseLeave={()=>setISHovering(false)} >
         {(predictions.length > 0 || isLoading) && (
        <span
          className="absolute  bg-gray-800 text-white rounded-lg shadow px-2 left-0 ml-5"
          onClick={() => setPredictions([])}
        >
          {isLoading && <p>Fetching results...</p>}
          {predictions.map((prediction) => (
            <div className="flex justify-between text-sm">
              <p>{prediction.className}</p>
              <p>{Math.floor(prediction.probability * 100)} %</p>
            </div>
          ))}
        </span>
        )}
        <i className={`fas fa-times text-white absolute right-2 cursor-pointer top-2 opacity-90 hover:opacity-100 ${ISHovering? "" : "hidden"}`} onClick={() => handleRemove(index)}></i>
        <i className={`fas fa-search text-white absolute left-2 cursor-pointer top-2 opacity-90 hover:opacity-100 ${ISHovering? "" : "hidden"}`} onClick={() => predict(imageref.current)}></i>
        <img src={image} ref={imageref} onClick={show} width="100%" height="auto" alt="My Awesome" crossOrigin="anonymous" />
        </div>
    )
}
Image.propTypes = {
    show: PropTypes.func,
    index: PropTypes.number,
    image: PropTypes.string,
    handleRemove: PropTypes.func,
};
export default Image;