import React from "react";


function Contact() {
  return (
    <div className="jumbtron">
      <form>
        <div className="form-group">
          <h1>Contact</h1>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName1">Name</label>
          <input type="name" className="form-control" id="exampleInputEmail1" placeholder="Your Name"
            aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputPassword1"
            placeholder="youremail@address.com" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message"
            rows="3"></textarea>
        </div>
      </form>
    </div>
  );
}

export default Contact;
