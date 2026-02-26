import Header from "./Header.jsx"
import Footer from "./Footer/Footer.jsx";
import Food from "./Food-list/Food.jsx";
import Card from "./In4-card/Card.jsx";
import Student from "./Student-list/Student.jsx";
import UserGreeting from "./User-greeting/UserGreeting.jsx";
import MyComponent from "./Use State hook/Use-state.jsx";
import DeliveryDetails from "./Delivery details/Delivery.jsx";

function App() {
  
  const fruits =   [{id: 1, name: "Orange", price: 10},
                    {id: 2, name: "Apple", price: 50},
                    {id: 3, name: "Banana", price: 100},
                    {id: 4, name: "Watermelon", price: 120},
                    {id: 5, name: "Grape", price: 20}];

  const drinks =   [{id: 6, name: "Pepsi", price: 30},
                    {id: 7, name: "Sprite", price: 45},
                    {id: 8, name: "Fanta", price: 65},
                    {id: 9, name: "Coca cola", price: 80},
                    {id: 10, name: "Dr Pepper", price: 25}];

  return(
    <>
      <Header> </Header>
      <UserGreeting username = "Nariyuki" isLoggedIn = {true}></UserGreeting>
      <DeliveryDetails></DeliveryDetails>
      <Student></Student>
      <MyComponent></MyComponent>
      <Card></Card>
      <Food items = {fruits} category = "Fruits"></Food>
      <Food items = {drinks} category = "Drinks"></Food>
      <Footer></Footer>
    </>
  );
}

export default App
