const container = document.querySelector('.container');

fetch("https://api.escuelajs.co/api/v1/users")
.then(res => res.json())
.then(data => {
  new Date().getTime();
  new Date().getDate();

    data.forEach(user => {
        const date = new Date(user.creationAt);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        container.innerHTML +=`   <div class="card">
        <img src="${user.avatar}" alt="Avatar">
        <div class="card-content">
            <h2>${user.name}</h2>
            <p class="role">${user.role}</p>
            <p class="email">${user.email}</p>
        </div>
        <div class="card-footer">Created At: ${formattedDate}</div>
    </div>`
    })
})


