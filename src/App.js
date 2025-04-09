import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Title from './components/Title';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <Title>Music_project</Title>
      <div className='raw d-flex justify-content-center mt-1'>
        <Cards>Rock</Cards>
        <Cards>Pop</Cards>
      </div>
      <div className='raw d-flex justify-content-center mt-1'>
        <Cards>Rap</Cards>
        <Cards>Electronic</Cards>
      </div>
      <div className='raw d-flex justify-content-center mt-1'>
        <Cards>Jazz</Cards>
        <Cards>Reggae</Cards>
      </div>
    </>
  );
}

export default App;
