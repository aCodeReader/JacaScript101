let arrayOfPosts;
let arrayOfComments;
let arrayOfUser;

let arr5;

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
    getPosts()
    getComments()
    getUsers()
}

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
    fetch('http://jsonplaceholder.typicode.com/posts/')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}
const getComments = () => {
    fetch('http://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(comment => arrayOfComments = comment)
}

const getUsers = () => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => arrayOfUser = user)
}
const consoleUser = () => {
    console.log(arrayOfUser)
}

const consoleComments = () => {
    console.log(arrayOfComments)
}


// this function logs the results in your browsers console
const consolePosts = () => {
    console.log(arrayOfPosts)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
    const allPosts = document.getElementById('all-posts')
    arrayOfPosts.map((post, index) => {
        const li = document.createElement('li')
        const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
        li.appendChild(text)
        allPosts.append(li)
    })
}

const display5 = () => {
    for( let i = 0; i < 5; i++){
let p5 = arrayOfPosts[i]
const post5 = document.getElementById('post5')
const li =document.createElement('li')
const text = document.createTextNode(`${p5.id}   Title: ${p5.title} , , ${p5.body}`)
li.appendChild(text)
post5.append(li)
  
  
        console.log(arrayOfPosts[i])
}

}

const displayComments = () => {
    for( let i = 0; i < arrayOfComments.length; i++){
        let com = arrayOfComments[i]
        console.log(arrayOfComments)

        const comments = document.getElementById('post5')
        const li =document.createElement('li')
        const text = document.createTextNode(`${com.postId} ID:${com.id}   Title: !! ${com.email} !! ,   BODY  ${com.body}`)
        li.appendChild(text)
        comments.append(li)
    }
}

const displayUser = () => {
    const allPosts = document.getElementById('all-posts')
    arrayOfUser.map((post, index) => {
        const li = document.createElement('li')
        const text = document.createTextNode(`#${index}, Title: ${post.name}:  ${post.username}, by user: ${post.email}`)
        li.appendChild(text)
        allPosts.append(li)
        console.log(arrayOfUser)
    })
}