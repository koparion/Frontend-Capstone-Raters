import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';


 
const CommentList = () =>
{
    const [comList,setComList] = useState([])

    const getComments = async () =>
    {
        try {
            const url = "http://localhost:5000/comments"
             axios.get(url).then(async ( response) => 
            {
                const data = JSON.stringify(response.data)
                setComList(data) 
                console.log(comList) 
        })
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
                    {/* {comList.map(comm =>(
                        <div key={comm.id}>
                            <p>{comm.description} {comm.stars}</p>
 
                        </div>
                    ))} */}


                    <p>Something should work</p>
            </div>
        </Fragment>
    )
}

export default CommentList