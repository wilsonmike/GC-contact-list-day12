"use strict"; 
let contacts =[]; 
let contactsContainer = document.querySelector(".contacts-container");

let display = () => {
    contactsContainer.innerHTML = "";
    contacts.forEach((item, index) => {
        let card = document.createElement("div");
        card.classList.add("card","module"); 
        let name = document.createElement("p");
        // setting innertext from dot notation
        name.innerText = item.name;
        let phone = document.createElement("p");
        phone.innerText = item.phone; 
        let relation = document.createElement("p");
        relation.innerText = item.relation;  
        let deletebutton = document.createElement("button");
        deletebutton.innerText = "X"; 
        deletebutton.setAttribute("data-index",index);
        deletebutton.classList.add("delete"); 
        card.append(name,phone,relation,deletebutton); 
        contactsContainer.append(card);
    });
};

display(); 

contactsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
        let index = event.target.getAttribute("data-index"); 
        contacts.splice(index,1); 
        console.log(contacts); 
        display(); 
    }
});

let form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let snapshot = new FormData(form); 
    let name = snapshot.get("name");
    let phone = snapshot.get("phone");
    let relation = snapshot.get("relation"); 
    let newObject = {
        name: name,
        phone: phone,
        relation: relation
    };
    contacts.push(newObject); 
    display(); 
    form.reset(); 
}); 

let addContact = document.querySelector(".add-contacts");
function myFunction() {
    var x = document.querySelector(".form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  addContact.addEventListener("click" , () => {
    myFunction(); 
    let z = document.querySelector(".form");
    z.classList.add("form-show");
    addContact.classList.add("button-run")
  });

  let stayInTouch = document.querySelector(".branding");
  stayInTouch.addEventListener("click", () => {
    addContact.classList.add("glow");
  });