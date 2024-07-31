function getusers()
{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        let users1 = document.getElementById('users');
        data.forEach(user => {
            let option = document.createElement('option');
            option.innerHTML= user.name;
            users1.appendChild(option);  
        });
      })
}
getusers();

