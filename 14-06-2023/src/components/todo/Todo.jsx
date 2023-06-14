import "./index.css";
import Button from "../button/Button";

const Todo = ({ data }) => {
  return (
    // <div className="Todo">
    <div className={`Todo ${data.completed}`}>
      <p>{data.id}</p>
      <h3>{data.todo}</h3>
      <div className="Todo__actions">
        <Button textContent="Complete" />
        <Button textContent="Delete" isDelete={true} />
      </div>
    </div>
  );
};

export default Todo;