import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

function cardsImage(callback) {
    if (callback === 'Rock') {
        return '/img_rock.png'
    } else if (callback === 'Pop') {
        return '/img_pop.png'
    } else if (callback === 'Rap') {
        return '/img_rap.jpg'
    } else if (callback === 'Electronic') {
        return '/img_electronic.png'
    } else if (callback === 'Jazz') {
        return '/img_jazz.png'
    } else if (callback === 'Reggae') {
        return '/img_reggae.png'
    }
}


function Cards({ children }) {
    const imgCards = cardsImage(children)
    return (
        <>
            <div className='col-12 col-md-6 col-lg-4'>
                <Card style={{ maxWidth: '300px', backgroundColor: 'rgba(255, 0, 0, 0)', border: '1px solid red' }} className='m-5'>
                    <Card.Img variant="top" id='imgCard' src={imgCards} />
                    <Card.Body>
                        <Card.Title style={{ color: 'red', }}><b>{children}</b></Card.Title>
                        <Card.Text style={{ color: "grey", fontSize: 15 }}><b>
                            Push the button for open the {children} page
                        </b></Card.Text>
                        <Button variant="outline-danger">Open page</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default Cards