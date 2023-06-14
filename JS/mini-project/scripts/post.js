//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const postId = localStorage.getItem('post');
const POST = `https://jsonplaceholder.typicode.com/posts/${postId}`;
const COMMENTS = `${POST}/comments`;

fetch(POST).then(response => response.json()).then(post => {

    const divWrap = document.createElement('div');
    document.body.appendChild(divWrap);
    for (const key in post) {
        let p = document.createElement('p');
        p.innerText = `${key}: ${post[key]}`
        divWrap.appendChild(p);
    }

    fetch(COMMENTS).then(response => response.json()).then(comments => {
        const divWrap = document.createElement('div');
        document.body.appendChild(divWrap);
        for (const comment of comments) {
            const divWrap2 = document.createElement('div');
            divWrap.appendChild(divWrap2);
            for (const commentKey in comment) {
                const p = document.createElement('p');
                p.innerText = `${commentKey}: ${comment[commentKey]}`
                divWrap2.appendChild(p);
            }
        }
    });
});