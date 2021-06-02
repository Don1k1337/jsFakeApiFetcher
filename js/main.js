async function getApiResponse() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let content = await response.json();
    content = content.splice(0, 100);
    let posts = document.querySelector('.wrapper__content')
    for (let key in content) {
        posts.innerHTML += ` 
<ul class="list-group">
            <li class="list-group-item">Title: ${content[key].title} </br> Content: ${content[key].body}</li>
</ul>`
    }
}

getApiResponse();