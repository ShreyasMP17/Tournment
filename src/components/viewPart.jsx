import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/view.css"

const ViewPart = () => {


    
    const[partcipants,setPartcipants]=useState({})
    let params =useParams()
    useEffect(()=>{
        const fetchData = async() =>{
            const res = await axios.get(`http://localhost:4000/partcipants/${params.id}`)
            const data = await res.data
            setPartcipants(data)
            console.log(partcipants);
        }
        fetchData()
    })
    return ( 
        <div className="tour">
            
            <div style={{color:"gray",padding:"32px"}} className="data">
                
                
              <h1>{partcipants.name}</h1> <br />
              <h3>ID:{partcipants.id}</h3>
              <h3>Age:{partcipants.age}</h3>
              <h2>Gender:{ partcipants.gender}</h2>
              <h2>Location:{partcipants.location}</h2>
              <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel sunt repellat ab magni eum harum? Delectus odit aspernatur amet eum modi voluptatem hic commodi eligendi laborum, eos explicabo expedita quo.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi temporibus sit, placeat quidem reiciendis corporis odio at accusantium architecto quod consectetur adipisci repellendus, voluptatibus delectus voluptatem saepe, ratione quasi officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in sit accusantium iure maiores, error laudantium dolore repudiandae, impedit sint consectetur veritatis obcaecati ducimus saepe. Reiciendis quam natus labore dignissimos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus soluta, harum maiores, libero odio doloribus est consequatur earum nesciunt necessitatibus qui debitis rerum in amet commodi ab impedit ipsam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit doloremque ut nulla ex consequatur fugiat rem nesciunt et! Blanditiis, sequi! Mollitia iusto earum in commodi cum. Inventore aliquid ratione ullam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis iure minima quis blanditiis provident non nostrum eos dolores modi, tempora hic molestiae commodi debitis magni omnis, obcaecati quos impedit sequi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatum voluptatem. Deserunt, similique! Placeat alias sunt mollitia fugit ipsa. Fuga hic ut quos beatae animi dolorum distinctio delectus illum doloremque.
              </h4>

            </div>
            
        </div>
                
    
     );
}
 
export default ViewPart;