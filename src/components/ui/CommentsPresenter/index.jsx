import Comment from "@ui/Comment";
import emptyCommentImage from "@assets/comment_empty.png";
import styles from "./styles.module.css";

function CommentsPresenter({ comments }) {
  return (
    <div>
      {comments.length === 0 ? (
        <div className={styles.layout}>
          <img
            className={styles.image}
            src={emptyCommentImage}
            alt="문의가 없습니다."
          />
          <div className={styles.info}>아직 문의가 없습니다.</div>
        </div>
      ) : (
        comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))
      )}
    </div>
  );
}

export default CommentsPresenter;
