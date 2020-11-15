import React, { useState, useContext } from "react";
import ModifyArticleModal from "../modals/ModifyArticleModal.js";
import ConfirmModal from "../modals/ConfirmModal.js";
import context from "../../context.js";
import * as api from "../../api.js";
import Store from "../../store/index.js";
const { actions } = Store;
const {
    editArticleAction,
    deleteArticleAction, 
    displayErrorModalAction, 
    hideAddModalAction } = actions;

function ArticleItem({ article }) {
    const { title, text, date } = article;
    const dispatch = useContext(context);
    const [ modifyModalState, setModifyModalState ] = useState({
        isOpened: false,
        isPending: false,
    });
    const [ confirmModalState, setConfirmModalState ] = useState({
        isOpened: false,
        isPending: false,
    });

    function onEditBtnClick() {
        setModifyModalState({
            ...modifyModalState,
            isOpened: true,
        });
    }

    function onDeleteBtnClick() {
        setConfirmModalState({
            ...confirmModalState,
            isOpened: true,
        });
    }

    function closeModifyModal() {
        setModifyModalState({
            ...modifyModalState,
            isOpened: false,
        });
    }

    function closeConfirmModal() {
        setConfirmModalState({
            ...confirmModalState,
            isOpened: false,
        });
    }

    function editArticle(data) {
        setModifyModalState({
            ...modifyModalState,
            isPending: true,
        });

        api.editArticle(data)
        .then(() => {
            dispatch(editArticleAction(data, article._id));
            closeModifyModal();
        })
        .catch(() => {
            dispatch(hideAddModalAction());
            dispatch(displayErrorModalAction());
        });
    }

    function deleteArticle() {
        setConfirmModalState({
            ...confirmModalState,
            isPending: true,
        });

        api.deleteArticle(article._id)
        .then(() => {
            closeConfirmModal();
            dispatch(deleteArticleAction(article._id));
        })
        .catch(() => {
            dispatch(hideAddModalAction());
            dispatch(displayErrorModalAction());
        });
    }

    return (
        <>
        {
            modifyModalState.isOpened ? <ModifyArticleModal 
                pending={modifyModalState.isPending}
                article={article}
                onReject={closeModifyModal}
                onAccept={editArticle}
                mode="edit" /> : null
        }

        {
            confirmModalState.isOpened ? <ConfirmModal 
                pending={confirmModalState.isPending}
                onReject={closeConfirmModal}
                onAccept={deleteArticle}
                title="Удаление статьи"
                text={`Вы действительно хотите удалить статью "${title}"?`} /> : null
        }

        <div className="article">
            <div className="article-title">
                <h3 className="title">{ title }</h3>
            </div>

            <div className="date">
                <p>{ new Date(Number.parseInt(date)).toISOString() }</p>
            </div>

            <div className="article-text">
                <p>{ text }</p>
            </div>

            <div className="button-group">
                <button className="button -edit" type="button" onClick={onEditBtnClick}>Редактировать</button>
                <button className="button -delete" type="button" onClick={onDeleteBtnClick}>Удалить</button>
            </div>
        </div>
        </>
    )
}

export default ArticleItem;
