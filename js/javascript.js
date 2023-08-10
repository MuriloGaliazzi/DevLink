var tooggleMode = () => {
 const html = document.documentElement;

 html.classList.toggle("light");

 const isLight = html.classList.contains("light");
 const srcValue = isLight ? "../img/Among-Us-feat.jpg" : "../img/avatar.jpg";
 const altValue = isLight ? "Imagem de perfil com um avatar na cor vermelha" : "Imagem de perfil com um avatar na cor marrom";


 document.querySelector("#profile img").setAttribute("src",srcValue);
 document.querySelector("#profile img").setAttribute("alt",altValue);
};
