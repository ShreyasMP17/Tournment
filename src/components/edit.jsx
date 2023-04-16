import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

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
    let[tournment,setTournment]=useState([])
    useEffect(()=>{
        let fetchData = async() =>{
            let res = await axios.get("http://localhost:4000/tournment")
            let data = await res.data
            setTournment(data)
        }
        fetchData()
    },[])
    return ( 
        <div className="createTour">
            <h1>Create Tournments</h1>
            <div className="addpost ">
                <div className="new1 ">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="same">
                            <label htmlFor="">ImageURL</label> <br />
                            <input className="form-control " type="text" placeholder={tournment.image} value={image} onChange={(e) =>setImage(e.target.value)} name="image"/>
                        </div>
                        <div className="same ">
                            <label htmlFor="">Name</label> <br />
                            <input className="form-control " type="text" placeholder="name of the post" value={name} onChange={(e) => setName(e.target.value)} name="name"/>
                        </div>
                        <div className="same">
                            <label htmlFor="">Date</label> <br />
                            <input className="form-control" name="date"  placeholder="Summmary" value={date} onChange={(e) => setDate(e.target.value)} ></input>
                        </div>
                        <div className="same">
                            <label htmlFor="">Time</label> <br />
                            <input className="form-control " type="text" placeholder="time" value={time} onChange={(e) => setTime(e.target.value)} name="time"/>
                        </div>
                        <button className="btn btn-warning">Submit Post</button>
                    </form>
                </div>
            </div>
        </div>
        
     );
}
 
export default CreateTour;