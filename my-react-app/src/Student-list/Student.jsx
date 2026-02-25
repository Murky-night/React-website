import styles from "./Student.module.css"

let Student = ({ name = "Nariyuki", age = 20, isStudent = true }) => {
  return (
    <div className= {styles.student}>
      <p>Name: {name} Age: {age} Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

export default Student;