let usuari = {

}

function Usuari(nom, cognom, edat) {
    this.nom = nom
    this.cognom = cognom
    this.edat = edat
}

const newUser = document.getElementById("newUser")
const viewUser = document.getElementById("viewUser")
const info = document.getElementById("usuari")

newUser.addEventListener('click', () => {
    let nom = prompt("Nom: ")
    let cognom = prompt("Cognom: ")
    let edat = prompt("Edat: ")
    usuari = new Usuari(nom, cognom, edat)
})

viewUser.addEventListener('click', () => {
    info.innerHTML = "Nom: " + usuari.nom + "<br>Cognom: " + usuari.cognom + "<br>Edat: " + usuari.edat;
})

