import React from "react";

function ArticlesList (props) {
    return (
        <div className="articles-list">
            { props.children }
        </div>
    )
}

export default ArticlesList;
