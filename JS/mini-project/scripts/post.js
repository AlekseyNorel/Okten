//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const postId = localStorage.getItem('post');
const POST = `https://jsonplaceholder.typicode.com/posts/${postId}`;
const COMMENTS = `${POST}/comments`;

fetch(POST).then(response => response.json()).then(post => {

    const section = document.createElement('section');
    document.body.appendChild(section);
    for (const key in post) {
        let p = document.createElement('p');
        p.className = 'item';
        p.innerText = `${key}: ${post[key]}`
        section.appendChild(p);
    }

    fetch(COMMENTS).then(response => response.json()).then(comments => {
        const section = document.createElement('section');
        section.className = 'comments';
        document.body.appendChild(section);
        for (const comment of comments) {
            const div = document.createElement('div');
            div.className = 'commentsItem';
            section.appendChild(div);
            for (const commentKey in comment) {
                const p = document.createElement('p');
                p.innerText = `${commentKey}: ${comment[commentKey]}`
                div.appendChild(p);
            }
        }
    });
});