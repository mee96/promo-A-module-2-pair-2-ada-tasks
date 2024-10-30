"use strict";

console.log("konichiwa sekai");

const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];


const taskList = document.querySelector(".task");


taskList.innerHTML = tasks.map(task => {
  
  return `<li class="task" >${task.name}</li>`;
}).join('');

