import { useState } from "react";
import { useParams } from "react-router-dom";
import AddComment from "@ui/AddComment";
import { postComment } from "@api/api";

function AddCommentContainer({ setIsAdded }) {
  const [content, setContent] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const { id } = useParams();

  const sendComment = async (productId, content) => {
    try {
      setIsDisabled(true);
      await postComment({ productId, content });
      setIsAdded(true);
      setContent("");
    } catch (error) {
      if (error.name === "TypeError") {
        alert("네트워크 에러");
      } else if (error.name === "HttpError") {
        alert(`${error.name}: ${error.status}`);
      } else if (error.name === "Id Error!") {
        alert(error.message);
      }
    }
  };

  const handleChange = (e) => {
    setContent(e.target.value);
    if (e.target.value) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <AddComment
      content={content}
      isDisabled={isDisabled}
      handleClick={() => sendComment(id, content)}
      handleChange={handleChange}
    />
  );
}

export default AddCommentContainer;
