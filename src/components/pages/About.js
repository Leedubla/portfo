import React from "react";

function About() {
  return (
    <div >
    <h1>About Me</h1>

    <img src="images/img.bearddark.JPG" alt="me in the dark" width="350px" height="350px"
        className="float-left m-3"/>
        <br clear="all"></br>
    <p className="card-text">
        
        Hello! My name is Lucas Winslow. I am 21 years old, and hail from Charlotte, North Carolina. I
        am
        currently a Security Professional with Allied Universal and work in Uptown. However, I am
        currently working on switching careers to pursue a job as a Full Stack Developer.
    </p>
    <p>I am currently taking a course for Coding, and hopefully it is enough to propell me into a future
        of success. Fun tip about me, I really enjoy cooking!
        <br></br>
            Link to this Site: <a className= "btn btn-dark btn-sm" href="https://github.com/Leedubla/Bootstrap-02/blob/main/pass.html" role="button"> My Portfolio</a>
            <br></br>
            <br></br>
            Link to my resume. <a className= "btn btn-dark btn-sm" href={"https://drive.google.com/file/d/1sKZh5F-1IAY-8dG-3ZzT3zU8jzN2Q8UM/view"} role="button" >My Resume</a>
            <br></br>

            Below are links to my websites that are listed on this page.
            <br></br>
            PassWord Generator:  <a className="btn btn-dark btn-sm" href={"https://leedubla.github.io/passwordgen1/"}
            role="button">Deployed Version</a>
            <br>
            </br></p>
            Fuel Finder: <a className="btn btn-dark btn-sm" href= {"https://grantf12.github.io/Alternative_Fuel_Finder/"} role="button">Fuel Finder</a>

    
    </div>
  );
}

export default About;
