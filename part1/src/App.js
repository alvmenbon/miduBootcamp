import './App.css';
import Mensaje from './Mensaje';



const Description = () => {
  return <h2>Esta es la app del curso</h2>
}

const App = () => {

  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso' />
      <Mensaje color='yellow' message='De React' />
      <Description />
    </div>
  );
}

export default App;
