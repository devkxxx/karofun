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
    const response = await fetch('https://b05d16f4-d287-4073-93c5-f5d22ce28bcd-00-3kzopudyxjpef.janeway.replit.dev/pair', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first: first,
        second: second
      })
    });

    const data = await response.json();

    if (data.result) {
      resultBox.textContent = `🔀 ${first} + ${second} = ${data.result}`;
    } else {
      resultBox.textContent = `❌ Nie znaleziono kombinacji (brak odpowiedzi)`;
      console.log("Błąd odpowiedzi:", data);
    }

  } catch (error) {
    resultBox.textContent = "Błąd połączenia z AI 😢";
    console.error("Błąd:", error);
  }
}
