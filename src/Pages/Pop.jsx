import 'bootstrap/dist/css/bootstrap.min.css'
import Typography from '../components/Typography';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Bottone';
import InputPage from '../components/InputPage';

const paragrafi = [
    `La musica pop, abbreviazione di "popular music", è un genere nato a metà del XX secolo, pensato per raggiungere un vasto pubblico attraverso melodie orecchiabili, ritmi semplici e testi immediati. È caratterizzata da una struttura delle canzoni facilmente riconoscibile (strofa, ritornello, bridge) e dall’uso di sonorità accattivanti che si prestano alla trasmissione radiofonica e alla diffusione nei media.`,
    `Con il passare degli anni, il pop ha saputo assorbire influenze da molti altri generi, come il rock, il funk, l’elettronica e l’hip-hop, rimanendo sempre al passo con i gusti delle nuove generazioni. Icone come Michael Jackson, Madonna, Britney Spears e più recentemente artisti come Taylor Swift, Dua Lipa o Harry Styles, hanno plasmato l’evoluzione di questo stile, rendendolo estremamente vario e dinamico.`,
    `La forza della musica pop risiede nella sua capacità di comunicare emozioni semplici e universali: l’amore, la giovinezza, la libertà e la spensieratezza. È una musica che accompagna la quotidianità, spesso legata a videoclip colorati, coreografie, e tendenze culturali, diventando colonna sonora di mode, generazioni e momenti di vita condivisi.`
]

function Pop() {
    const navigate = useNavigate()
    const backToHome = () => {
        navigate('../Home')
    }
    return (
        <div className="container">
            <div className='row'>
                <Typography title>POP_PAGE</Typography>
                <div className='row'>
                    <Typography paragraph>🎤 LA MUSICA POP </Typography>
                </div>
                <div className='col-8'>
                    <Typography paragraph>{paragrafi[0]}</Typography>
                    <Typography paragraph>{paragrafi[1]}</Typography>
                    <Typography paragraph>{paragrafi[2]}</Typography>
                </div>
                <div className='col-4'>
                    <img className='img-fluid' src="/img_musica_pop.png" alt="" />
                </div>
            </div>
            <InputPage musicType={'Pop'} />
            <div className='row'>
                <Button onClick={backToHome}>Torna alla home</Button>
            </div>
        </div >
    )
}

export default Pop