const wrapper = document.querySelector(".wrapper"),
  signUpLink = document.querySelector(".link .signup-link"),
  signInLink = document.querySelector(".link .signin-link"),
  locks = document.querySelectorAll("i.fa-lock");


signUpLink.addEventListener("click", () => {
  wrapper.classList.add("animated-signin");
  wrapper.classList.remove("animated-signup");
});

signInLink.addEventListener("click", () => {
  wrapper.classList.add("animated-signup");
  wrapper.classList.remove("animated-signin");
});

locks.forEach((lock) => {
  lock.addEventListener("click", () => {
    lock.classList.toggle("fa-lock-open");
    lock.parentElement.querySelector('input').setAttribute('type', lock.classList.contains('fa-lock-open') ? 'text' : 'password');});
});
