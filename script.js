const container = document.querySelector('.container');

fetch("https://api.escuelajs.co/api/v1/users")
.then(res => res.json())
.then(data => {
    console.log(data);
    data.forEach(user => {
        container.innerHTML +=`   <div class="card">
        <img src="${user.avatar}" alt="Avatar">
        <div class="card-content">
            <h2>${user.name}</h2>
            <p class="role">${user.role}</p>
            <p class="email">${user.email}</p>
        </div>
        <div class="card-footer">Created At: ${user.creationAt}</div>
    </div>`
    })
})


