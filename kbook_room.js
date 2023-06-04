var firebaseConfig = {
      apiKey: "AIzaSyCfN89_WnGG55FPeVK_Yz-6d4R-ZsC2YBk",
      authDomain: "kwitter-f424e.firebaseapp.com",
      databaseURL: "https://kwitter-f424e-default-rtdb.firebaseio.com",
      projectId: "kwitter-f424e",
      storageBucket: "kwitter-f424e.appspot.com",
      messagingSenderId: "521798994489",
      appId: "1:521798994489:web:f8e032fbf306920debdbe8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start codeaawwe
console.log("Room Name -"+ Room_names);
row = "<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End codeeeeeeddeded
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kbook_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kbook_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

