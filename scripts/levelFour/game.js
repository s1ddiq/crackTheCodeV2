function initiateGame() {
  // TO DO
  // PREVIOUSLY WAS CALLED TERMINALRESPONSE
  // I NAMED BACK TO RESPONSE

  // also guys pls forgive me i suck at js
  console.clear();
  const body = document.body;
  const terminalWindow = document.getElementById("terminal-window");
  const terminalHeader = document.getElementById("terminal-header");
  const terminalBody = document.getElementById("terminal-body");
  const commandInput = document.getElementById("commandInput");
  const lineMarker = document.getElementById("lineMarker");
  const countEL = document.querySelector(".countEL");
  let userIPAddress = "192.168.0.1";
  let botIPAddress = "172.16.0.1";
  let connectedToClient = false;
  let connectedToServer = false;
  // commandInput.focus();
  let isMasked = false;
  let currentMask = "";

  function proceedToLevel5() {
    localStorage.setItem("key4", true);
    localStorage.setItem("level4", true);
    terminalWindow.classList.add("fade");

    setTimeout(() => {
      terminalWindow.style.display = "none";
      window.location.href = "levelFive.html";
    }, 2000);
  }

  const dnsServerNames = [
    "nearest.phone.relay",
    "mainframe.secure.relay",
    "virtual.proxy.connect",
    "vault.security.node",
    "local.host.bridge",
  ];

  const virusTypes = ["trojan", "adware", "keylogger"];

  const maskTypes = ["subnet", "vpn", "ssh"];

  const filesList = ["passwords.txt", "information.txt"];

  function fetchFile(file, response) {
    if (file === "passwords.txt") {
      response.innerHTML = `
          <p>
              <h3>PASSWORDS.TXT</h3><br>
              C1ph3r-X - computer<br>
              L0CKB1ND - admin<br>
              CT1CV2 - root
          </p>
          `;
    } else {
      response.innerHTML = `
          <p>
              <h3>INFORMATION.TXT</h3><br>
              <b class="highlightRed">You may now attempt all 3 passwords to figure out which one works</b><br> 
              PUBLIC IP ADDRESS: ${userIPAddress}<br>
              To enter each password, simple type: "sudo [PASSWORD]"<br>
              Only then will you proceed to L5 :)
          </p>
          `;
    }
  }

  function scrollToBottom() {
    terminalBody.scrollTop = terminalBody.scrollHeight;
    response.scrol;
  }

  function clearInputValue() {
    commandInput.value = "";
  }

  function commandDenied() {
    lineMarker.style.color = "red";
    setTimeout(() => {
      lineMarker.style.color = "white";
    }, 550);
  }

  function createNewLineMarker() {
    return "New line marker created.";
  }

  function connectToServer(server, responseElement) {
    setTimeout(() => {
      responseElement.innerHTML = `
              <b class="highlightBlue">Connected successfully to the ${server} server 💻</b>
          `;

      connectedToClient = true;
    }, 3500);
  }

  function timeUntilTraced(responseElement) {
    let timeLeft = isMasked ? 120 : 60; // Time in seconds
    const intervalId = setInterval(() => {
      if (connectedToClient) {
        if (timeLeft > 0) {
          timeLeft -= 1;
          console.log(`Time left: ${timeLeft}`);
        } else {
          userHasBeenBusted(responseElement);
          clearInterval(intervalId);
        }
      } else {
        // If disconnected before timer runs out, escape successfully
        userHasEscaped(responseElement);
        clearInterval(intervalId);
      }
    }, 1000);
  }

  function userHasBeenBusted(responseElement) {
    responseElement.innerHTML = `
          <p>
          <b class="highlightRed">You have been busted by the FBI!</b><br>
          type reset to initiate a new game.
      `;
  }

  function userHasEscaped(responseElement) {
    responseElement.innerHTML = `
          <p> 
          
              <b class="highlightBlue">You have escaped!</b><br>
              The following data was sent over to your computer via your malware<br>
              The clients computer had two files:<br>
              <b class="highlightRed">passwords.txt</b><br>
              <b class="highlightRed">information.txt</b><br>
              You may write: "fetch [FILENAME].txt" :)
          </p>
      `;
  }

  function increaseTimerBasedOnMask(mask) {
    isMasked = true;
    currentMask = mask;
  }

  function sendTrojanToClient(type, responseElement) {
    responseElement.innerHTML = `
        <p>
            The server has successfully setup a ${type} to the client!<br>
            The client has reported you to the FBI disconnect from the client immediately!<br>
            <b class="highlightRed countEL">${isMasked ? `60s: MASKED by ${currentMask}` : "60s"}</b>
        </p>
        `;
    setTimeout(() => {
      timeUntilTraced(responseElement);
    }, 1);
  }

  function createAndDisplayResponse(command) {
    // may need to add "arguement"
    const response = document.createElement("div");
    response.className = "terminal-response";

    let parsedCommand = command.toLowerCase().split(" ");
    // console.log(parsedCommand) //TEST

    /* CONVERT ALL THE LIKE SITUATIONS TO FUNCTIONS LIKE HELP AND MAKE A HELP FUNCTION INSTEAD OF ALL THIS JUMBLED CODE
  
      MULTILINE ADD ANY IDEAS HERE!! :)
      */
    if (parsedCommand[0] === "help") {
      response.innerHTML = `
              <p>
                  List of commands: <br>
                  <b class="highlightBlue">help</b> - Show this message<br>
                  <b class="highlightBlue">connect</b> [DNS name] - Connects host computer with the targetted DNS name | Run "connect" for a list of DNS names<br>
                  <b class="highlightBlue">disconnect</b> - Disconnects host computer from the connected DNS name<br>
                  <b class="highlightBlue">send</b> [malware type] - Sends given malware name to the connected DNS name</b><br>
                  <b class="highlightBlue">config</b> [mask] - Hides identity giving you longer access to the system<br>
                  <b class="highlightBlue">list</b> - Shows the list of the currently available malware/viruses<br>
                  <b class="highlightBlue">info</b> - Information about creator<br>
                  <b class="highlightRed">exit</b> - Shutdown host computer (you)<br>
              </p>
          `;
    } else if (
      parsedCommand[0] === "connect" &&
      dnsServerNames.includes(parsedCommand[1]) &&
      connectedToClient === false
    ) {
      connectedToClient = true;
      response.innerHTML = `
              <p>
                  Connecting to server...
                  </p>
                  `;
      connectToServer(parsedCommand[1], response);
    } else if (parsedCommand[0] === "disconnect" && connectedToClient) {
      connectedToClient = false;
      response.innerHTML = `
              <p>
                  Disconnected from client.
              </p>
          `;
    } else if (parsedCommand[0] === "connect" && connectedToClient === false) {
      // ADD || parsedCommand[0] === 'dns' (MAYBE)
      response.innerHTML = `
              <b class="highlightBlue">Here is a list of all DNS servers available:</b><br>
              nearest.phone.relay - safe, (can still be traced)<br>
              mainframe.secure.relay - safe, (can still be traced)<br>
              virtual.proxy.connect - safe, (can still be traced)<br>
              vault.security.node - high risk unlimited control<br>
              local.host.bridge - safe, (can still be traced)
  
              
          `;
    } else if (parsedCommand[0] === "list") {
      response.innerHTML = `
                  <p>
                  <b class="highlightBlue">List of currently available malware:</b><br><br>
                   trojan<br>
                  adware<br>
                  keylogger
                  </p>
              `;
    } else if (
      connectedToClient &&
      parsedCommand[0] === "send" &&
      virusTypes.includes(parsedCommand[1])
    ) {
      let virusType = parsedCommand[1];
      sendTrojanToClient(virusType, response);
    } else if (parsedCommand[0] === "send" && connectedToClient === false) {
      response.innerHTML = `
              <h3>
                  You are not connected to the target!<br>
                  (connect [DNS Server])
              </h3>
          `;
    } else if (
      parsedCommand[0] === "config" &&
      !maskTypes.includes(parsedCommand[1])
    ) {
      // config-cmd
      response.innerHTML = `
              <p>
                  List of masks you can use to hide your identity:<br><br>

                    subnet<br>
                    vpn<br>
                    ssh<br><br>
                    
                    You can mask by using config [mask type]
                    This will give you extra time to disconnect from the client so the FBI cannot trace your IP which is: ${userIPAddress}
              </p>
          `;
    } else if (
      parsedCommand[0] === "config" &&
      maskTypes.includes(parsedCommand[1])
    ) {
      let maskType = parsedCommand[1];
      response.innerHTML = `
              <p>
                  You are now masked by a ${maskType}!<br>
                  For the time being you are safe from any tracing.
              </p>
          `;
      increaseTimerBasedOnMask(maskType);
    } else if (parsedCommand[0] === "masks") {
      response.innerHTML = `
              <p>
                  subnet<br>
                  vpn<br>
                  ssh
              </p>
          `;
    } else if (parsedCommand[0] === "reset") {
      terminalBody.innerHTML = ` <div id="commandInterface">
                  <span id="lineMarker" >user:-$</span>
                  <input type="text" id="commandInput" class="commandInterface" >
              </div>`;
      initiateGame();
    } else if (
      parsedCommand[0] === "fetch" &&
      filesList.includes(parsedCommand[1])
    ) {
      fetchFile(parsedCommand[1], response);
    } else if (parsedCommand[0] === "exit") {
      terminalWindow.classList.add("fade");
      response.innerHTML = `Refresh to restart`;
    } else if (parsedCommand[0] === "sudo" && parsedCommand[1] === "l0ckb1nd") {
      response.innerHTML = `
          <b class="highlightRed textSpacing">You make this look easy...</b>
          <br>
         You have successfully completed Level 4! 🎉<br>
          your journey is far from over. Stay sharp and keep going!<br>
          <br>
          The next level awaits, Good luck, hacker. 🔓
          `;

      setTimeout(() => {
        proceedToLevel5();
      }, 7000);
    } else if (parsedCommand[0] === "send") {
      response.innerHTML = `
          <p>
          <b class="highlightBlue">List of currently available malware to send:</b><br><br>
           trojan<br>
          adware<br>
          keylogger<br>
          (send [TYPE])
          </p>
      `;
    } else if (parsedCommand[0] === "info") {
      response.innerHTML = `
           <p id="lineMarker">
              Well I (siddiq) made this DUH... :>
              11.28.24 THIS WAS A ONE DAY PROJECT LOL
          </p>
          `;

      console.log(parsedCommand[1]);
    } else if (parsedCommand[0] === "sudo" && parsedCommand[1] === undefined) {
      response.innerHTML = `
            <p>
            Not found, did you mean: sudo [PASSWORD]?
            </p>
        `;
      console.log("sudo ");
    } else if (
      parsedCommand[0] === "disconnect" &&
      connectedToClient === false
    ) {
      response.innerHTML = `
          <p>
            You are not connected to a client!
          </p>
        `;
    } else {
      response.innerHTML = `
          <p>
              '${command}' not recognized.<br>
              Type <b class="highlightBlue">HELP</b> for a list of commands.
          </p>
          `;
      commandDenied();
    }

    if (terminalBody.children.length >= 2) {
      terminalBody.insertBefore(response, terminalBody.children[1]); // INSERTS ELEMENT BEFORE CREATED THAT TERMINAL EFFECT WOOOOOOHOOOO!
    }
    // terminalBody.appendChild(response);
    commandInput.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function createAndSendCommand() {
    commandInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && commandInput.value !== "") {
        createAndDisplayResponse(commandInput.value);
        clearInputValue();
        createNewLineMarker();
      }
      return;
    });
  }
  createAndSendCommand();
}

document.getElementById("commandInput").focus();
initiateGame();

// ARCHIVED
// terminalBody.addEventListener('keydown', event => {
//     event.key === 'Enter' ? commandInput.value = '' : null; // clears input after entry
// })
//  commandInput.value.includes(IPAddress) ? console.log('Ip address') : console.log('does not include ip address');

function loadEasterEgg() {
  const colors = ["tomato", "orange", "yellowgreen"];
  const redCircle = document.getElementById("red-circle");
  const yellowCircle = document.getElementById("yellow-circle");
  const greenCircle = document.getElementById("green-circle");
  const circles = document.querySelectorAll(".circle");

  circles.forEach((circle) => {
    circle.addEventListener("click", function () {
      circle.style.backgroundColor = `${
        colors[Math.floor(Math.random() * colors.length)]
      }`; // picks a random color from the color array
    });
  });
}

loadEasterEgg();
// function autoScroll() {

// }
// CODE

//  List of commands:
// help - Show this message
//  connect [DNS name] - Connects host computer with the targetted DNS name
// disconnect - Disconnects host computer from the connected DNS name
// exit - Shutdown host computer (you)
// list - Shows the list of the currently available malware
// send [malware type] - Sends given malware name to the connected DNS name
//
//

//   case 'help':
// colors = [redCircle];
// break;
// default:
//     lineMarker.style.color = 'red';
//     setTimeout(() => {
//         lineMarker.style.color = 'white';
//     }, 500);
//     terminalResponse.innerHTML = `
//                             <p>
//                             Invalid command. Type <i style="color:#006eff;cursor:pointer">HELP</i> for a list of commands.
//                             </p>
//                             `;
//     break;
