import 'bootstrap/dist/css/bootstrap.min.css'
import Typography from '../components/Typography';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Bottone';
import InputPage from '../components/InputPage';

const paragrafi = [
    `La musica elettronica è un universo sonoro che nasce dall’interazione tra creatività umana e tecnologia. Utilizzando sintetizzatori, drum machine, campionatori e software digitali, i produttori riescono a creare paesaggi sonori unici, spesso impossibili da ottenere con strumenti tradizionali. Dalle prime sperimentazioni negli anni '60 fino alle attuali produzioni ultramoderne, la musica elettronica ha costantemente spinto i confini del suono, trasformando il modo in cui viviamo la musica.`,
    `Questo genere si declina in una vasta gamma di stili e sottogeneri, ognuno con la propria identità e atmosfera: dalla techno pulsante delle piste di Berlino, alla trance emotiva, passando per la dubstep, l’ambient e la house. Ogni sottogenere ha una funzione diversa: far ballare, far viaggiare con la mente o persino rilassare. L'elettronica, più di altri generi, si presta alla sperimentazione, facendo da ponte tra arte, scienza e innovazione.`,
    `Oltre all’influenza musicale, la musica elettronica ha lasciato un segno profondo sulla cultura contemporanea, ispirando movimenti sociali, estetiche visive e persino modi di pensare. È una forma d’arte in continua evoluzione, capace di raccontare il futuro, di rappresentare il presente e di reinventarsi costantemente. Che sia in un festival affollato, in cuffia durante un viaggio, o come sottofondo di una serata rilassata, l’elettronica è un viaggio sensoriale senza fine.`
]

function Electronic() {
    const navigate = useNavigate()
    const backToHome = () => {
        navigate('../Home')
    }
    return (
        <div className="container">
            <div className='row'>
                <Typography title>ELECTRONIC_PAGE</Typography>
                <div className='row'>
                    <Typography paragraph> ⚡ LA MUSICA ELECTRONIC </Typography>
                </div>
                <div className='col-8'>
                    <Typography paragraph>{paragrafi[0]}</Typography>
                    <Typography paragraph>{paragrafi[1]}</Typography>
                    <Typography paragraph>{paragrafi[2]}</Typography>
                </div>
                <div className='col-4'>
                    <img className='img-fluid' src="/img_musica_electronic.png" alt="" />
                </div>
            </div>
            <InputPage musicType={'Electronic'} />
            <div className='row'>
                <Button onClick={backToHome}>Torna alla home</Button>
            </div>
        </div >
    )
}

export default Electronic