document.getElementById('login').addEventListener('click', () => {
  const token = document.getElementById('token').value;

  if (token) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'login', token });
    });
  }
});
