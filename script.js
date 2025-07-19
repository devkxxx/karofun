function powiedzDowcip() {
  const dowcipy = [
    "Dlaczego komputer był smutny? Bo miał za dużo problemów!",
    "Co mówi HTML do CSS? Masz styl!",
    "Co robi programista, gdy mu się nudzi? Pisze własnego Snake’a!"
  ];

  const losowy = Math.floor(Math.random() * dowcipy.length);
  document.getElementById("dowcip").innerText = dowcipy[losowy];
}
