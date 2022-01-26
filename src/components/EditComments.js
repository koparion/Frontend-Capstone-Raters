import axios from "axios";
import React,{Fragment, useState} from "react";




const EditComment = ({comList}) => {

    const [description, setDescription] = useState(comList.description)
    
    
    const updateDescription = async (e) =>{

        e.preventDefault()
        try {
            const body = {description}
            const response = await fetch(`http://localhost:5000/comments/${comList.id}`,
            {
                method: "PUT",
                headers:{"Content-Type":
                "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/"
        } catch (err) {
            console.error(err.message)
        }

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
        </Fragment>
    )
}

export default EditComment