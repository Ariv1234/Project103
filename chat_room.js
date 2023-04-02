var firebaseConfig = {
    apiKey: "AIzaSyBvpfZHLOcfieZfoT0iqLdgR9P6Jae1qio",
    authDomain: "social-media-app-e7ed6.firebaseapp.com",
    databaseURL: "https://social-media-app-e7ed6-default-rtdb.firebaseio.com",
    projectId: "social-media-app-e7ed6",
    storageBucket: "social-media-app-e7ed6.appspot.com",
    messagingSenderId: "400587086635",
    appId: "1:400587086635:web:ccdea0504cf673288a836e"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

// function send() {
//   firebase.database().ref(room_name).push({
//     name:user_name,
//     message:msg,
//     like:0
//   });
// }

// function updateLike(message_id)
// {
//   console.log("clicked on like button - " + message_id);
//   button_id = message_id;
//   likes = document.getElementById(button_id).value;
//   updated_likes = Number(likes) + 1;
//   console.log(updated_likes);

//   firebase.database().ref(room_name).child(message_id).update({
//     like : updated_likes
//   });
  
// }

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "chat_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "chat_room.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
