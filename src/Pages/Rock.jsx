import 'bootstrap/dist/css/bootstrap.min.css'
import Typography from '../components/Typography';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Bottone';
import InputPage from '../components/InputPage';

const paragrafi = [
    `La musica rock è un genere nato negli Stati Uniti alla fine degli anni '40 e sviluppatosi nei decenni successivi. 
    Deriva principalmente dal rock and roll, dal rhythm and blues e dalla musica country, e si distingue per l'uso predominante della chitarra elettrica, accompagnata da basso, batteria e voce.`,
    `Fin dagli esordi, il rock è stato sinonimo di energia, ribellione e libertà espressiva. Negli anni '60 e '70 ha conosciuto un'enorme diffusione globale, grazie a band leggendarie come The Beatles, The Rolling Stones, Led Zeppelin e Pink Floyd, che hanno contribuito a definirne le sonorità e a sperimentare nuove forme musicali.`,
    `Con il tempo, il rock si è evoluto in molti sottogeneri, tra cui il punk rock, l’hard rock, il grunge, l’indie rock e il rock alternativo, ognuno con le proprie caratteristiche e influenze culturali. Oltre alla musica, il rock ha influenzato profondamente la moda, l’arte e il pensiero giovanile, diventando uno dei movimenti più significativi del Novecento.`]

function Rock() {
    const navigate = useNavigate()
    const backToHome = () => {
        navigate('../Home')
    }
    return (
        <div className="container">
            <div className='row'>
                <Typography title>ROCK_PAGE</Typography>
                <div className='row'>
                    <Typography paragraph>🎸 LA MUSICA ROCK </Typography>
                </div>
                <div className='col-8'>
                    <Typography paragraph>{paragrafi[0]}</Typography>
                    <Typography paragraph>{paragrafi[1]}</Typography>
                    <Typography paragraph>{paragrafi[2]}</Typography>
                </div>
                <div className='col-4'>
                    <img className='img-fluid' src="/img_musica_rock.png" alt="" />
                </div>
            </div>
            <InputPage musicType={'Rock'}/>
            <div className='row'>
                <Button onClick={backToHome}>Torna alla home</Button>
            </div>
        </div >
    )
}

export default Rock