import 'bootstrap/dist/css/bootstrap.min.css'
import Typography from '../components/Typography';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Bottone';
import InputPage from '../components/InputPage';

const paragrafi = [
    `La musica rap nasce come voce delle strade, un linguaggio crudo e diretto capace di raccontare realtà spesso ignorate. Nata negli anni '70 nei quartieri del Bronx, a New York, si è evoluta da semplice espressione di protesta a vera e propria forma d’arte. Attraverso rime taglienti, ritmi serrati e beat potenti, il rap ha dato spazio a generazioni di artisti per esprimere rabbia, speranza, orgoglio e identità.`,
    `Nel tempo, il rap ha abbracciato stili diversi, fondendosi con funk, jazz, trap, elettronica e soul, senza mai perdere il suo cuore narrativo. Dai testi impegnati alla celebrazione della vita di strada, dalla critica sociale al puro intrattenimento, ogni rapper costruisce un mondo fatto di flow, barre e presenza scenica. È un genere che si reinventa continuamente, senza confini rigidi, e che ha saputo imporsi anche nel mainstream senza perdere le sue radici.`,
    `Oggi il rap è una cultura globale. È moda, è linguaggio, è atteggiamento. Va oltre la musica, influenzando cinema, arte, danza e stile di vita. Dalle battle underground ai palchi dei festival internazionali, il rap continua a essere uno strumento potentissimo di espressione, capace di unire ritmi incalzanti a pensieri profondi, trasformando storie personali in manifesti universali.`
    ]

function Rap() {
    const navigate = useNavigate()
    const backToHome = () => {
        navigate('../Home')
    }
    return (
        <div className="container">
            <div className='row'>
                <Typography title>🎵 RAP_PAGE</Typography>
                <div className='row'>
                    <Typography paragraph>🎧 LA MUSICA RAP </Typography>
                </div>
                <div className='col-8'>
                    <Typography paragraph>{paragrafi[0]}</Typography>
                    <Typography paragraph>{paragrafi[1]}</Typography>
                    <Typography paragraph>{paragrafi[2]}</Typography>
                </div>
                <div className='col-4'>
                    <img className='img-fluid' src="/img_musica_rap.png" alt="" />
                </div>
            </div>
            <InputPage musicType={'Rap'} />
            <div className='row'>
                <Button onClick={backToHome}>Torna alla home</Button>
            </div>
        </div >
    )
}

export default Rap