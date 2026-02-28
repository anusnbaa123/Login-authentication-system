// toggle between login and register forms
function showRegister() {
  document.getElementById('login-form').classList.remove('active');
  document.getElementById('register-form').classList.add('active');
  document.getElementById('toggle-message').textContent = 'Already have an account?';
  document.getElementById('toggle-btn').textContent = 'Login';
  document.getElementById('toggle-btn').onclick = showLogin;
}

function showLogin() {
  document.getElementById('register-form').classList.remove('active');
  document.getElementById('login-form').classList.add('active');
  document.getElementById('toggle-message').textContent = 'New here?';
  document.getElementById('toggle-btn').textContent = 'Create account';
  document.getElementById('toggle-btn').onclick = showRegister;
}

// simple persistence using localStorage (demo only)
function registerUser() {
  const email = document.getElementById('reg-email').value.trim();
  const pass = document.getElementById('reg-pass').value;
  if (!email || !pass) {
    alert('Please fill in all fields.');
    return;
  }
  if (localStorage.getItem(email)) {
    alert('An account with that email already exists.');
    return;
  }
  localStorage.setItem(email, pass);
  alert('Registered! You can now log in.');
  showLogin();
}

function loginUser() {
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-pass').value;
  if (!email || !pass) {
    alert('Enter email and password.');
    return;
  }
  const stored = localStorage.getItem(email);
  if (stored === null) {
    alert('No user found with that email.');
  } else if (stored !== pass) {
    alert('Incorrect password.');
  } else {
    alert('Logged in! (front end only)');
  }
}

// initialize
showLogin();