import { useEffect, useState } from 'react';

import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';

function Loading({ musicType, emoji, gif }) {
    const [show, setShow] = useState(true)
    let [count, setCount] = useState(0)

    useEffect(() => {
        const loadingInterval = setInterval(() => {
            setCount((count) => count + 1 )
        }, 1000);
        return () => clearInterval(loadingInterval)
    }, [])
    useEffect(() => {
        if (count === 5) {
            setShow(false)
        }
    },[count])

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial'}}
        >
            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header  style={ {backgroundColor: 'black', color:'red'} } > 
                    <Modal.Title>{count}</Modal.Title>
                </Modal.Header>
                <Modal.Body  style={ { backgroundColor: 'black', color:'red'} } >Loading...Sorry, we are building this {musicType} page! Rock on! {emoji}</Modal.Body>
                <Modal.Footer  style={  {backgroundColor: 'black', color:'red'} } >
                    <Spinner animation="border" variant="danger" />
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Loading;