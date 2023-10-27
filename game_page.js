player1_name = localStorage.getItem("chave1");
player2_name = localStorage.getItem("chave2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2_name ;

function send() {
    word = document.getElementById("word").value;
    word2 = document.getElementById("word2").value;
    actual_answer = parseInt(word) * parseInt(word2);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    lenght_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(lenght_divide_2);
    console.log(charAt2);

    lenght_minus_1 = word.length - 1;
    charAt3 = word.charAt(lenght_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_word = "<h4>" + word + " X " + word2 + "</h4>";
    input_box = "<br>Resposta : <input type='text' id='check'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    document.getElementById("word2").value = "";
}
answerTurn = "player2";
questionTurn = "player1";
function check() {
    var getAnswer = document.getElementById("check").value;
    var update_player1_score = player1_score;
    var update_player2_score = player2_score;

    if (getAnswer == actual_answer) {
        if (answerTurn == "player1") {
            player1_score = player1_score + 1;
            update_player1_score = player1_score;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        } else {
            player2_score = player2_score + 1;
            update_player2_score = player2_score;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }

    if (answerTurn == "player1") {
        answerTurn = "player2";
        questionTurn = "player1";
        document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1_name;
        document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2_name;
    } else {
        answerTurn = "player1";
        questionTurn = "player2";
        document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player2_name;
        document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player1_name;
    }
}
