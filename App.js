import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const[img,setImg]=useState("");
 const url=`https://source.unsplash.com/400x300/?${img}`;
  const func1=(e)=>{
    setImg(e.target.value);
    console.log(e.target.value);
  }
 
  return (
   <div>
    <input
      value={img}
      placeholder="Search Anything"
      type="text"
     onChange={func1}
    />
    <img src={url}></img>

    </div>
  
  );
}

export default App;
