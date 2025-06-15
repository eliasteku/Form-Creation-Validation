// Step 1: Create the async function
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Step 2
    const dataContainer = document.getElementById('api-data');   // Step 3

    try {
        const response = await fetch(apiUrl);                   // Step 4
        const users = await response.json();

        dataContainer.innerHTML = '';                           // Step 5

        const userList = document.createElement('ul');          // Step 6
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);                    // Step 7
    } catch (error) {
        dataContainer.innerHTML = '';                           // Step 8
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Step 9: Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
