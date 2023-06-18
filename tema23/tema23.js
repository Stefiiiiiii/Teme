async function fetchUsers() {
    const response = await fetch(`https://random-data-api.com/api/v2/users?size=10`);
    const body = await response.json();
    
    console.log(body)
    usersDetails(body)
}

fetchUsers();

function usersDetails(users){
    const usersContainer = document.getElementById("usersContainer");
    
    users.forEach(user => {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const info = document.createElement('div');
        const name = document.createElement('span');
        const email = document.createElement('span');
        const country = document.createElement('span');
        const city = document.createElement('span');
        const employmentTitle = document.createElement('span');

        div.classList = 'card';
        image.classList = 'card-img';
        info.classList = 'infoUser';

        image.src = user.avatar;
        name.innerText = ` Name: ${user.first_name} ${user.last_name}`;
        email.innerText = `Email: ${user.email}`;
        country.innerText = `Country: ${user.address.country}`;
        city.innerText = `City: ${user.address.city}`;
        employmentTitle.innerText = `Title: ${user.employment.title}`;

        info.appendChild(name);
        info.appendChild(email);
        info.appendChild(country);
        info.appendChild(city);
        info.appendChild(employmentTitle);
        div.appendChild(image);
        div.appendChild(info);

        usersContainer.appendChild(div)
    });
}
