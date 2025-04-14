import Button from './Bottone';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';

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

function Cards() {
    const navigate = useNavigate()
    const goTo = (musicStyle) => {
        if (musicStyle === "Rock") {
            navigate('/Rock')
        } else if (musicStyle === "Pop") {
            navigate('/Pop')
        } else if (musicStyle === "Reggae") {
            navigate('/Reggae')
        }
    }
    const generi = musicType.map(genere => (
        <Card style={{ maxWidth: '250px', backgroundColor: 'rgba(255, 0, 0, 0)', border: '1px solid red' }} className='m-5'>
            <Card.Img variant="top" id='imgCard' src={genere.img} />
            <Card.Body>
                <Card.Title style={{ color: 'red', }}><b>{genere.genere}</b></Card.Title>
                <Card.Text style={{ color: "grey", fontSize: 15 }}><b>
                    Push the button for open the page
                </b></Card.Text>
                <Button variant="outline-danger" onClick={() => goTo(genere.genere)}>Open page</Button>
            </Card.Body>
        </Card>
    )
    );
    return <div className='row d-flex justify-content-center text-center'>{generi}</div>
}

export default Cards