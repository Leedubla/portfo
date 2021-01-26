import React from "react";

function Runner() {
return (
    <div className="jumbotron">
    <h1 className="display-4">The Runner Game.</h1>
    <p className="lead"> This is the second group project I got the opertunity to work on. 
        My group decided to work on a Web App game. Our game includes the following: PIXIJS, NODE, EXPRESS, Mysql, Eslynt, and was deployed on Heroku.
        I found working with PIXIJS very challenging as it was a new concept as my group and I were unfamiliar with the documentation. 
        After awhile of studying I was able to understand a lot more than starting off. I mainly worked on the background image but alos worked on the backend and debugging errors.
    </p>
    <hr className="my-4"></hr>
    <p>Heroku App</p>
    <a className="btn btn-dark btn-md" href="https://blooming-spire-21723.herokuapp.com/"
        role="button">The Runner Game</a>
        <p>Here is a link to the Repository.</p>
        <a className="btn btn-dark btn-md" href="https://github.com/RandyLofgren/Runner-Game"
            role="button">Repository</a>
</div>
);
}
export default Runner;