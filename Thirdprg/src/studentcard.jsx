function StudentCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p><b>Roll No:</b> {props.rollno}</p>
      <p><b>Department:</b> {props.department}</p>
      <p><b>Year:</b> {props.year}</p>
      <p><b>Email:</b> {props.email}</p>
    </div>
  );
}

export default StudentCard;