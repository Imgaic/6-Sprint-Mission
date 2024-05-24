import emptyCommentImage from "../../assets/comment_empty.png";
import Comment from "../Comment";
import styles from "./styles.module.css";

function CommentsPresenter({ comments }) {
  return (
    <div className={styles.layout}>
      {comments ? (
        comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))
      ) : (
        <div>
          <img src={emptyCommentImage} alt="문의가 없습니다." />
          <div>아직 문의가 없습니다.</div>
        </div>
      )}
    </div>
  );
}

export default CommentsPresenter;
