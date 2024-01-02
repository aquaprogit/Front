document.getElementById("fetchButton").addEventListener("click", function () {
    fetchUserData();
});

function fetchUserData() {
    fetch('https://randomuser.me/api/?results=8')
        .then(response => response.json())
        .then(data => displayUsers(data.results))
        .catch(error => console.error('Error:', error));
}

function displayUsers(users) {
    var userContainer = document.getElementById("userContainer");
    userContainer.innerHTML = '';

    users.forEach(user => {
        var userCard = document.createElement("div");
        userCard.classList.add("user-card");

        var userPicture = document.createElement("img");
        userPicture.src = user.picture.large;
        userCard.appendChild(userPicture);

        var userName = document.createElement("p");
        userName.textContent = "Name: " + user.name.first + ' ' + user.name.last;
        userCard.appendChild(userName);

        var userCity = document.createElement("p");
        userCity.textContent = "City: " + user.location.city;
        userCard.appendChild(userCity);

        var userPostcode = document.createElement("p");
        userPostcode.textContent = "Postcode: " + user.location.postcode;
        userCard.appendChild(userPostcode);

        var userPhone = document.createElement("p");
        userPhone.textContent = "Phone: " + user.phone;
        userCard.appendChild(userPhone);

        userContainer.appendChild(userCard);
    });
}