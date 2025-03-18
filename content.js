// Function to perform the login using the token
function login(token) {
  setInterval(() => {
    document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage.token = `"${token}"`;
  }, 50);
  setTimeout(() => {
    location.reload();
  }, 2500);
}

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'login' && request.token) {
    console.log("Executing login with token:", request.token);
    login(request.token); // Call the login function with the provided token
  }
});
