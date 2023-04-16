import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const EditPart = () => {
    let[id,setId]=useState("")
    let[name,setName]=useState("")
    let[age,setAge]=useState("")
    let[location,setLocation]=useState("")

    let handleSubmit=(e)=>{
        e.preventDefault()
        let data ={id,name,age,location}
        if (id && name  && age && location) {
            axios.post("http://localhost:4000/add-partcipants",data)
            .then((res) =>{
                alert(res.data.message)
            }).catch(err=>{
                alert(err.data.message)
            })
        } else {
            alert("Please fill all the fields")
        }
    }
    let[partcipants,setPartcipants]=useState([])
    useEffect(()=>{
        let fetchData = async() =>{
            let res = await axios.get("http://localhost:4000/partcipants")
            let data = await res.data
            setPartcipants(data)
        }
        fetchData()
    },[])
    return ( 
        <div className="createTour">
            <h1>Edit partcipants</h1>
            <div className="addpost ">
                <div className="new1 ">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="same">
                            <label htmlFor="">ID:</label> <br />
                            <input className="form-control " type="text" placeholder={partcipants.id} value={id} onChange={(e) =>setId(e.target.value)} name="id"/>
                        </div>
                        <div className="same ">
                            <label htmlFor="">Name:</label> <br />
                            <input className="form-control " type="text" placeholder="name " value={name} onChange={(e) => setName(e.target.value)} name="name"/>
                        </div>
                        <div className="same">
                            <label htmlFor="">Age:</label> <br />
                            <input className="form-control" name="age"  placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} ></input>
                        </div>
                        <div className="same">
                            <label htmlFor="">Location:</label> <br />
                            <input className="form-control " type="text" placeholder="location" value={location} onChange={(e) => setLocation(e.target.value)} name="location"/>
                        </div>
                        <button className="btn btn-warning">Submit Post</button>
                    </form>
                </div>
            </div>
        </div>
        
     );
}
 
export default EditPart;