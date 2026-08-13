// ---------------- Auth tabs ----------------
const tabs = document.querySelectorAll('.auth__tab');
const forms = {
  login: document.getElementById('loginForm'),
  signup: document.getElementById('signupForm'),
};

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabs.forEach(t => {
      t.classList.toggle('is-active', t === tab);
      t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
    });

    Object.entries(forms).forEach(([key, form]) => {
      form.classList.toggle('is-active', key === target);
    });
  });
});

// ---------------- Form handling ----------------
function handleSubmit(form, kind, successText) {
  const msg = form.querySelector(`[data-msg-for="${kind}"]`);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // No backend wired up — placeholder confirmation only.
    msg.textContent = successText;

    setTimeout(() => {
      msg.textContent = '';
    }, 4000);

    form.reset();
  });
}

handleSubmit(forms.login, 'login', 'Logged in successfully (demo).');
handleSubmit(forms.signup, 'signup', 'Account created successfully (demo).');

// ---------------- Decorative slide arrows ----------------
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');

[prevBtn, nextBtn].forEach(btn => {
  btn.addEventListener('click', () => {
    btn.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(0.9)' }, { transform: 'scale(1)' }],
      { duration: 220, easing: 'ease-out' }
    );
  });
});