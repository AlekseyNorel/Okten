// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

const userId = localStorage.getItem('user');
const USER = `https://jsonplaceholder.typicode.com/users/${userId}`;
const POSTS = `${USER}/posts`;
const section = document.createElement('section');
section.className = 'userDetails'
document.body.appendChild(section);



function printObject(obj) {
    
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            printObject(obj[key]);
        } else {
            const p = document.createElement('p');
            p.className = 'item';
            p.innerText = `${key}: ${obj[key]}`;
            document.body>section.appendChild(p);
        }
    }
}


fetch(USER).then(response => response.json()).then(user => {
    
    printObject(user);
    
    let btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerText = "post of current user";
    section.appendChild(btn);

    btn.onclick = function (e) {
        e.preventDefault();

        fetch(POSTS).then(response => response.json()).then(posts => {
            const section = document.createElement('section');
            section.className = 'wrap';
            document.body.appendChild(section);
            for (const post of posts) {
                const p = document.createElement('p');
                const postDetailsLink = document.createElement('a');
                const div = document.createElement('div');
                div.className = 'detailsItem';

                section.appendChild(div);

                p.innerText = `Post title: ${post.title}`;
                postDetailsLink.href = `post-details.html`;
                postDetailsLink.textContent = 'post details';

                div.append(p,postDetailsLink);

                postDetailsLink.onclick = function () {
                    localStorage.setItem('post', `${post.id}`);
                }
            }
        });
    };
});