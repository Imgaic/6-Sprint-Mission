import AddProductImageContainer from "../../container/AddProductImageContainer";
import Button from "../Button";
import styles from "./styles.module.css";

function AddProductForm({
  isDisabled,
  tags,
  handleChange,
  handleKeyUp,
  handleDelete,
}) {
  return (
    <div className={styles.layout}>
      <div className={styles.buttonAligner}>
        <h2 className={styles.subHeading}>상품 등록하기</h2>
        <Button type="button" className={"button"} disabled={isDisabled}>
          등록
        </Button>
      </div>
      <div>
        <form className={styles.formLayout}>
          <div>
            <div className={styles.label}>상품 이미지</div>
            <AddProductImageContainer />
          </div>
          <InputContainer
            id="name"
            label="상품명"
            placeholder="상품명을 입력해주세요"
            onChange={handleChange}
          />
          <InputContainer
            id="introduction"
            label="상품 소개"
            type="textarea"
            placeholder="상품 소개를 입력해주세요"
            onChange={handleChange}
          />
          <InputContainer
            id="price"
            label="판매가격"
            placeholder="판매 가격을 입력해주세요"
            onChange={handleChange}
          />
          <InputTag
            id="tags"
            label="태그"
            placeholder="태그를 입력해주세요"
            onKeyUp={handleKeyUp}
            onDelete={handleDelete}
            tags={tags}
          />
        </form>
      </div>
    </div>
  );
}

export default AddProductForm;
