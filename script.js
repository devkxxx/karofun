
async function combine() {
  const first = document.getElementById('first').value;
  const second = document.getElementById('second').value;
  const resultBox = document.getElementById('result');

  if (!first || !second) {
    resultBox.textContent = "Wpisz dwa elementy!";
    return;
  }

  resultBox.textContent = "Łączenie...";

  try {
    const response = await fetch(`https://neal.fun/api/infinite-craft/pair?first=${encodeURIComponent(first)}&second=${encodeURIComponent(second)}`);
    const data = await response.json();
    resultBox.textContent = `🔀 ${first} + ${second} = ${data.result}`;
  } catch (error) {
    resultBox.textContent = "Błąd połączenia z AI 😢";
  }
}
