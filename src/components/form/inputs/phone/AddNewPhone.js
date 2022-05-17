import "./add-new-phone.css";
export default function AddNewPhone({ nums, setNums, id }) {
  function handleClick() {
    setNums(nums + 1);
  }
  return (
    <button type="button" className="add-new" onClick={handleClick} id={id}>
      Add new phone number
    </button>
  );
}
