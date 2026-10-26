function initiateGame() {
    console.clear();

    const body = document.body;
    const terminalWindow = document.getElementById('terminal-window');
    const terminalHeader = document.getElementById('terminal-header');
    const terminalBody = document.getElementById('terminal-body');
    const commandInput = document.getElementById('commandInput');
    const lineMarker = document.getElementById('lineMarker');

    let userIPAddress = '192.168.0.1';
    let botIPAddress = '172.16.0.1';
    let connectedToClient = false;
    let traceTimerId = null; // For tracking the trace timer

    const dnsServerNames = [
        "nearest.phone.relay",
        "mainframe.secure.relay",
        "virtual.proxy.connect",
        "vault.security.node",
        "local.host.bridge"
    ];

    const virusTypes = ['trojan', 'adware'];

    const maskTypes = ['subnet', 'vpn', 'ssh'];

    const filesList = ['passwords.txt', 'information.txt'];

    // Fetch File
    function fetchFile(file, response) {
        if (file === 'passwords.txt') {
            response.innerHTML = `
            <p>
                <h3>PASSWORDS.TXT</h3><br>
                HELLO123
            </p>`;
        } else {
            response.innerHTML = `
            <p>
                <h3>INFORMATION.TXT</h3><br>
                HELLO123
            </p>`;
        }
    }

    // Scroll Terminal to Bottom
    function scrollToBottom() {
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    // Clear Input
    function clearInputValue() {
        commandInput.value = '';
    }

    // Command Denied
    function commandDenied() {
        lineMarker.style.color = 'red';
        setTimeout(() => {
            lineMarker.style.color = 'white';
        }, 550);
    }

    // Connect to Server
    function connectToServer(server, responseElement) {
        setTimeout(() => {
            responseElement.innerHTML = `
                <b class="highlightBlue">Connected successfully to the ${server} server 💻</b>
            `;
            connectedToClient = true;
        }, 3500);
    }

    // Timer for Trace
    function timeUntilTraced(responseElement) {
        let timeLeft = 60;
        traceTimerId = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft -= 1;
                console.log(`Time left: ${timeLeft}`);
            } else {
                clearInterval(traceTimerId); // Stop the timer
                traceTimerId = null; // Reset timer ID
                if (connectedToClient) {
                    userHasBeenBusted(responseElement);
                } else {
                    userHasEscaped(responseElement);
                }
            }
        }, 1000);
    }

    // Handle User Busted
    function userHasBeenBusted(responseElement) {
        responseElement.innerHTML = `
            <p>
            <b class="highlightBlue">You have been busted by the FBI!</b><br>
            Type reset to initiate a new game.
        </p>`;
    }

    // Handle User Escaped
    function userHasEscaped(responseElement) {
        responseElement.innerHTML = `
            <p> 
                <b class="highlightBlue">You have escaped!</b><br>
                The client's computer had two files:<br>
                passwords.txt<br>
                information.txt<br>
                You may write: "fetch [FILENAME].txt" :)
            </p>`;
    }

    // Disconnect Function
    function disconnect(responseElement) {
        if (traceTimerId) {
            clearInterval(traceTimerId); // Stop the timer
            traceTimerId = null; // Reset timer ID
        }

        connectedToClient = false; // Update connection state
        responseElement.innerHTML = `
            <p>
                Disconnected from client.
            </p>`;
    }

    // Send Trojan to Client
    function sendTrojanToClient(type, responseElement) {
        responseElement.innerHTML = `
            <p>
                The server has successfully sent a ${type} to the client!<br>
                The client has reported you to the FBI; disconnect from the client immediately!
            </p>`;
        if (!traceTimerId) {
            timeUntilTraced(responseElement); // Start timer only if not already running
        }
    }

    // Handle User Commands
    function createAndDisplayResponse(command) {
        const response = document.createElement('div');
        response.className = 'terminal-response';

        let parsedCommand = command.toLowerCase().split(' ');

        if (parsedCommand[0] === 'help') {
            response.innerHTML = `
                <p>
                    List of commands: <br>
                    <b class="highlightBlue">help</b> - Show this message<br>
                    <b class="highlightBlue">connect</b> [DNS name] - Connects host computer with the targeted DNS name<br>
                    <b class="highlightBlue">disconnect</b> - Disconnects host computer from the connected DNS name<br>
                    <b class="highlightBlue">send</b> [application type] - Sends given application name to the connected DNS name</b><br>
                    <b class="highlightBlue">list</b> - Shows the list of the currently available applications/viruses<br>
                    <b class="highlightRed">exit</b> - Shutdown host computer (you)<br>
                    <b class="highlightBlue">clear</b> - Clears host terminal
                </p>`;
        } else if (parsedCommand[0] === 'connect' && dnsServerNames.includes(parsedCommand[1]) && !connectedToClient) {
            response.innerHTML = `<p>Connecting to server...</p>`;
            connectToServer(parsedCommand[1], response);
        } else if (parsedCommand[0] === 'disconnect') {
            disconnect(response);
        } else if (parsedCommand[0] === 'list') {
            response.innerHTML = `
                <p>
                <b class="highlightBlue">List of currently available malware:</b><br>
                - trojan<br>
                - adware
                </p>`;
        } else if (connectedToClient && parsedCommand[0] === 'send' && virusTypes.includes(parsedCommand[1])) {
            sendTrojanToClient(parsedCommand[1], response);
        } else if (parsedCommand[0] === 'fetch' && filesList.includes(parsedCommand[1])) {
            fetchFile(parsedCommand[1], response);
        } else if (parsedCommand[0] === 'reset') {
            initiateGame();
        } else {
            response.innerHTML = `
                <p>
                    '${command}' is not recognized. Type <b class="highlightBlue">help</b> for a list of commands.
                </p>`;
            commandDenied();
        }

        terminalBody.appendChild(response);
        scrollToBottom();
        clearInputValue();
    }

    // Handle Command Input
    function createAndSendCommand() {
        commandInput.addEventListener('keydown', event => {
            if (event.key === 'Enter' && commandInput.value !== '') {
                createAndDisplayResponse(commandInput.value);
            }
        });
    }

    createAndSendCommand();
}

initiateGame();
