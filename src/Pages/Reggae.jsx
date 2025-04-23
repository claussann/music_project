import 'bootstrap/dist/css/bootstrap.min.css'
import Typography from '../components/Typography';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Bottone';
import InputPage from '../components/InputPage';

const paragrafi = [
    `La musica reggae nasce in Giamaica alla fine degli anni '60, evolvendosi da generi come lo ska e il rocksteady. Caratterizzata da un ritmo lento e cadenzato, in levare, si distingue per l’uso del basso potente, la chitarra sincopata e l’accompagnamento costante della batteria. Il reggae è profondamente legato alla cultura giamaicana e alla spiritualità Rastafariana, che ne ha influenzato sia i testi che l’estetica.`,
    `Oltre al suo suono inconfondibile, il reggae si è affermato come veicolo di messaggi sociali, politici e spirituali. Le sue canzoni parlano spesso di giustizia, pace, resistenza all’oppressione e amore universale. Bob Marley, figura iconica del genere, ha portato il reggae sulla scena mondiale, trasformandolo in un simbolo di lotta e speranza per molti popoli.`,
    `Nel corso degli anni, il reggae ha dato vita a numerosi sottogeneri, come il dub, il dancehall e il roots reggae, influenzando anche artisti di altri stili musicali. Ancora oggi, è apprezzato in tutto il mondo non solo per la sua musicalità rilassata e coinvolgente, ma anche per il suo profondo significato culturale e la capacità di unire le persone attraverso ritmi e valori condivisi.`
]
function Reggae() {
    const navigate = useNavigate()
    const backToHome = () => {
        navigate('../Home')
    }
    return (
        <div className="container">
            <div className='row'>
                <Typography title>🌴 REGGAE_PAGE</Typography>
                <div className='row'>
                <Typography paragraph>🎸 LA MUSICA REGGAE </Typography>
                </div>
                <div className='col-8'>
                <Typography paragraph>{paragrafi[0]}</Typography>
                <Typography paragraph>{paragrafi[1]}</Typography>
                <Typography paragraph>{paragrafi[2]}</Typography>
                </div>
                <div className='col-4'>
                    <img className='img-fluid' src="/img_musica_reggae.png" alt="img" />
                </div>
            </div>
            <InputPage musicType={'Reggae'} />
            <div className='row'>
                <Button onClick={backToHome}>Torna alla home</Button>
            </div>
        </div >
    )
}

export default Reggae