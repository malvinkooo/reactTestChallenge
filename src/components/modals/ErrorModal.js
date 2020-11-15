import React from "react";

function ErrorModal({ onClose }) {
    return (
        <div className="modal-wrapper" onClick={onClose}>
            <div className="modal confirm-modal" onClick={e => e.stopPropagation()}>
                <header className="modal-header">
                    <button type="button" className="close" onClick={onClose}>&times;</button>
                    <h3 className="title">Что-то пошло не так...</h3>
                </header>

                <div className="modal-body article-text">
                    <p>Попробуйте снова через некоторое время.</p>
                </div>

                <footer className="button-group">
                    <button className="button -edit" type="button" onClick={onClose}>Ок</button>
                </footer>
            </div>
        </div>
    )
}

export default ErrorModal;
