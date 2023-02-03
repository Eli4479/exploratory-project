import "./components_css/button.css"
import { Link } from "react-router-dom";
export default function Buttons() {
  return (
    <div className="flex w-full justify-evenly ">
      <Link to={'/student_attendance'}>
        <button className="btnn">see particular student attendance</button>
      </Link>
      <Link to={'/camera'}>
        <button className="btnn">add a student</button>
      </Link>
      <button className="btnn">add a course</button>
    </div>
  );
}