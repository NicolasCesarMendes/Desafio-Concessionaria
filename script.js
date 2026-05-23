class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    buzinar() {
        return "O carro " + this.modelo + " fez Bi Bi!";
    }
}

document.getElementById("marca").onkeyup = function() {
    document.getElementById("preview").innerHTML = "Pré visualização da marca: " + this.value;
}

function fabricarCarro() {
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let ano = Number(document.getElementById("ano").value);

    let carro = new Carro(marca, modelo, ano);

    let patio = document.getElementById("patio");

    let card = document.createElement("div");

    card.innerHTML = 
    `
        <h3>${carro.marca}</h3>
        <p>Modelo: ${carro.modelo}</p>
        <p>Ano: ${carro.ano}</p>
    `;

    patio.appendChild(card);

    card.onclick = function() {
        alert(carro.buzinar());
    }

    card.onmouseover = function() {
        card.style.backgroundColor = "blue";
    }

    card.onmouseout = function() {
        card.style.backgroundColor = "red";
    }
}