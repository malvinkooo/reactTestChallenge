import * as actionTypes from "./actionTypes.js";

export const loadArticlesAction = (articles) => ({type: actionTypes.LOAD_ARTICLES, payload: articles});
export const displayAddModalAction = () => ({type: actionTypes.DISPLAY_ADD_MODAL});
export const hideAddModalAction = () => ({type: actionTypes.HIDE_ADD_MODAL});
export const addModalPendingAction = () => ({type: actionTypes.ADD_MODAL_PENDING});
export const addArticleAction = (article) => ({type: actionTypes.ADD_ARTICLE, payload: article});
export const editArticleAction = (data, id) => ({type: actionTypes.EDIT_ARTICLE, payload: {...data, _id: id}});
export const deleteArticleAction = (id) => ({type: actionTypes.DELETE_ARTICLE, payload: {_id: id}});
export const displayErrorModalAction = () => ({type: actionTypes.DISPLAY_ERROR_MODAL});
export const hideErrorModalAction = () => ({type: actionTypes.HIDE_ERROR_MODAL});
