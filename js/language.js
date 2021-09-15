var dataReload = document.querySelectorAll(data-reload);
var language = {
    eng: {
        welcome: "Welcome To Our Studio!"
    },
    fr: {
        welcome: "bienvenue a notre studio!"
    }
};

if (window.location.hash) {
    if (window.location.hash === "#fr"){
        text.textContent = language.fr.welcome;
    }
}
if (window.location.hash) {
    if (window.location.hash === "#eng"){
        text.textContent = language.eng.welcome;
    }
}
