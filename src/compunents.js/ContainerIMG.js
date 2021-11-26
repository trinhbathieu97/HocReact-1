import React from 'react'
import {AiOutlineClose} from "react-icons/ai";

const ContainerIMG = ({imgVideo,imgVideo2}) => {
    console.log(imgVideo)
    return (
        <div className = 'video_container ' style = {imgVideo}>
            <div>
                <AiOutlineClose  className = 'video_container-Icon' onClick = {imgVideo2}/>
            <iframe width= '100%' width='900px' height="506px" src="https://www.youtube.com/embed/UM1O-4ll-vU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default ContainerIMG
