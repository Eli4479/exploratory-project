import "./components_css/button.css"

export default function Buttons() {
  return (
    <div className="flex w-full justify-evenly ">
      <button className="btnn">see particular student attendance</button>
      <button className="btnn">add a student</button>
      <button className="btnn">add a course</button>
    </div>
  );
}