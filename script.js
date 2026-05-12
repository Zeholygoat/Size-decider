function calculateSize(){

  const experience = parseInt(document.getElementById("experience").value);
  const comfort = parseInt(document.getElementById("comfort").value);
  const adventure = parseInt(document.getElementById("adventure").value);
  const intensity = parseInt(document.getElementById("intensity").value);
  const priority = parseInt(document.getElementById("priority").value);

  const total =
    experience +
    comfort +
    adventure +
    intensity +
    priority;

  let size = "";
  let description = "";
  let inches = "";

  if(total <= 8){
    size = "Extra Small 🍓";
    inches = "3 - 4 inches";
    description =
      "Best for beginners, comfort-focused users, and gentle exploration.";
  }

  else if(total <= 12){
    size = "Small 💕";
    inches = "4 - 5 inches";
    description =
      "A balanced beginner-friendly option with slightly more fullness.";
  }

  else if(total <= 17){
    size = "Medium 💋";
    inches = "5 - 6 inches";
    description =
      "The most versatile range with balanced comfort and intensity.";
  }

  else if(total <= 21){
    size = "Large 😈";
    inches = "6 - 7 inches";
    description =
      "For users who enjoy stronger fullness and more intensity.";
  }

  else{
    size = "Extra Large 🔥";
    inches = "7+ inches";
    description =
      "Best suited for very experienced and highly adventurous users.";
  }

  const result = document.getElementById("result");

  result.classList.remove("hidden");

  result.innerHTML = `
    <h2>${size}</h2>

    <p><strong>Recommended Range:</strong> ${inches}</p>

    <br>

    <p>${description}</p>

    <div class="size-tag">
      Personalized Match
    </div>
  `;
}
