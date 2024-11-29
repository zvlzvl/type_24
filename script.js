const container = document.querySelector('.container');

fetch("https://api.escuelajs.co/api/v1/users")
.then(res => res.json())
.then(data => {
    console.log(data);
})

container.innerHTML +=`   <div class="card">
        <img src="https://i.imgur.com/LDOO4Qs.jpg" alt="Avatar">
        <div class="card-content">
            <h2>Jhon</h2>
            <p class="role">Customer</p>
            <p class="email">john@mail.com</p>
            <p class="password">Password: changeme</p>
            <div class="dates">
                <p>Created At: 2024-11-29T04:04:22.000Z</p>
                <p>Updated At: 2024-11-29T04:04:22.000Z</p>
            </div>
        </div>
        <div class="card-footer">User ID: 1</div>
    </div>`
