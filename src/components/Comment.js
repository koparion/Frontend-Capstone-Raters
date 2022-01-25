import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import './Comment.css'
import EditComment from './EditComments';
 
const CommentList = () =>
{
    const [comList,setComList] = useState([])

    const getComments = async () =>
    {
        try {
            const url = "http://localhost:5000/comments"
             axios.get(url).then(async (response) => 
            {
                const data = await response.data
                setComList(data) 
                console.log(comList) 
        })
        } catch (err) {
            console.error(err.message)
        }

         
    }


    const deleteComments = async (id) => {


        try {
            const removeTodo = await fetch(`http://localhost:5000/comments/${id}`,
            {
                method: "DELETE",
            })
            setComList(comList.filter(comList =>comList.id !== id))
        } catch (err) {
            console.error(err.message)
        }
    }


    useEffect(() => {
        getComments()
    },[]) 

    return(
        <Fragment>
            <div>
            <div className="container mt-3">
    <div className="row d-flex mt-5 justify-content-center">
            </div>
            {comList.map(comm =>(
            <div className="card p-3 mt-3" key={comm.id}>
            
                <div className="d-flex justify-content-between align-items-center">
                    <div className="user d-flex flex-row align-items-left"> <span> <small className="font-weight-bold">{comm.description} </small></span> </div>
                
                <div className="action d-flex justify-content-between mt-2 align-items-center">
                    <div className="icons align-items-center"> <i className="fa fa-star text-warning"></i> <i className="fa fa-check-circle-o check-icon"></i> </div>
                    <div> <small> 2 days ago</small> <small> <EditComment comList={comm}/></small> <button className="btn btn-danger"><small onClick={() => deleteComments(comm.id)}> Delete </small></button></div>
                </div>
                </div>
                
                </div>
                ))}
                </div>
                </div>
        </Fragment>
    )
}

export default CommentList