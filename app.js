function runPicks() {
  const picks = generatePicks();
  const ul = document.getElementById("picks");
  ul.innerHTML = "";
  picks.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p;
    ul.appendChild(li);
  });

  renderFrequency();
}

function renderFrequency() {
  const freq = getFrequency(DATA);
  const table = document.getElementById("frequency");
  table.innerHTML = "<tr><th>Digit</th><th>Count</th></tr>";
  Object.entries(freq).forEach(([d,c]) => {
    table.innerHTML += `<tr><td>${d}</td><td>${c}</td></tr>`;
  });
}
