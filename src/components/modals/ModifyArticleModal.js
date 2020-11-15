import React, { useState } from "react";
import Loader from "../Loader.js";

function ModifyArticleModal({ pending, mode, article={title: "", text: ""}, onReject, onAccept }) {
    const [ formValue, setFormValue ] = useState(article);

    function closeModal() {
        setFormValue({
            title: "",
            text: ""
        });

        onReject();
    }

    function onFormSubmit(e) {
        e.preventDefault();
        onAccept({...formValue, date: Date.now().toString()});
    }
 
    return (
        <div className="modal-wrapper" onClick={closeModal}>

            {pending ? <Loader/> : null}

            <div className="modal modify-article-modal" onClick={e => e.stopPropagation()}>
                <header className="modal-header">
                    <button type="button" className="close" onClick={closeModal}>&times;</button>
                    {
                        mode === "add" ?
                        <h3 className="title">Добавить новую статью</h3>
                        :
                        <h3 className="title">Редактировать статью</h3>
                    }
                </header>

                <form className="modal-body modify-article-form" onSubmit={onFormSubmit}>
                    <label className="input">
                        <span className="label">Заголовок:</span>
                        <input type="text" value={formValue.title} onChange={e => setFormValue({...formValue, title: e.target.value})} />
                    </label>

                    <label className="input">
                        <span className="label">Текст:</span>
                        <textarea value={formValue.text} onChange={e => setFormValue({...formValue, text: e.target.value})}></textarea>
                    </label>

                    <footer className="button-group">
                        <button className="button -edit" type="submit">Сохранить</button>
                        <button className="button" type="button" onClick={closeModal}>Отмена</button>
                    </footer>
                </form>
            </div>
        </div>
    )
}

export default ModifyArticleModal;
