import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import {useEffect, useState } from "react";


const AddArticleModal = ({ handleClose, show, children, commentData }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [commentText, setCommentText] = useState();

  useEffect(()=>{
    setCommentText(commentData.message)
  })

  const updateCommentsValue = (val) =>{
    commentData.message = val;
    setCommentText(val)
  }
    return (
      <div className={showHideClassName}>
         
        <div className="modal-main p-3">
        
      <InputGroup className="p-2">
        <Input type="textarea" value={commentText} onChange={(e) =>  updateCommentsValue(e.target.value)}/>
      </InputGroup>
          <Button onClick={()=>handleClose(commentData)}>Close</Button>
          <Button className="post-button" onClick={()=>handleClose(commentData)}>Publish</Button>
        </div>
      </div>
    );
  };

  export default AddArticleModal;