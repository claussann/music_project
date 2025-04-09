import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Title from './components/Title';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <div className='container'>
        <Title>Music_project</Title>
        <div className='row d-flex justify-content-center'>
          <Cards>Rock</Cards>
          <Cards>Pop</Cards>
          <Cards>Jazz</Cards>
        </div>
        <div className='row d-flex justify-content-center'>
          <Cards>Rap</Cards>
          <Cards>Electronic</Cards>
          <Cards>Reggae</Cards>
        </div>
      </div>
    </>
  );
}

export default App;
