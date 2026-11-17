
import StudentCard from "./studentcard";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Student Details</h1>

      <div className="container">

        <StudentCard
          name="Febius"
          rollno="311824205009"
          department="IT"
          year="3rd Year"
          email="Febius@gmail.com"
        />

        <StudentCard
          name="Sri"
          rollno="311824205047"
          department="CSE"
          year="3rd Year"
          email="Sri@gmail.com"
        />

        <StudentCard
          name="Abisek"
          rollno="31182425003"
          department="ECE"
          year="1st Year"
          email="rahul@gmail.com"
        />

      </div>
    </div>
  );
}

export default App;
