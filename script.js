function openGame(url, name) {
  sessionStorage.setItem("gameUrl", url);
  sessionStorage.setItem("gameName", name);
  window.location.href = "game.html";
}
