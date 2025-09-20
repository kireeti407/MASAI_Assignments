**Question:**
Create a JavaScript function called fetchUserData that simulates fetching user data from a server using Promises.

Requirements:

The function should:

Return a Promise.
Resolve with a user object { id: 1, name: "John Doe", role: "Admin" } after 2 seconds.
Reject with an error message "Failed to fetch user data" if a random condition fails (for example, if Math.random() < 0.3).
You must call fetchUserData and:

Handle success using .then() and print the user details.
Handle error using .catch() and print the error message.
Log "Fetch attempt complete" in a .finally() block.