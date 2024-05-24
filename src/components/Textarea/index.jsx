import styles from "./styles.module.css";

function Textarea({ className, content, handleChange }) {
  return (
    <textarea
      className={styles[className]}
      value={content}
      onChange={handleChange}
      placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
    ></textarea>
  );
}

export default Textarea;
