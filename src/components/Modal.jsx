import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-router-dom'

function Example({show, handleClose, qrDecoded}) {
  

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{qrDecoded}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link 
          onClick={handleClose}
          target={"_blank"} 
          rel="noopener noreferrer external" 
          className='btn btn-primary' to={`/redirect/?url=${qrDecoded}`}>Go </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;