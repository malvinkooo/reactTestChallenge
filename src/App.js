import React, { useEffect, useState, useReducer } from "react";
import Context from "./context.js";
import ArticlesList from "./components/article/ArticlesList.js";
import ArticleItem from "./components/article/ArticleItem.js";
import ModifyArticleModal from "./components/modals/ModifyArticleModal.js";
import ErrorModal from "./components/modals/ErrorModal.js";
import Loader from "./components/Loader.js";

import Store from "./store/index.js";
import * as api from "./api.js";

const { initialState, reducer, actions } = Store;
const { loadArticlesAction,
        displayAddModalAction, 
        hideAddModalAction, 
        addModalPendingAction, 
        addArticleAction,
        displayErrorModalAction,
        hideErrorModalAction } = actions;

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.loadArticles()
        .then(articles => {
            dispatch(loadArticlesAction(articles));
        })
        .catch(() => {
            dispatch(displayErrorModalAction());
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    function openAddArticleModal() {
        dispatch(displayAddModalAction());
    }

    function closeModifyArticleModal() {
        dispatch(hideAddModalAction());
    }

    function addArticle(data) {
        dispatch(addModalPendingAction());

        api.addArticle(data)
        .then(article => {
            dispatch(addArticleAction(article));
        })
        .catch(() => {
            dispatch(displayErrorModalAction());
            dispatch(hideAddModalAction());
        })
        .finally(() => {
            setLoading(false);
        });
    }

    function closeErrorModal() {
        dispatch(hideErrorModalAction());
    }

    return (
        <Context.Provider value={dispatch}>
            <div className="wrapper">
                <h1>React test challenge</h1>

                {
                    state.isErrorModalOpened ? 
                    <ErrorModal onClose={closeErrorModal} /> : null
                }

                {
                    state.isAddModalOpened ?
                    <ModifyArticleModal
                        pending={state.isAddModalPending}
                        mode="add"
                        onReject={closeModifyArticleModal}
                        onAccept={addArticle}
                    /> : null
                }

                <div>
                    <button type="button" className="button -fluid" onClick={openAddArticleModal}>Добавить статью</button>
                </div>

                <ArticlesList>
                    { loading ? <Loader /> : null }

                    { state.articles.length ? null : <p>Нет статей</p> }

                    {
                        state.articles.map(itm => (
                            <ArticleItem article={itm} key={itm._id}></ArticleItem>
                        ))
                    }
                </ArticlesList>
            </div>
        </Context.Provider>
    )
}

export default App;
