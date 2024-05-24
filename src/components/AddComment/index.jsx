import Button from "../Button";
import Textarea from "../Textarea";
import styles from "./styles.module.css";

function AddComment({ content, isDisabled, handleClick, handleChange }) {
  return (
    <div className={styles.align}>
      <div className={styles.separator}>
        <div className={styles.label}>문의하기</div>
        <Textarea
          className={"productDetailPage"}
          content={content}
          handleChange={handleChange}
        />
      </div>
      <Button
        className={"productDetailPage"}
        isDisabled={isDisabled}
        handleClick={handleClick}
      />
    </div>
  );
}

export default AddComment;
