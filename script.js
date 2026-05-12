const answers = {};

document.querySelectorAll(".option").forEach(button => {

  button.addEventListener("click", () => {

    const parent = button.parentElement;

    const question = parent.dataset.question;

    parent.querySelectorAll(".option").forEach(btn => {
      btn.classList.remove("selected");
    });

    button.classList.add("selected");

    answers[question] = parseInt(button.dataset.value);

  });

});

function calculateSize(){

  const values = Object.values(answers);

  if(values.length < 5){

    alert("Answer all questions first 💋");

    return;
  }

  const total = values.reduce((a,b)=>a+b,0);

  let size = "";
  let inches = "";
  let description = "";

  if(total <= 8){

    size = "Extra Small 🍓";

    inches = "3 - 4 inches";

    description =
      "You match best with slimmer, beginner-friendly sizes focused on comfort, softness, and gentle exploration.";
  }

  else if(total <= 12){

    size = "Small 💕";

    inches = "4 - 5 inches";

    description =
      "You enjoy a little extra fullness while still keeping things smooth, playful, and easy to handle.";
  }

  else if(total <= 17){

    size = "Medium 💋";

    inches = "5 - 6 inches";

    description =
      "Balanced, confident, and versatile — enough fullness to feel exciting without being overwhelming.";
  }

  else if(total <= 21){

    size = "Large 😈";

    inches = "6 - 7 inches";

    description =
      "You clearly enjoy stronger intensity, noticeable fullness, and a more adventurous experience.";
  }

  else{

    size = "Extra Large 🔥";

    inches = "7+ inches";

    description =
      "Fearless, adventurous, and craving maximum intensity. You want something dramatic and bold.";
  }

  const result = document.getElementById("result");

  result.classList.remove("hidden");

  result.innerHTML = `

    <h2>${size}</h2>

    <p>
      <strong>Recommended Range:</strong>
      ${inches}
    </p>

    <br>

    <p>${description}</p>

    <div class="size-tag">
      Personalized Match
    </div>

  `;
}
