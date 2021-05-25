import React, {useState,useEffect,useRef} from "react";

import "./assets/css/style.css";
import Images from "./components/Images";



// class App extends React.Component{

//     constructor(props){
//         super(props);

//         this.state = {title:"Hello Bijay Chapagain and bishal Chapagain", isShowing: false };
//     }

//     states are immutable 

// componentDidMount() {
//     console.log("App Mounted");
//     // this.setState({ title: "hello lifeCycle"});
// }
// componentDidUpdate() {
//     console.log("App Updated");
// }


// handleClick = () => 
// {
//     this.setState({ isShowing : !this.state.isShowing })
// }

//     render()
//     {
//         console.log("App Render");
//         return (
//             <section className="flex justify-center">
//                 <div className="w-1/2">
//                     <div className="text-center">
//                     <div className="my-4">{this.state.title}</div>
//                     <button className="p-1 bg-blue-700 text-white my-2" onClick={this.handleClick}>Toggle image</button>
//                     </div>
//                     {this.state.isShowing ? <Images /> : null}
//                 </div>
//             </section>
//         );
//     }
// }

function App() {
    const [title, setTitle] = useState("Hello React");

    return (
    <section className="flex justify-center">
        <div className="w-10/12">
            <div className="text-center">
                <div className="my-4">{title}</div>
                <Images />
            </div>
        </div>
    </section>
    );
}

export default  App;