var score = 0
var jogadores = [
    "Daniel Alves",
    "Andrés Iniesta",
    "Maxwell",
    "Hossam Ashour",
    "Lionel Messi",
    "Gerard Piqué",
    "Ryan Giggs",
    "Vítor Baía",
    "Xavi Hernández",
    "Cristiano Ronaldo"
]

var tabela = document.getElementById("tabela")

jogadores.forEach(element => {
    var tr = document.createElement("tr")
    var td = document.createElement("td")
    td.className = "unselectable"
    td.innerHTML = element
    td.id = element
    tr.appendChild(td)
    tabela.appendChild(tr)
});

function verifica(ele) {
    if (event.key === "Enter" && jogadores.includes(ele.value)) {
        var index = jogadores.indexOf(ele.value)
        document.getElementById(ele.value).className = "selectable"
        ele.value = ""
        score++
        pontos.innerHTML = score
        jogadores.splice(index, 1)
    }
}