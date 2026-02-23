import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Student from "./Student.jsx";

function App() {
  return(
    <>
      <Header> </Header>
      <Student></Student>
      <Student name="Nam" isStudent = {false}></Student>
      <Student name="Khang" age = {19} isStudent = {true}></Student>  
      <Card></Card>
      <Food></Food>
      <Footer></Footer>
    </>
  );
}

export default App
