import styled from "styled-components";
import xButtonIcon from "@assets/icons/ic_X_blue.svg";
import plusIcon from "@assets/icons/ic_plus.svg";
import styles from "./styles.module.css";

const ImagePreview = styled.div`
  display: block;
  position: relative;
  width: 282px;
  height: 282px;
  border-radius: 12px;
  background-color: var(--gray50);

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  ${({ $imageURL }) =>
    $imageURL &&
    `background-image: url(${$imageURL})};
    `}
`;

function AddProductImage({ preview, value, handleChange, handleDeleteClick }) {
  return (
    <div className={styles.flexedImage}>
      <label className={styles.imageInputBox}>
        <div className={styles.imageInputDesign}>
          <img
            className={styles.plusIcon}
            src={plusIcon}
            alt="더하기 버튼"
          ></img>
          <h5 className={styles.phrase}>이미지 등록</h5>
        </div>
        <input
          className={styles.imageInput}
          type="file"
          accept="image/*"
          onChange={handleChange}
        ></input>
      </label>
      {value && (
        <ImagePreview $imageURL={preview}>
          <img
            className={styles.xButtonIcon}
            src={xButtonIcon}
            onClick={handleDeleteClick}
            alt="X 버튼"
          />
        </ImagePreview>
      )}
    </div>
  );
}

export default AddProductImage;
