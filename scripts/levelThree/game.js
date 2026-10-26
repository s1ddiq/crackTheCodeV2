import { key1, key2, key3, key4, key5, key6 } from "../scripts.js";

function initiateSound() {
  const backgroundMusic = document.getElementById("backgroundMusic");

  // backgroundMusic.play();
  // backgroundMusic.volume = 0.2;
}

initiateSound();

function initiateGame() {
  console.log("😏".codePointAt);
  console.log("😏".valueOf);
  // const eSound = document.getElementById('eKey'); discontinued
  // const kSound = document.getElementById('kKey'); discontinued
  const wrong = document.getElementById("wrong");
  const secretCode = "U+1F60F";
  const inventoryEL = document.getElementById("inventory");
  const inventoryHolder = document.getElementById("blurredBG");
  let inventoryIsOpen = false;
  let keyList = [
    key1 ? "Key 1 🗝️" : `You do not currently have any keys!`,
    key2 ? "Key 2 🗝️" : "",
  ];

  keyList.forEach((keyNumber) => {
    if (keyNumber !== "") {
      const keyEL = document.createElement("p");
      keyEL.className = "key-element";

      keyEL.textContent = `${keyNumber}`;
      inventoryEL.appendChild(keyEL);

      keyEL.addEventListener("click", function () {
        keyEL.textContent = "DENIED";
        keyEL.classList.add("borderRedFade");
        wrong.play();
        setTimeout(() => {
          keyEL.classList.remove("borderRedFade");
          setTimeout(() => {
            keyEL.textContent = `${keyNumber}`;
          }, 1200);
        }, 1200);
      });
    }
    return;
  });

  let messageBoxIsOpen = false;

  // console.log(new Date); // used for testing later

  // console.log(keys); // testing
  const grid = document.querySelector(".grid");
  const cell = document.querySelector(".cell");

  let h = document.getElementById("m");
  let e = document.getElementById("a");
  let l = document.getElementById("i");
  let p = document.getElementById("l");
  const notificationEL = document.querySelector(".notificationEL");
  let isAnimatingCurrently = true;

  let letters = [h, e, l, p];

  if (isAnimatingCurrently) {
    letters.forEach((letter, index) => {
      setInterval(() => {
        letter.classList.add("bgChange");
        letter.classList.add("borderRedFade");
      }, index * 500);

      setTimeout(() => {
        letter.classList.add("posChange");

        setTimeout(() => {
          grid.classList.add("hideGrid");
          setTimeout(() => {
            grid.classList.add("hidden");
            notificationEL.classList.add("showNotification");
            setTimeout(() => {
              notificationEL.classList.remove("showNotification");
              notificationEL.classList.add("manageNotification");

              setTimeout(() => {
                buttonEL.style.display = "flex";
                // buttonEL.classList.add('opacityOne');
                buttonEL.style.opacity = "1";
                notificationEL.classList.add("hidden");
              }, 1000);
            }, 5000);
          }, 2000);
        }, 4000);
      }, 2000);
    });
  }

  const buttonEL = document.getElementById("showMessage");
  const messageBox = document.querySelector(".messageBox");

  buttonEL.addEventListener("click", () => {
    document.body.removeEventListener("keydown", e);
    // Show the notification
    messageBox.classList.remove("hide");
    messageBox.classList.add("show");
    buttonEL.textContent = "📭";

    // Automatically hide after 10 seconds
  });

  const encodedTitle = document.getElementById("encodedTitle");

  encodedTitle.addEventListener("click", function () {});

  // document.body.addEventListener('keydown', e => {
  //     if (e.key === 'E' && inventoryIsOpen) {
  //         inventoryEL.classList.remove('showInventory');
  //     } else {
  //         inventoryEL.classList.add('showInventory');
  //     }
  // })

  // OTHER FUNCTIONALITY LEVEL 3 -=-=-=-=-=|
  const smirkEmoji = document.getElementById("smirkEmoji");
  let emojisList = [
    "😎",
    "😅",
    "🤨",
    "🤐",
    "🙃",
    "😴",
    "😱",
    "🤡",
    "💀",
    "👿",
    "2024 Easter Egg Found",
    "🧐",
  ];

  let getRandomEmoji;

  smirkEmoji.addEventListener("mouseenter", function () {
    getRandomEmoji = Math.floor(Math.random() * emojisList.length);
    smirkEmoji.textContent = `${emojisList[getRandomEmoji]}`;
  });

  smirkEmoji.addEventListener("mouseleave", function () {
    console.clear();
    console.log(
      `The console was cleared due to an abundance of error messages. ${emojisList[getRandomEmoji]} also...Happy 2024 Easter!`,
    );
    smirkEmoji.textContent = "😏";
  });

  // U+1F60F

  function proceedToLevelFour() {
    buttonEL.textContent = "📬";
    notificationEL.textContent =
      "You have solved HELP, we shall now proceed to L4...";
    notificationEL.style.fontSize = "1.6em";
    notificationEL.classList.add("showNotification");
    setTimeout(() => {
      notificationEL.classList.remove("showNotification");
      setTimeout(() => {
        window.location.href = "levelFour.html";
      }, 1000);
    }, 5000);
  }
  const codeInputL3 = document.getElementById("codeEntryL3");

  document.body.addEventListener("keydown", (e) => {
    if (e.key === "e" && inventoryIsOpen === false) {
      isAnimatingCurrently = false;
      inventoryIsOpen = true;
      inventoryEL.classList.add("showInventory");
      inventoryHolder.classList.add("showInventory");
      // eSound.play();
    } else {
      isAnimatingCurrently = true;
      // kSound.play();
      inventoryIsOpen = false;
      inventoryEL.classList.remove("showInventory");
      inventoryHolder.classList.remove("showInventory");
      inventoryHolder.focus();
    }

    console.log(e.key);
    if (e.key === "Enter" && codeInputL3.value === secretCode) {
      localStorage.setItem("level3", true);
      localStorage.setItem("key3", true);
      messageBox.style.top = "-300px";
      messageBox.style.opacity = "0";
      buttonEL.classList.remove("opacityOne");
      setTimeout(() => {
        buttonEL.classList.add("hidden");
      }, 50);
      setTimeout(() => {
        proceedToLevelFour();
      }, 2000);
      encodedTitle.classList.add("borderGreenFade");
      setTimeout(() => {
        encodedTitle.classList.remove("borderGreenFade");
      }, 500);
      console.log(e.key);
    } else if (e.key === "Enter" && codeInputL3.value !== secretCode) {
      encodedTitle.classList.add("borderRedFade");

      setTimeout(() => {
        encodedTitle.classList.remove("borderRedFade");
      }, 500);
    }
  });

  //keycode of E is 69
}

setTimeout(() => {
  initiateGame();
}, 1250);
