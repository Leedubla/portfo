import React from "react";


function Contact() {
  return (
    <div class="jumbtron">
      <form>
        <div class="form-group">
          <h1>Contact</h1>
        </div>
        <div class="form-group">
          <label for="exampleInputName1">Name</label>
          <input type="name" class="form-control" id="exampleInputEmail1" placeholder="Your Name"
            aria-describedby="emailHelp" />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputPassword1"
            placeholder="youremail@address.com" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message"
            rows="3"></textarea>
        </div>
      </form>
    </div>
  );
}

export default Contact;
