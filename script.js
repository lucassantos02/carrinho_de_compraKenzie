let listaDeProdutos = [
    {
      nome: "Uva Crison",
      preco: 44.99,
    },
    {
      nome: "Vinho Canção",
      preco: 17.98,
    },
    {
      nome: "Água de Coco",
      preco: 8.99,
    },
    {
      nome: "Mamão",
      preco: 9.98,
    },
    {
      nome: "Água Tônica",
      preco: 17.98,
    }
];


  
function valorTotal(arr) {
    let elements = [];
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        elements.push(layoutList(arr[i]));
        soma += arr[i].preco;
    }
    console.log(estrutura(elements, soma));
};


  
function layoutList(arr) {
    let li = document.createElement("li");
    let nomes = document.createElement("p");
    nomes.innerText = arr.nome;
    let precos = document.createElement("p");
    precos.innerText = `R$ ${arr.preco}`;
    li.append(nomes, precos);
  
    return li;
};


  
function estrutura(arr, valor) {
    let body = document.querySelector("body");
    let main = document.createElement("main");

    let firstDiv = document.createElement("div");
    firstDiv.classList.add("titulo");

    let h = document.createElement("h2");
    h.innerText = "Virtual Market";

    let secDiv = document.createElement("div");
    secDiv.classList.add("itemPlusValueString");

    let item = document.createElement("p");
    item.innerText = "Item";

    let stringValor = document.createElement("p");
    stringValor.innerText = "Valor";

    let ul = document.createElement("ul");
    ul.classList.add("produtos");

    for (let i = 0; i < arr.length; i++) {
      ul.append(arr[i]);
    };

    let section = document.createElement("section");

    let thirdDiv = document.createElement("div");
    thirdDiv.classList.add("totalSpace");

    let total = document.createElement("p");
    total.innerText = "Total";

    let p = document.createElement("p");
    p.innerText = `R$ ${valor}`;

    let button = document.createElement("button");
    button.innerText = "Finalizar";

    thirdDiv.append(total);
    thirdDiv.append(p);

    section.append(thirdDiv);
    section.append(button);

    secDiv.append(item);
    secDiv.append(stringValor);

    firstDiv.append(h);

    main.append(firstDiv);
    main.append(secDiv);
    main.append(ul);
    main.append(section);

    body.append(main);
};
console.log(valorTotal(listaDeProdutos));