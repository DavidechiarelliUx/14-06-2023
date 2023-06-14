import "./index.css";
const Button = ({ textContent, isDelete = false }) => {
    return (
      <button className={`Button ${isDelete ? "deleteBtn" : "completedBtn"}`}>
        {textContent}
      </button>
    );
  };


export default Button;