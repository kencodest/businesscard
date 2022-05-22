import React from "react";
import { IconContext } from "react-icons";
import { FaTwitterSquare } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"

function Footer(){
    return(
        <IconContext.Provider value={{ size: "2.2rem", color: "#918E9B" }}>
        <div className="footer">
            <a href="#" target="_blank"><FaTwitterSquare /></a>
            <a href="#" target="_blank"><FaFacebookSquare /></a>
            <a href="#" target="_blank"><FaInstagramSquare /></a>
            <a href="#" target="_blank"><FaGithubSquare /></a>
        </div>
        </IconContext.Provider>
        
    )
}

export default Footer