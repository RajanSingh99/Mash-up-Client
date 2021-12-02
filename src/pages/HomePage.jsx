import React from 'react'
// import './homepage.css'
import {Card,Button} from "react-bootstrap"

export default function Homepage(props) {
    
    const videos=[{title:"Sooryavanshi" },{title:"Sooryavanshi"},{title:"Sooryavanshi"}]
    
    const renderCard=(card,index)=>{
       return( <div className="movie" ><Card style={{ width: '18rem', height:"20rem"}} key={{index}}>
                    <Card.Img variant="top" src="holder.js/100px120" src="https://www.pinkvilla.com/imageresize/sooryavanshi_4.jpg?width=752&format=webp&t=pvorg"/>
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>
                            {card.Des}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card></div>
       )
    };
    return (
        <div className="App">
            <div className="Header-Home">
                <h1>Mash<span className="span">UP</span></h1>
            </div>
            <div className="content-home">
                
                {videos.map(renderCard)}
            </div>
        </div>
    )
}
