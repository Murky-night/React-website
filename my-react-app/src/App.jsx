import Footer from './Footer/Footer';
import Header from './Header';
import TodoApp from './To-do-list/Todo';

function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-400 ease-in-out">
      <Header></Header>
      <TodoApp></TodoApp>
      <Footer></Footer>
    </div>
  );
}

export default App;