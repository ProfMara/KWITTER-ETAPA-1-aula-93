
//TROQUE PELO SEUS LINK DO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDLqAoW9NEbypnJMu2XROBf4wt2yF6TY6E",
  authDomain: "aaaaaaaaaaa-b387c.firebaseapp.com",
  databaseURL: "https://aaaaaaaaaaa-b387c-default-rtdb.firebaseio.com",
  projectId: "aaaaaaaaaaa-b387c",
  storageBucket: "aaaaaaaaaaa-b387c.appspot.com",
  messagingSenderId: "558061163711",
  appId: "1:558061163711:web:73c7631dc6848ce552a20a",
  measurementId: "G-1NRS3P6EH5"
};


firebase.initializeApp(firebaseConfig);
var database = firebase.database();


function getData() {  
 database.ref("/").on('value', (data)=> { 
  document.getElementById("output").innerHTML = ""; 
  data.forEach((childSnapshot)=>{ 
    childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();


function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

//essa função adiciona a sala no clique do botão
function addRoom(){
    //guarda o nome que o usuário digitou 
  
    //coloca no localStorage
 
    //troca de site
   
    //escreve no banco de dados o nome da sala
    database.ref("/").child(roomName).update({
      purpose : "adicionar nome de sala"
    });

}
//apaga o nome do usuário


//exibe o nome do usuário no site kwitterRoom.js
