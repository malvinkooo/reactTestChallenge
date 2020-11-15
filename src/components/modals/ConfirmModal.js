import React from "react";
import Loader from "../Loader.js";

function ConfirmModal({ pending, onReject, onAccept, title, text }) {
    return (
        <div className="modal-wrapper" onClick={onReject}>

            { pending ? <Loader/> : null }

            <div className="modal confirm-modal" onClick={e => e.stopPropagation()}>
                <header className="modal-header">
                    <button type="button" className="close" onClick={onReject}>&times;</button>
                    <h3 className="title">{ title }</h3>
                </header>

                <div className="modal-body article-text">
                    <p>{ text }</p>
                </div>

                <footer className="button-group">
                    <button className="button -delete" type="button" onClick={onAccept}>Удалить</button>
                    <button className="button" type="button" onClick={onReject}>Отмена</button>
                </footer>
            </div>
        </div>
    )
}

export default ConfirmModal;
