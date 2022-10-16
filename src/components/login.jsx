import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    let nav=useNavigate();
    let[info,updateValue]=useState({id:'',pwd:''});
    const change=(e)=>{
        updateValue({...info,[e.target.name]:e.target.value})

    }
    const submit=(e)=>{
    
         
        e.preventDefault();
        if(info.id==="admin" && info.pwd==="12345"){
            nav("/adminhome")
        }else{
            alert("Invalid Credentials")
        }
        
    }
    return(
        <>
          <br/><div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-6 " style={{height:'600px',width:'500px'}}>
                <form  onSubmit={submit}>
                    <table className="table table-bordered table-striped bg-dark text-info text-centre">
                        <thead className="text-center">
                            <tr>
                                <th colspan="2" className="text-center">Admin Login</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>
                                <span className="text-white">ID</span>
                                </td>
                                <td>
                                <input type="text" name='id' value={info.name} onChange={change}/>
                                </td>
                            </tr>
                            
                            <tr>
                                <td><span className="text-white" >Password</span></td>
                                <td><input type="password" name="pwd" value={info.pwd} onChange={change}/></td>
                            </tr>
                            
                            <tr>
                                <td colspan="2" className="text-center"><button className="btn btn-secondary text-white text-centre">Submit</button></td>
                                
                            </tr>

                        </tbody>


                    </table>
               
                </form>

            </div>

          </div>
          </>
    )
}
export default Login;