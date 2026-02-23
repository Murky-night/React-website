let Student = ({ name = "Nariyuki", age = 20, isStudent = true }) => {
  return (
    <div className="student">
      <p>Name: {name} Age: {age} Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

export default Student;