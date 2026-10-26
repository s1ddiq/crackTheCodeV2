import {key1, key2, key3, key4, key5, key6} from './scripts.js';
let isAnimatingCurrently = true;


function initiateKeys() {
    const inventoryEL = document.getElementById('inventory');
    const inventoryHolder = document.getElementById('blurredBG');
    let inventoryIsOpen = false;
    let keyList = [
        key1 ? 'Key 1 🗝️' : "",
        key2 ? 'Key 2 🗝️' : "",
        key3 ? 'Key 3 🗝️' : "",
        key4 ? 'Key 4 🗝️' : "",
        key5 ? 'Key 5 🗝️' : "",
        key6 ? 'Key 6 🗝️' : "",
        ];

    

    keyList.forEach(keyNumber => {
        if (keyNumber !== '') {
            const keyEL = document.createElement('p');
            keyEL.className = 'key-element';
        
            keyEL.textContent = `${keyNumber}`
            inventoryEL.appendChild(keyEL);

            keyEL.addEventListener('click', function() {
                keyEL.classList.add('borderRedFade');
                setTimeout(() => {         
                    keyEL.classList.remove('borderRedFade');
                    setTimeout(() => {
                        keyEL.textContent = `${keyNumber}`;
                    }, 1200);
                }, 1200);
            })
        }
        return;
    });

    document.body.addEventListener('keydown', e => {
        if (e.key === 'e' && inventoryIsOpen === false) {
            isAnimatingCurrently = false;
            inventoryIsOpen = true;
            inventoryEL.classList.add('showInventory');
            inventoryHolder.classList.add('showInventory');
            // eSound.play();
        } else {
            isAnimatingCurrently = true;
            // kSound.play();
            inventoryIsOpen = false;
            inventoryEL.classList.remove('showInventory');
            inventoryHolder.classList.remove('showInventory');
            inventoryHolder.focus();
        } 
    
    })
}


initiateKeys();