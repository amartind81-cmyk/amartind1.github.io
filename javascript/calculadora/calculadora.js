function add(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const exp = document.getElementById("display").value;
  try {
    const result = eval(exp);
    document.getElementById("display").value = result;
  } catch {
    alert("Expresión no válida");
  }
}
