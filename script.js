function toggleMode () {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  const alt = document.querySelector("#profile img")

  // subsitituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adc imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    alt.setAttribute('alt', 'um novo amigo')
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    alt.setAttribute("alt", "Foto de um cara, sorrindo")
  }
}