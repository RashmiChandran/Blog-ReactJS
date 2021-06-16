import React, { useEffect, useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { FaEdit,FaTrashAlt } from "react-icons/fa";
import AddArticleModal from './AddArticleModal';


const CommentsSection = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');
  var commentsParentId = id;
  useEffect(() => {
    const getComments = async () => {
      const commentsList = await fetchComments();
      setComments(commentsList);
    };
    getComments();
  }, []);

  //Add method

  const addComments = async (comment) => {
   
    const reqBody =
      {
        "user": "Anonymous",
        "message": comment.text,
        "date": "January 26th, 2020",
        "isEdited": false,
        "parentId": commentsParentId
      }
      console.log(reqBody,commentsParentId)
    const res = await fetch(`http://localhost:4000/comments`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });

    const data = await res.json();
    console.log(data,comments)
    setComments([...comments, data]);
  };

  const onSubmitForm = (e) => {
    e.preventDefault()
    if (!text) {
        alert('Please enter a comments')
        return 
    }
    console.log(text)
    addComments({ text })
    setText('')
    
}
  const editComment = async(item) => {
    const res = await fetch(`http://localhost:4000/comments/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    });

  }
  const deleteComment = async (item) => {
    const res = await fetch(`http://localhost:4000/comments/${item.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const commentsList = await fetchComments();
    setComments(commentsList);
  }
  const [modalState,setModalState] = useState({
    show: false,
    activeItem: {} 
  });
  const showModal = (item) => {
    setModalState({ show: true, activeItem: item });
  };

  const hideModal = (updatedItem) => {
    console.log("commentUpdated", updatedItem)
    setModalState({ show: false, activeItem: {} });
    editComment(updatedItem)
  };

  const fetchComments = async () => {
    const res = await fetch(`http://localhost:4000/comments?parentId=${commentsParentId}`);
    const data = await res.json();
    return data;
  };

  
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <img src="assets/user-placeholder.jpg" className="user-image"></img>
          </InputGroupAddon>
          <Input placeholder="Write a comment" type="textarea"  value={text} onChange={(e) =>  setText(e.target.value)}/>
          <Button className="post-button">Post</Button>
        </InputGroup>
      </form>
      {comments && comments.length ? (
        <div>
          {comments.map((commentItem) => [
            <Card className="p-0" key={commentItem.id}>
              <CardBody className="text-left">
                <img
                  src="assets/user-placeholder.jpg"
                  className="user-image float-left rounded-circle"
                ></img>
                <div className="comments-icon" >
                  <FaEdit className="mr-3" onClick={()=>showModal(commentItem)}/>
                  <FaTrashAlt onClick={()=>deleteComment(commentItem)}/>
                </div>
                <CardTitle tag="h5">{commentItem.user}</CardTitle>
                <CardText>{commentItem.message}</CardText>
              </CardBody>
             
            </Card>
            ,
          ])}
           <AddArticleModal show={modalState.show} commentData={modalState.activeItem} handleClose={hideModal}>
              </AddArticleModal>
        </div>
      ) : (
        <div className="text-left">No Comments</div>
      )}
    </div>
  );
};

export default CommentsSection;
