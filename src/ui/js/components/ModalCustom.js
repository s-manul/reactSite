import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';

const ModalCustom = ({show, onHide, text}) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>{text}</Modal.Header>
        </Modal>
    );
};

export default ModalCustom