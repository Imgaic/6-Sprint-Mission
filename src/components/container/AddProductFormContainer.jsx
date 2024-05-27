import { useEffect, useState } from "react";

import AddProductForm from "../ui/AddProductForm";

function AddProductFormContainer() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [tags, setTags] = useState([]);
  const [collectedInfo, setCollectedInfo] = useState({
    name: "",
    introduction: "",
    price: "",
  });

  const handleChange = (e) => {
    setCollectedInfo({
      ...collectedInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleKeyUp = (e) => {
    if (
      e.target.value &&
      e.keyCode === 13 &&
      !tags.find((tag) => tag === e.target.value)
    ) {
      setTags((prevTags) => [e.target.value, ...prevTags]);
      e.target.value = "";
    }
  };

  const handleDelete = (tagName) => {
    setTags((prevTags) => prevTags.filter((tag) => tagName !== tag));
  };

  useEffect(() => {
    console.log(collectedInfo);
    console.log(collectedInfo.name);
    collectedInfo.name &&
    collectedInfo.introduction &&
    collectedInfo.price &&
    tags.length
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [collectedInfo, tags]);

  console.log(isDisabled);

  return (
    <AddProductForm
      isDisabled={isDisabled}
      tags={tags}
      handleChange={handleChange}
      handleKeyUp={handleKeyUp}
      handleDelete={handleDelete}
    />
  );
}
export default AddProductFormContainer;
