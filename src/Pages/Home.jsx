import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Typography from '../components/Typography';
import Cards from '../components/Cards';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Bottone';

function Home() {
    const navigate = useNavigate()
    const logOut = () => {
        navigate('/')
    }
    return (
        <>
            <div className='container'>
                <div className='row d-flex'>
                    <div className='col-12'>
                        <Typography title>Music_project</Typography>
                    </div>
                </div>
                <Cards />
            </div>
            <div className='row m-2 d-flex justify-content-end'>
                <Button onClick={logOut}>logOut</Button>
            </div>
        </>
    );
}

export default Home;