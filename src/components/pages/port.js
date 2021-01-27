import React from "react";

function Portfo() {
    return (
        <div className="jumbotron">

            <h1>Portfolio</h1>

            <div className="row" id="container">
                <img src="images/img1.JPG" alt="thingys" width="350px" height="350px"  /> <img
                    src="images/img6.JPG" alt="thingythang" width="350px" height="350px" />
            </div>
            <div className="row" id="container">
                <img src="images/img3.JPG" alt="thing one" width="350px" height="350px" /><img
                    src="images/img4.JPG" alt="thingy" width="350px" height="350px" />
            </div>
            <div className="row" id="container">
                <img src="images/img5.JPG" alt="thing" width="350px" height="350px" />
            </div>
        </div>
    );
}
export default Portfo;