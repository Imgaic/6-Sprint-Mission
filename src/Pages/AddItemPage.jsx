import AddProductFormContainer from "@container/AddProductFormContainer";
import AuthenticatedProfileButton from "@ui/AuthenticatedProfileButton";
import Nav from "@ui/Nav";

function AddItemPage() {
  return (
    <>
      <Nav>
        <AuthenticatedProfileButton />
      </Nav>
      <AddProductFormContainer />
    </>
  );
}

export default AddItemPage;
