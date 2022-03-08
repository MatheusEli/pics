import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {

    return (
        <div>
            <ul className="image-list"
            >
                {props.images.map(image => {
                    return (
                        <li key={image.id}>
                            <ImageCard image={image}/>
                        </li>
                    );
                })}
            </ul>
        </div>
    );

}

export default ImageList;