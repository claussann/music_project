import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

function cardsImage(callback) {
    if (callback == 'Rock') {
        return '/img_rock.png'
    } else if (callback == 'Pop') {
        return '/img_pop.png'
    } else if (callback == 'Rap') {
        return '/img_rap.jpg'
    } else {
        return '/img_electronic.png'
    }
}


function Cards({ children }) {
    const imgCards = cardsImage(children)
    return (
        <div className='lg-col-4 md-col-8 lg-col-12 mt-1 mb-2 d-flex justify-content-between'>
            <Card style={{ width: '400px', backgroundColor: 'rgba(255, 0, 0, 0)', border: '1px solid red' }} className='m-5'>
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
    );
}

export default Cards