import AddProductFormContainer from "../components/container/AddProductFormContainer";
import AuthenticatedProfileButton from "../components/ui/AuthenticatedProfileButton";
import Nav from "../components/ui/Nav";

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
