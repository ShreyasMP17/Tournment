import { useState } from "react";
import axios from "axios";

const CreateTour = () => {
    let[image,setImage]=useState("")
    let[name,setName]=useState("")
    let[date,setDate]=useState("")
    let[time,setTime]=useState("")

    let handleSubmit=(e)=>{
        e.preventDefault()
        let data ={image,name,date,time}
        if (image && name  && date && time) {
            axios.post("http://localhost:4000/add-tournment",data)
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
            <h1>Create Tournments</h1>
            <div className="addpost ">
                <div className="new1 ">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="same">
                            <label htmlFor="">ImageURL</label> <br />
                            <input className="form-control " type="text" placeholder="image" value={image} onChange={(e) =>setImage(e.target.value)} name="image"/>
                        </div>
                        <div className="same ">
                            <label htmlFor="">Name</label> <br />
                            <input className="form-control " type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} name="name"/>
                        </div>
                        <div className="same">
                            <label htmlFor="">Date</label> <br />
                            <input className="form-control" name="date"  placeholder="date" value={date} onChange={(e) => setDate(e.target.value)} ></input>
                        </div>
                        <div className="same">
                            <label htmlFor="">Time</label> <br />
                            <input className="form-control " type="text" placeholder="time" value={time} onChange={(e) => setTime(e.target.value)} name="time"/>
                        </div>
                        <button className="btn btn-warning">Submit </button>
                    </form>
                </div>
            </div>
        </div>
        
     );
}
 
export default CreateTour;