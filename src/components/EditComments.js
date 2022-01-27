import axios from "axios";
import React,{Fragment, useState} from "react";
import { Navigate } from "react-router-dom";



const EditComment = ({comList}) => {

    const [description, setDescription] = useState(comList.description)
    const [redirect, setRedirect] = useState(false);
    
    const updateDescription = async (e) =>{

        e.preventDefault()
        try {
            const body = {description}
            const response = await fetch(`https://capstoneapinodejs.herokuapp.com/comments/${comList.id}`,
            {
                method: "PUT",
                headers:{"Content-Type":
                "application/json"},
                body: JSON.stringify(body)
            })
            setRedirect(true);
        } catch (err) {
            console.error(err.message)
        }

    } 
    if (redirect) {
      return (
        <>
          <Navigate to={"/comments"}/>
        </>
      );
    }

    
    return(
        <Fragment>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target= {`#id${comList.id}`}>
  Edit
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id = {`id${comList.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"onClick={() => setDescription (comList.description)}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Edit Comment</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setDescription (comList.description)}></button>
      </div>
      <div className="modal-body">
        <input type='text' className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"onClick={() => setDescription (comList.description)}>Close</button>
        <button type="button" className="btn btn-primary" onClick={e => updateDescription(e)}>Save changes</button>
      </div>
    </div>
  </div>
</div>
{/* <div class="" id = {`id${comList.id}`} tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
        </Fragment>
    )
}

export default EditComment;