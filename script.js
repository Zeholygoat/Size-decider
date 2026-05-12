function generateResult(){
  const energy = parseInt(document.getElementById('energy').value);
  const experience = parseInt(document.getElementById('experience').value);
  const intensity = parseInt(document.getElementById('intensity').value);
  const aesthetic = parseInt(document.getElementById('aesthetic').value);

  const score = energy + experience + intensity + aesthetic;

  let title = "";
  let description = "";
  let badge = "";

  if(score <= 7){
    title = "Soft Launch 🍓";
    description = "You match best with slimmer, beginner-friendly sizes that focus on comfort, softness, and playful exploration.";
    badge = "Cute Energy";
  }
  else if(score <= 11){
    title = "Good Girl Energy 💕";
    description = "Balanced sizes fit your vibe best — enough confidence to explore while still keeping things elegant and smooth.";
    badge = "Velvet Vibes";
  }
  else if(score <= 15){
    title = "Main Character 💋";
    description = "You like confidence, presence, and intensity. Medium-to-bold sizing matches your powerful energy.";
    badge = "Luxury Chaos";
  }
  else{
    title = "Chaos Mode 😈";
    description = "You're bold, adventurous, and dramatic. Larger statement pieces match your fearless aesthetic.";
    badge = "Certified Trouble";
  }

  const result = document.getElementById('result');
  result.classList.remove('hidden');

  result.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
    <div class="badge">${badge}</div>
  `;
}
