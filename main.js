// > Sur base de l'html fourni :

// # 1. En utilisant une boucle 
// pour appliquer un écouteur d'événement sur chaque "li", créer un programme qui permet de 
//lancer une function du nom de sayMyName 
//qui affiche une alert du texte du li sur le quel on clique.

let allLi = document.querySelectorAll('li');

let buttonInverser = document.querySelectorAll('input')[2];



allLi.forEach((element, i) => {
    // element.addEventListener('click', () => {
    //     alert(element.innerHTML)
    // })


    // # 2. En utilisant le meme procédé qu'au dessus Créer un programme qui permet de modifier le contenu de chaque Li en double cliquant dessus via un prompt(attention peut-être que tu devras commenter l'exercice précédent)
    element.addEventListener('dblclick', () => {
        element.innerHTML = prompt('....');
    })
});


// # 3. Créer un programme qui permet d'inverser l'ordre de deux li ! avec l'aide des inputs et du button inverser
buttonInverser.addEventListener('click', () => {
    let allLi = document.querySelectorAll('li');
    allLi = Array.from(allLi);
    let firstInput = document.querySelector('#li-one').value;
    let secondInput = document.querySelector('#li-two').value;
    let elementAIndex, elementBIndex, temp;
    allLi.forEach(e => {
        if (firstInput == e.innerHTML) {
            elementAIndex = allLi.indexOf(e);
            temp = e.innerHTML
            console.log(temp);
        }
    })

    allLi.forEach(el => {
        if (secondInput == el.innerHTML) {
            elementBIndex = allLi.indexOf(el);
        }
    })

    if (firstInput == allLi[elementAIndex].innerHTML && secondInput == allLi[elementBIndex].innerHTML) {
        [allLi[elementAIndex].innerHTML, allLi[elementBIndex].innerHTML] = [allLi[elementBIndex].innerHTML, temp];
    }
})