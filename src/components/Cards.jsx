import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Button from './Bottone';
import Card from 'react-bootstrap/Card';
import Loading from './Loading';

import 'bootstrap/dist/css/bootstrap.min.css'
import './Cards.css'

const musicType = [
    {
        genere: "Rock",
        img: 'img_rock.png'
    },
    {
        genere: "Pop",
        img: 'img_pop.png'
    },
    {
        genere: "Reggae",
        img: 'img_reggae.png'
    },
    {
        genere: "Jazz",
        img: 'img_jazz.png'
    },
    {
        genere: "Rap",
        img: 'img_rap.jpg'
    },
    {
        genere: "Electronic",
        img: 'img_electronic.png'
    }
]
let modalMusicType;
let emoji;

function Cards() {
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()
    const goTo = (musicStyle) => {
        if (musicStyle === "Rock") {
            modalMusicType = "Rock"
            emoji = "🤘🏼🎸"
            setShowModal(true)
            setTimeout(() => {
                navigate('/Rock')
            }, 5000)
        } else if (musicStyle === "Pop") {
            modalMusicType = "Pop"
            emoji = "🎤🎶"
            setShowModal(true)
            setTimeout(() => {
                navigate('/Pop')
            }, 5000)
        } else if (musicStyle === "Reggae") {
            modalMusicType = "Reggae"
            emoji = "🌴🌿"
            setShowModal(true)
            setTimeout(() => {
                navigate('/Reggae')
            }, 5000)
        } else if (musicStyle === "Jazz") {
            modalMusicType = "Jazz"
            emoji = "🎷✨"
            setShowModal(true)
            setTimeout(() => {
                navigate('/Jazz')
            }, 5000)
        } else if (musicStyle === "Electronic"){
            modalMusicType = "Electronic"
            emoji = "⚡🎵"
            setShowModal(true)
            setTimeout(() => {
                navigate('/Electronic')
            }, 5000)
        }else if (musicStyle === "Rap"){
            modalMusicType = "Rap"
            emoji = "🎧🎵"
            setShowModal(true)
            setTimeout(() => {
                navigate('/Rap')
            }, 5000)
        }
    }
    const generi = musicType.map(genere => (
        <>
            <Card style={{ maxWidth: '250px', backgroundColor: 'rgba(255, 0, 0, 0)', border: '1px solid red' }} className='card m-5'>
                <Card.Img variant="top" id='imgCard' src={genere.img} />
                <Card.Body>
                    <Card.Title style={{ color: 'red', }}><b>{genere.genere}</b></Card.Title>
                    <Card.Text style={{ color: "grey", fontSize: 15 }}><b>
                        Push the button for open the page
                    </b></Card.Text>
                    <Button variant="outline-danger" onClick={() => goTo(genere.genere)}>Open page</Button>
                </Card.Body>
            </Card>
            {showModal && <Loading children={`Loading...Sorry, we are building this ${musicType} page! Rock on! ${emoji}`} musicType={modalMusicType} emoji={emoji} />}
        </>
    )
    );
    return <div className='row d-flex justify-content-center text-center'>{generi}</div>
}


export default Cards