import React from 'react';
import reactDom from 'react-dom';

const Modal = ({open, children}) => {
    if (!open) return null

    return reactDom.createPortal (
        <>
            {children}
        </>,
        document.getElementById('portal')
    )
}

export default Modal 