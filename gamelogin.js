function addUser() {
    player1Name = document.getElementById("player1NameInput").value;
    player2Name = document.getElementById("player2NameInput").value;
    localStorage.setItem("chave1", player1Name);
    localStorage.setItem("chave2", player2Name);
    window.location = "game_page.html";
}