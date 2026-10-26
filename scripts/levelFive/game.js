import { useAlert } from "../scripts.js";

const markedWords = document.querySelectorAll(".marked");

const manuscriptText = document.getElementById("manuscriptText");

const terminalMessage = document.getElementById("terminalMessage");

const stageElement = document.getElementById("stage");

const answerInput = document.getElementById("answerInput");

const submitAnswer = document.getElementById("submitAnswer");

const feedback = document.getElementById("feedback");

const finalSection = document.getElementById("finalSection");

const finalMessage = document.getElementById("finalMessage");

const continueButton = document.getElementById("continueButton");

let stage = 1;

/*
===========================================================
                    PUZZLE DATA
===========================================================
*/

const markedMessage = [
  "WATCHED",
  "COUNTED",
  "SPEAK",
  "RETURN",
  "COUNT",
  "READ",
  "FOLLOW",
  "REVERSE",
];

/*
===========================================================
                    STAGE I
===========================================================
*/

function showStageOne() {
  terminalMessage.innerHTML = `

        <p>
            The manuscript contains words that feel strangely
            deliberate.
        </p>

        <p>
            Find the words that do not belong to the surrounding
            sentences.
        </p>

        <p class="dim">
            Their order matters.
        </p>

    `;

  stageElement.textContent = "STAGE I · THE MARKED WORDS";
}

/*
===========================================================
                    STAGE II
===========================================================
*/

function showStageTwo() {
  terminalMessage.innerHTML = `

        <p>
            You found the words.
        </p>

        <div class="discovered">
            WATCHED · COUNTED · SPEAK · RETURN
            · COUNT · READ · FOLLOW · REVERSE
        </div>

        <p>
            They are not a sentence.
        </p>

        <p class="dim">
            What do they tell you to do?
        </p>

    `;

  stageElement.textContent = "STAGE II · INTERPRETATION";
}

/*
===========================================================
                    STAGE III
===========================================================
*/

function showStageThree() {
  terminalMessage.innerHTML = `

        <p>
            The instruction has been uncovered.
        </p>

        <div class="instruction">
            COUNT · READ · FOLLOW · REVERSE
        </div>

        <p>
            The manuscript repeatedly hides numbers:
        </p>

        <div class="numbers">
            3 · 7 · 4 · 8 · 13
        </div>

        <p class="dim">
            Something has been counted.
            Something must now be followed.
        </p>

    `;

  stageElement.textContent = "STAGE III · THE NUMBERS";
}

/*
===========================================================
                    STAGE IV
===========================================================
*/

function showStageFour() {
  terminalMessage.innerHTML = `

        <p>
            The numbers point toward the structure of the
            manuscript.
        </p>

        <p>
            But the archivist left one final instruction:
        </p>

        <blockquote>
            "The beginning has been placed at the end."
        </blockquote>

        <p class="dim">
            What must you do?
        </p>

    `;

  stageElement.textContent = "STAGE IV · THE REVERSAL";
}

/*
===========================================================
                    STAGE V
===========================================================
*/

function showStageFive() {
  terminalMessage.innerHTML = `

        <p>
            The record has been reversed.
        </p>

        <p>
            One symbol remains unexplained.
        </p>

        <div class="xiii">
            XIII
        </div>

        <p>
            The manuscript contains exactly thirteen paragraphs.
        </p>

        <p class="dim">
            XIII is not decoration.
        </p>

    `;

  stageElement.textContent = "STAGE V · XIII";
}

/*
===========================================================
                    FINAL
===========================================================
*/

function showFinal() {
  terminalMessage.innerHTML = `

        <p>
            You understand the rule.
        </p>

        <p>
            Thirteen was never simply a number.
        </p>

        <p class="dim">
            It is the key.
        </p>

        <div class="final-clue">
            TAKE THE THIRTEENTH LETTER
        </div>

    `;

  stageElement.textContent = "FINAL EXTRACTION";
}

/*
===========================================================
                    CHECK ANSWERS
===========================================================
*/

function normalize(value) {
  return value.trim().toUpperCase().replace(/\s+/g, " ");
}

function checkAnswer() {
  const answer = normalize(answerInput.value);

  if (!answer) {
    return;
  }

  /*
    -----------------------------------------------
    STAGE 1
    -----------------------------------------------
    */

  if (stage === 1) {
    const expected = markedMessage.join(" ");

    if (
      answer === expected ||
      answer === "WATCHED COUNTED SPEAK RETURN COUNT READ FOLLOW REVERSE"
    ) {
      stage = 2;

      answerInput.value = "";

      feedback.textContent = "THE WORDS WERE DELIBERATE.";

      feedback.className = "correct";

      showStageTwo();

      return;
    }

    /*
        Allow the player to submit individual discovery
        attempts without immediately failing.
        */

    feedback.textContent = "The manuscript still seems to be hiding something.";

    feedback.className = "wrong";

    return;
  }

  /*
    -----------------------------------------------
    STAGE 2
    -----------------------------------------------
    */

  if (stage === 2) {
    if (
      answer.includes("COUNT") &&
      answer.includes("READ") &&
      answer.includes("FOLLOW") &&
      answer.includes("REVERSE")
    ) {
      stage = 3;

      answerInput.value = "";

      feedback.textContent = "AN INSTRUCTION EMERGES.";

      feedback.className = "correct";

      showStageThree();

      return;
    }

    feedback.textContent = "Those words are telling you something.";

    feedback.className = "wrong";

    return;
  }

  /*
    -----------------------------------------------
    STAGE 3
    -----------------------------------------------
    */

  if (stage === 3) {
    if (answer === "3 7 4 8 13" || answer === "374813") {
      stage = 4;

      answerInput.value = "";

      feedback.textContent = "THE NUMBERS ARE NOT RANDOM.";

      feedback.className = "correct";

      showStageFour();

      return;
    }

    feedback.textContent =
      "Look for the numbers the manuscript deliberately preserved.";

    feedback.className = "wrong";

    return;
  }

  /*
    -----------------------------------------------
    STAGE 4
    -----------------------------------------------
    */

  if (stage === 4) {
    if (
      answer === "REVERSE" ||
      answer === "READ BACKWARDS" ||
      answer === "REVERSE THE MANUSCRIPT"
    ) {
      stage = 5;

      answerInput.value = "";

      feedback.textContent = "THE ORDER WAS WRITTEN BACKWARDS.";

      feedback.className = "correct";

      showStageFive();

      return;
    }

    feedback.textContent = "The beginning and the end have changed places.";

    feedback.className = "wrong";

    return;
  }

  /*
    -----------------------------------------------
    STAGE 5
    -----------------------------------------------
    */

  if (stage === 5) {
    if (answer === "13" || answer === "XIII" || answer === "THIRTEEN") {
      stage = 6;

      answerInput.value = "";

      feedback.textContent = "XIII IS THE KEY.";

      feedback.className = "correct";

      showFinal();

      return;
    }

    feedback.textContent =
      "What symbol appears where the final instruction should be?";

    feedback.className = "wrong";

    return;
  }

  /*
    -----------------------------------------------
    FINAL EXTRACTION
    -----------------------------------------------
    */

  if (stage === 6) {
    if (
      answer === "THIRTEENTH LETTER" ||
      answer === "TAKE THE THIRTEENTH LETTER"
    ) {
      unlockFinal();

      return;
    }

    feedback.textContent = "XIII tells you what position to use.";

    feedback.className = "wrong";
  }
}

/*
===========================================================
                    FINAL ANSWER
===========================================================
*/

function unlockFinal() {
  stage = 7;

  stageElement.textContent = "ORDER XIII · COMPLETE";

  feedback.textContent = "";

  finalSection.classList.remove("hidden");

  finalMessage.innerHTML = `
        You have finally read what was never written.
        <br><br>
        The Order accepts you.
    `;
}

submitAnswer.addEventListener("click", checkAnswer);

answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

/*
===========================================================
                    INITIALIZE
===========================================================
*/

showStageOne();

/*
===========================================================
                    CONTINUE
===========================================================
*/

continueButton.addEventListener("click", () => {
  useAlert("The thirteenth door has opened.", "success");
});
