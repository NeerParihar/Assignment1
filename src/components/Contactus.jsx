import React from "react";
const Contact=()=>{
return(
    <>
    <div className="container-fluid">
    <br/><h1 className="bg-secondary text-white text-center">FELL FREE TO CONTACT US</h1>
    <div className="row">
        
        <div className="col-6">
        <table className="table table-bordered">
        <thead className="bg-light text-dark">
            <tr>
                <th colSpan="2" className="text-center">Contact Form</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span>Name*</span></td>
                <td><input type="text" name="name" /></td>
            </tr>
            <tr>
                <td><span>Email*</span></td>
                <td><input type="email" name="email" /></td>
            </tr>
            <tr>
                <td><span>Subject</span></td>
                <td><input type="text" name="subject" /></td>
            </tr>
            <tr>
                <td><span>Message</span></td>
                <td><textarea></textarea></td>
            </tr>
            <tr className="text-center" >
                <td colSpan="2">
                    <input className="btn btn-dark text-info" type="submit" value="Submit" />
                </td>
                
            </tr>
        </tbody>
    </table>
    
        </div>
        <br/><div className="col-6">
            <h3>Contact Info</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, commodi architecto. Magni accusamus 
                necessitatibus sapiente molestias quos autem? Explicabo, mollitia ducimus. Voluptatibus quibusdam quos esse illo velit voluptates 
                ducimus molestiae.</p>
                <h5>Onhauser Allee </h5>
                   <h5> 125E10435 Berlin ,Germany</h5>
                   <h6>Phone No :- +49 25 737373</h6>
                   <h6>Fax no :- +49 25 252525</h6>
                   <h6>Email :- Email@marinaconsultingDemo.com</h6>
        </div>
    </div>
    </div>
    
   
    </>
    
)
}
export default Contact;