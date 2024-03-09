let ecran = document.getElementById("ecran");

let ajout = (chiffre) => {
  ecran.value += chiffre;
};

let efface = () => {
  ecran.value = "";
};

let calcule = () => {
  try {
    let etat = eval(ecran.value);
    ecran.value = etat;
  } catch (error) {
    ecran.value = "MATH ERROR";
  }
};
