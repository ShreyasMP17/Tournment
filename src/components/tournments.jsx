import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/tournment.css"

const Tournments = () => {


    let[tournment,setTournment]=useState([])

    useEffect(()=>{
        let fetchData = async() =>{
            let res = await axios.get("http://localhost:4000/tournment")
            let data = await res.data
            setTournment(data)
        }
        fetchData()
    },[])
    let handleClick = (_id,name)=>{
        setTournment(tournment.filter(s=>s._id!=_id))
        alert(`${name} has been deleted`)
    }
    return ( 
        <div className="tour">
            <div className="create">
            <Link to={`/create-tournment`} className="btn btn-success rounded-1 homeBtn">Create Tournments &gt;</Link>
            </div>
            <div className="postList d-flex flex-wrap justify-content-around ">
        {tournment.map(data =>(
            <div className="post mb-4" key={data._id}>
            <img src={data.image} className="postImage rounded-3 mt-5" width="400" height="220" alt="" /> 
            <div className="info mt-3">
                <h2 style={{ fontFamily: "inherit" }}>{data.name}</h2>
                <h6 className="text-secondary"> {data.date}</h6>
                <p className="text-secondary"> {data.time}</p>
                <Link to={`/partcipants` } className="btn btn-outline-light rounded-1 homeBtn" >Partcipants</Link>
                <Link to={`/edit/${data._id}` } className="btn btn-outline-warning rounded-1 homeBtn" >Edit</Link>
                <button onClick={()=>handleClick(data._id,data.name)} className="btn btn-outline-danger rounded-1 homeBtn">delete</button>
                <Link to={`/tournments/${data._id}`} className="btn btn-outline-primary rounded-1 homeBtn">View &gt;</Link>
            </div>
        </div>
        ))}
        </div>
                
        </div>
     );
}
 
export default Tournments;