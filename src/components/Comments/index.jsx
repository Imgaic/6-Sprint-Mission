import CommentsPresenter from "../CommentsPresenter";
import AddCommentContainer from "../containers/AddCommentContainer";
import styles from "./styles.module.css";

function Comments({ comments, setIsAdded }) {
  return (
    <div className={styles.layout}>
      <AddCommentContainer setIsAdded={setIsAdded} />
      <CommentsPresenter comments={comments} />
    </div>
  );
}

export default Comments;
