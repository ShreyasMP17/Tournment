import { useState } from "react";
import axios from "axios";

const CreatePart = () => {

    let[id,setId]=useState("")
    let[name,setName]=useState("")
    let[age,setAge]=useState("")
    let[gender,setGender]=useState("")
    let[location,setLocation]=useState("")

    let handleSubmit=(e)=>{
        e.preventDefault()
        let data ={id,name,age,gender,location}
        if (id && name  && age && gender && location) {
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
    return ( 
        <div className="createTour">
            <h1>Create partcipantss</h1>
            <div className="addpost ">
                <div className="new1 ">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="same">
                            <label htmlFor="">Player-ID</label> <br />
                            <input className="form-control " type="text" placeholder="playerId" value={id} onChange={(e) =>setId(e.target.value)} name="id"/>
                        </div>
                        <div className="same ">
                            <label htmlFor="">Name</label> <br />
                            <input className="form-control " type="text" placeholder="Name " value={name} onChange={(e) => setName(e.target.value)} name="name"/>
                        </div>
                        <div className="same">
                            <label htmlFor="">Age</label> <br />
                            <input className="form-control" name="age"  placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} ></input>
                        </div>
                        <div className="same">
                            <label htmlFor="">Gender</label> <br />
                            <input className="form-control " type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} name="gender"/>
                        </div>
                        <div className="same">
                            <label htmlFor="">Location</label> <br />
                            <input className="form-control " type="text" placeholder="loaction" value={location} onChange={(e) => setLocation(e.target.value)} name="location"/>
                        </div>
                        <button className="btn btn-warning">Submit </button>
                    </form>
                </div>
            </div>
        </div>
        
     );
}
 
export default CreatePart;