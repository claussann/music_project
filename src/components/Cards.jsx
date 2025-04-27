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
        img: 'img_rock.png',
        modalMusicType: "Rock",
        emoji: "🤘🏼🎸",
        navigateTo: "/Rock"
    },
    {
        genere: "Pop",
        img: 'img_pop.png',
        modalMusicType: "Pop",
        emoji: "🎤🎶",
        navigateTo: "/Pop"

    },
    {
        genere: "Reggae",
        img: 'img_reggae.png',
        modalMusicType: "Reggae",
        emoji: "🌴🌿",
        navigateTo: "/Reggae"

    },
    {
        genere: "Jazz",
        img: 'img_jazz.png',
        modalMusicType: "Jazz",
        emoji: "🎷✨",
        navigateTo: "/Jazz"

    },
    {
        genere: "Rap",
        img: 'img_rap.jpg',
        modalMusicType: "Rap",
        emoji: "🎧🎵",
        navigateTo: "/Rap"

    },
    {
        genere: "Electronic",
        img: 'img_electronic.png',
        modalMusicType: "Electronic",
        emoji: "⚡🎵",
        navigateTo: "/Electronic"

    }
]
let modalMusicType;
let emoji;

function Cards() {
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()
    const goTo = (genere) => {
        modalMusicType = genere.modalMusicType
        emoji = emoji.emoji
        setShowModal(true)
        setTimeout(() => {
            navigate(genere.navigateTo)
        }, 5000)
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
                    <Button variant="outline-danger" onClick={() => goTo(genere)}>Open page</Button>
                </Card.Body>
            </Card>
            {showModal && <Loading children={`Loading...Sorry, we are building this ${modalMusicType} page! Rock on! ${emoji}`} musicType={modalMusicType} emoji={emoji} />}
        </>
    )
    );
    return <div className='row d-flex justify-content-center text-center'>{generi}</div>
}


export default Cards