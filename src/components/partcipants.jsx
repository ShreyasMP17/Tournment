import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/partcipants.css"

const Partcipants = () => {

    let[partcipants,setPartcipants]=useState([])

    useEffect(()=>{
        let fetchData = async() =>{
            let res = await axios.get("http://localhost:4000/partcipants")
            let data = await res.data
            setPartcipants(data)
        }
        fetchData()
    },[])
    let handleClick = (_id,name)=>{
        setPartcipants(partcipants.filter(s=>s._id!=_id))
        alert(`${name} has been deleted`)
    }

    return ( 
        <div className="part">

            <div className="create">
            <Link to={`/create-Partcipants`} className="btn btn-success rounded-1 homeBtn">Create Partcipants &gt;</Link>
            </div>
            <div className="partList d-flex flex-wrap justify-content-around ">
        {partcipants.map(data =>(
            <div className="part mb-4" >
                <h5>{data.id}</h5>
            <h1>{data.name}</h1>
            <div className="inf mt-3">
                <h2 style={{ fontFamily: "inherit" }}>{data.age}</h2>
                <h3 className="text-secondary"> {data.gender}</h3>
                <p>{data.location}</p>
                <Link to={`/ed/${data._id}` } className="btn btn-outline-warning rounded-1 homeBtn" >Edit</Link>
                <button onClick={()=>handleClick(data._id,data.name)} className="btn btn-outline-danger rounded-1 homeBtn">delete</button>
                <Link to={`/partcipants/${data._id}`} className="btn btn-outline-light rounded-1 homeBtn">View &gt;</Link>
            </div>
        </div>
        ))}
        </div>
        </div>
     );
}
 
export default Partcipants;