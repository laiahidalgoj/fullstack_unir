
const pintarPostDetail = (post) => {
    const postDetailWrapper = document.querySelector(".post-detail-wrapper");
    postDetailWrapper.textContent = '';

    // creo sku
    const sku = document.createElement('p')
    sku.textContent = `Sku: ${post.sku}`
    postDetailWrapper.appendChild(sku);

    // creo title
    const title = document.createElement('p')
    title.textContent = `Title: ${post.title}`
    postDetailWrapper.appendChild(title);

    // creo price
    const price = document.createElement('p')
    price.textContent = `Price: ${post.price}`
    postDetailWrapper.appendChild(price);
}

    document.addEventListener('DOMContentLoaded', () => {

    const postList = document.querySelector('.post-list');
    posts.forEach(post => {
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = post.title;
        postList.appendChild(nuevoLi);

        nuevoLi.addEventListener('click', () => {
            pintarPostDetail(post);
        })
    })
})