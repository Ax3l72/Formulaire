var form_inscription = document.getElementById("inscription");

function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{20,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var goodRegex = new RegExp("^(?=.{15,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{12,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var pwd = document.getElementById("password");
    if (pwd.value.length == 0) {
        strength.innerHTML = '';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = '';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:springgreen">Fort !</span>';
    } else if (goodRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:seagreen">Bon !</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Moyen !</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Faible !</span>';
    }
}


function valider(event) {
    var champ_nom = form_inscription.elements["nom"];
    var champ_mdp = form_inscription.elements["password"];
    var champ_confirmation = form_inscription.elements["confirmation"];
    var champ_email = form_inscription.elements["email"];
    var form_OK = true;

    if (champ_nom.value == "") {
        form_OK = false;
        champ_nom.classList.add("erreur");
    } else {
        champ_nom.classList.remove("erreur");
    }

    if (champ_mdp.value == "") {
        form_OK = false;
        champ_mdp.classList.add("erreur");
    } else {
        champ_mdp.classList.remove("erreur");
    }
    //
    if (champ_confirmation.value == "") {
        form_OK = false;
        champ_confirmation.classList.add("erreur");
    } else {
        champ_confirmation.classList.remove("erreur");
    }

    //
    if (champ_confirmation != champ_mdp) {
        form_OK = false;
        champ_mdp.classList.add("erreur");
        champ_confirmation.classList.add("erreur");
    }

    var regex = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]&shy;{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/;
    if (regex.exec(champ_email.value) == null) {
        form_OK = false;
        champ_email.classList.add("erreur");
    } else {
        champ_email.classList.remove("erreur");
    }

    if (!form_OK) {
        event.preventDefault();
    }
}
form_inscription.addEventListener('submit', valider);