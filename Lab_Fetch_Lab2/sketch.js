let user = {
  fullName : 'name = empty',
  gender : 'gender = empty',
  age : 0
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(43, 45, 66);

  fill(223, 106, 146);
  textSize(40);
  text('Tap to Interact', 50, 80)
  fill(247, 231, 51);
  textSize(30);
  text(user.fullName, 50, 150);
  text(user.gender, 50, 200);
  text(user.age, 50, 250);
}

//llama nombre del usuario
async function getUserData(){
  const response = await fetch ("https://randomuser.me/api/")
  const data = await response.json();
  /* console.log('Data;');
  console.log(data);
  console.log('Data.results');
  console.log(data.results);
  console.log('Data.results[0].name'); */

  //llamada del nombre
  user.fullName = data.results[0].name.first;
  user.gender = data.results[0].gender;
  user.age = data.results[0].dob.age;

   /*  console.log(userMetaData);
  return userMetaData; */
}



function mouseClicked() {
  console.log('Hey!');
  const serverData = fetch("https://randomuser.me/api/");

  console.log(getUserData());
  console.log(serverData);
}

