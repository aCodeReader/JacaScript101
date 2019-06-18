let peeps;


// $.ajax({
//     url: 'https://randomuser.me/api/?results=5',
//     dataType: 'json',
//     success: function(data) {
//         const users = document.getElementById('book')
//         const li = document.createElement('li')
//         const text = document.createTextNode(data.results)
//         li.appendChild(text)
//         users.append(li)
//     console.log(data.results.values);
//     }
// });



let arrayOfUser;

window.onload = function() {
    getUsers()
}




const getUsers = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(user => arrayOfUser = user)
}
const consolePosts = () => {
    console.log(arrayOfUser.results)
}

  //Dom Stuff 
const displayUsers = () => {
    const allPeep = document.getElementById('book')
    arrayOfUser.results.map((user, index) => {
        const li = document.createElement('li')
        const text = document.createTextNode(`#${index}, Name: ${user.name.first} , Cell: ${user.cell}-----    `)
        const pic = document.createElement('img')
        li.appendChild(text)
        li.append(pic)
        pic.setAttribute('src', user.picture.thumbnail)
        allPeep.append(li)
    })
}

function getNewFriends(){
    getUsers()
}