import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/view.css"

const View = () => {


    
    const[tournment,setTournment]=useState({})
    let params =useParams()
    useEffect(()=>{
        const fetchData = async() =>{
            const res = await axios.get(`http://localhost:4000/tournment/${params.id}`)
            const data = await res.data
            setTournment(data)
            console.log(tournment);
        }
        fetchData()
    })
    return ( 
        <div className="tour">
            <div className="new">
            <div className="data">
                <img src={tournment.image} alt="" height="400" width="500" />
              <h1>{tournment.name}</h1>
              <h2>{tournment.date}</h2>
              <h3>{tournment.time}</h3>
            </div>
            <div className="txt">
                <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo harum obcaecati aspernatur voluptatibus dolores dolorem possimus! Saepe officia doloribus hic ipsum molestiae, mollitia omnis reiciendis deleniti cumque culpa laboriosam asperiores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatum rem tempora magnam iste earum quas numquam, illo, nesciunt aliquid expedita nisi minus asperiores consectetur aperiam ex dignissimos sed officia.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam quidem odio, distinctio praesentium molestias deleniti numquam eveniet laudantium fuga animi quo a illum unde molestiae voluptatibus! Ab eius expedita ipsam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sunt, iusto suscipit deleniti dignissimos ut velit. Laborum veritatis fuga tempora quis nobis aut? Harum impedit esse dignissimos voluptatum quisquam assumenda.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita voluptas iure quas molestias cupiditate assumenda nesciunt quaerat, accusamus similique possimus consequatur dignissimos eius exercitationem reiciendis beatae architecto nihil iste.</h5>
            </div>
            </div>
            <Link to='/tournments' className="btn btn-warning btn-md rounded-1 mb-2  homeBtn">&lt; Go back to Tournments</Link>
        </div>
                
    
     );
}
 
export default View;