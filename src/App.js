import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Typography from './components/Typography';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <div className='container'>
          <Typography title>Music_project</Typography>
          <Cards />
      </div>
    </>
  );
}

export default App;
