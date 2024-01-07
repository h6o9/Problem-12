async function fetchUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const userData = await response.json();

    if(!response.ok) {
     console.log("data is fetching:", error)
    }

    const userName = userData.map(users => users.name).sort();
    return userName;
}  

fetchUserData()
.then(userName => {
    console.log("fetch User data:", userName);
})

.catch(userName =>{
    console.error("Erorr Fetching data:", erorr);
});