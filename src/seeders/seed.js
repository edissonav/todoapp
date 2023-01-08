
const db =require('../utils/database');

const Users = require('../models/users.model');
const Todos= require('../models/todos.models');

const users =[
  {username: 'edisson', email: 'edisson.avila@gmail.com', password: '1234'},  
  {username: 'romina', email: 'romina@gmail.com', password: '1234'}  ,
  {username: 'cielita', email: 'cielita.avila@gmail.com', password: '1234'}  

];
const todos =[
    {title: 'tarea 1', description: 'descripcion de tarea1', userId: 1},  
    {title: 'tarea 2', description: 'descripcion de tarea2', userId: 1},  
    {title: 'tarea imposible',  userId: 1},  
    {title: 'dormir', description: 'descripcion de tarea', userId: 3},  

];
//const categories =[];
//const todoscategories =[];


db.sync({force:true})
.then(()=>{
    console.log('iniciando con el sembra');
    users.forEach((user)=>{Users.create(user)});
    todos.forEach((todo)=> {Todos.create(todo)});
})
.catch((error) => console.log(error));