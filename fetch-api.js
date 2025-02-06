
// ---------------On Button Click------------------

// let dataFetched = false; // flag to check if data has been fetched

// const fetchData = () => {
//     const messageDiv = document.getElementById('message');

//     if(dataFetched){
//         messageDiv.textContent = `Already data fetched`;
//         return;
//     }
//     messageDiv.textContent = ``;
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => {
//         const userList = document.getElementById('userList');
//         userList.innerHTML = ''; // Clear any previous data // data will not repeat everytime button clicks
//         data.forEach(user => {
//             const li = document.createElement('li');
//             li.textContent = `${user.name} - ${user.email}`
//             userList.appendChild(li);
//         })
//         dataFetched = true;
//     })
//     .catch(error => console.error(`Error Occured: ${error}`))
// }

// ---------------On Button Click------------------

// ---------------------------------------------------------------------------------------------------

// -------------------- On Page Load ---------------------------


// window.addEventListener('load', fetchData);


