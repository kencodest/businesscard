import React from "react";


function Footer(){
    const date = new Date()
    const year = date.getFullYear()

    return(
        <div className="footer">
            <p><span>&copy;</span> {year} All Rights Reserved | <a href="https://github.com/kencodest/businesscard" target="_blank" rel="noreferrer noopener">kencodest</a></p>
        </div>
        
    )
}

export default Footer