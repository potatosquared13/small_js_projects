var doorImage1 = document.getElementById("door1");
var doorImage2 = document.getElementById("door2");
var doorImage3 = document.getElementById("door3");
var startbutton = document.getElementById('start');

var botDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
var beachDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
var spaceDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
var closedDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

var numClosedDoors = 3;
var openDoor1, openDoor2, openDoor3;
var currentlyPlaying = true;


const isBot = door => {
  if (door.src === botDoorPath) return true;

  return false;
};

const isClicked = door => {
  if (door.src === closedDoorPath) return false;
  
  return true;
};

const playDoor = door => {
  numClosedDoors--;

  if (numClosedDoors === 0) gameOver('win');
  else if (isBot(door)) gameOver(); //add later
};

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);

  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else if (choreDoor === 2) {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
};

doorImage1.onclick = () => {
  if (currentlyPlaying === true && isClicked(doorImage1) === false) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
  if (currentlyPlaying === true && isClicked(doorImage2) === false) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if (currentlyPlaying === true && isClicked(doorImage3) === false) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

startbutton.onclick = () => {
  if (currentlyPlaying === false) startRound();
}

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startbutton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

const gameOver = (status) => {
  if (status === 'win') startbutton.innerHTML = 'You win! Play again?';
  else startbutton.innerHTML = 'You lose! Play again?';
  currentlyPlaying = false;
};

startRound();
