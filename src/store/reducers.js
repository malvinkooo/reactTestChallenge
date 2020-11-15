import * as actionTypes from "./actionTypes.js";

function reducer(state, action) {
    switch(action.type) {
        case actionTypes.LOAD_ARTICLES:
            return {
                ...state,
                articles: [...action.payload],
            };

        case actionTypes.ADD_ARTICLE:
            return {
                isAddModalOpened: false,
                isAddModalPending: false,
                articles: [action.payload, ...state.articles],
            };

        case actionTypes.EDIT_ARTICLE:
            const list = state.articles.map((article) => {
                if(article._id === action.payload._id) return action.payload;

                return article;
            });

            return {
                ...state,
                articles: [...list],
            };

         case actionTypes.DELETE_ARTICLE:
            const articlesList = state.articles.filter((article) => (article._id !== action.payload._id));
    
            return {
                ...state,
                articles: [...articlesList],
            };

        case actionTypes.DISPLAY_ADD_MODAL:
            return {
                ...state,
                isAddModalOpened: true,
            };

        case actionTypes.HIDE_ADD_MODAL:
            return {
                ...state,
                isAddModalOpened: false,
            };

        case actionTypes.ADD_MODAL_PENDING:
            return {
                ...state,
                isAddModalPending: true,
            };

        case actionTypes.DISPLAY_ERROR_MODAL:
            return {
                ...state,
                isErrorModalOpened: true,
            };

        case actionTypes.HIDE_ERROR_MODAL:
            return {
                ...state,
                isErrorModalOpened: false,
            };

        default:
            return state;
    }
}

export default reducer;
