import React from "react";
import { Carousel } from "react-responsive-carousel";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { render } from "@testing-library/react";
import "./content.css"

class Content extends React.Component{
    render()
    {
        return(
            <>
            <div>
                <h1>React Responsive Carousel Images</h1>
                <Carousel autoPlay interval="1000" transitionTime="1000">
                    <div>
                        <img src="https://i.pinimg.com/736x/2c/8e/98/2c8e981280d108b806c2e07bfbcc15b9.jpg"></img>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"></img>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"></img>
                    </div>
                    <div>
                        <img src="https://wallpaperaccess.com/full/1209275.jpg"></img>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
                    </div>
                </Carousel>
            </div>
            </>
        )
    }
    
}

export default Content;
