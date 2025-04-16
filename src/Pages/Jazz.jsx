import 'bootstrap/dist/css/bootstrap.min.css'
import Typography from '../components/Typography';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Bottone';

const paragrafi = [
    `La musica jazz nasce all'inizio del Novecento negli Stati Uniti, principalmente a New Orleans, dall'incontro tra le tradizioni musicali afroamericane, il blues, il gospel e la musica europea. È una forma d'espressione profondamente legata alla storia e all'identità della comunità nera americana, che ha trasformato il dolore, la gioia e la resistenza in arte. Il jazz, fin dalle sue origini, è stato sinonimo di libertà: libertà di improvvisare, di sperimentare, di uscire dagli schemi.`,
    `Ciò che rende il jazz unico è la sua struttura aperta all'improvvisazione: ogni esecuzione è diversa, ogni musicista contribuisce con la propria voce e sensibilità. Le sue caratteristiche principali sono il ritmo swing, le armonie complesse, il dialogo tra strumenti e l’uso creativo delle variazioni melodiche. Dai quartetti intimi ai big band orchestrali, il jazz spazia da atmosfere rilassate e sognanti a momenti di pura energia e virtuosismo.`,
    `Nel corso del tempo, il jazz si è evoluto in numerosi sottogeneri – dal bebop al cool jazz, dal fusion all’avant-garde – influenzando profondamente la musica contemporanea. Ha attraversato oceani, contaminato altri generi e ispirato artisti in tutto il mondo. Oggi il jazz è suonato nei club, nei conservatori, nei festival internazionali ed è riconosciuto come uno dei patrimoni musicali più importanti del XX secolo. Più che un genere, il jazz è un linguaggio universale fatto di emozione, creatività e ascolto reciproco.`
]

function Jazz() {
    const navigate = useNavigate()
    const backToHome = () => {
        navigate('../Home')
    }
    return (
        <div className="container">
            <div className='row'>
                <Typography title>🎷 JAZZ_PAGE</Typography>
                <div className='row'>
                    <Typography paragraph>🎤 LA MUSICA JAZZ </Typography>
                </div>
                <div className='col-8'>
                    <Typography paragraph>{paragrafi[0]}</Typography>
                    <Typography paragraph>{paragrafi[1]}</Typography>
                    <Typography paragraph>{paragrafi[2]}</Typography>
                </div>
                <div className='col-4'>
                    <img className='img-fluid' src="/img_musica_jazz.png" alt="" />
                </div>
            </div>
            <div className='row'>
                <Button onClick={backToHome}>Torna alla home</Button>
            </div>
        </div >
    )
}

export default Jazz