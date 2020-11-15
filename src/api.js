const ID = "da568a1b3ce44630b5797355d96160c2";
const BASE_URL = `https://cors-anywhere.herokuapp.com/https://crudcrud.com/api/${ID}/`;

export const loadArticles = () => {
    return fetch(`${BASE_URL}articles`)
        .then(response => {
            return response.json();
        })
        .then(articles => {
            return articles.reverse();
        });
}

export const addArticle = (data) => {
    return fetch(`${BASE_URL}articles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors",
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
    })
    .then(response => {
        return response.json();
    });
}

export const editArticle = (data) => {
    const article = {
        title: data.title,
        text: data.text,
        date: data.date,
    };

    return fetch(`${BASE_URL}articles/${data._id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors",
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(article),
    });
}

export const deleteArticle = (id) => {
    return fetch(`${BASE_URL}articles/${id}`, {
        method: "DELETE",
        mode: "cors",
        referrerPolicy: 'no-referrer',
    });
}
