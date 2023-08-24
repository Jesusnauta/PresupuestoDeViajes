// const precio = document.getElementById("cantidad");
// const rango = document.querySelector("#rango-cantidad");

// rango.oninput = () => {
//   precio.innerHTML = rango.value + ".000";
// };

// const cuota = document.getElementById("span-cuotas");
// const range = document.querySelector("#rango-cuotas");

// range.oninput = () => {
//   cuota.innerHTML = range.value;
// };

// const fijo = document.getElementById("btn1");
// const variable = document.getElementById("btn2");
// const interes = document.getElementById("input-porcentaje");

// fijo.onclick = function (e) {
//   interes.value = this.value;
//   fijo.classList.add("active");
//   variable.classList.remove("active");
// };

// variable.onclick = function (e) {
//   interes.value = this.value;
//   variable.classList.add("active");
//   fijo.classList.remove("active");
// };

// let btnCalcular = document.getElementById("btn_calcular");

// btnCalcular.addEventListener(
//   "click",
//   function () {
//     let resultado;
//     if (fijo.classList.contains("active")) {
//       resultado =
//         parseFloat(precio.innerHTML) * parseInt(cuota.innerHTML) +
//         parseFloat(interes.value) * 0.02;
//     } else if (variable.classList.contains("active")) {
//       resultado =
//         parseFloat(precio.innerHTML) * parseInt(cuota.innerHTML) +
//         parseFloat(interes.value) * 0.09;
//     }
//     document.getElementById("importe").innerHTML =
//       resultado.toFixed(2) + "&nbsp€";
//   },
//   false
// );

let vacationCalc = document.getElementById("vacationCalc");
vacationCalc.addEventListener("submit", calcExpenses);

function getValues() {
  let destiny = document.getElementById("destiny").value,
    budget = document.getElementById("budget").value,
    acomodation = document.getElementById("acomodation").value,
    transport = document.getElementById("acomodation").value,
    food = document.getElementById("food").value;
  return { destiny, budget, acomodation, transport, food };
}
function calcExpenses(e) {
  e.preventDefault();
  const { destiny, budget, acomodation, transport, food } = getValues();

  let expenses = parseInt(acomodation) + parseInt(transport) + parseInt(food);
  let balance = budget - expenses;

  UI(destiny, budget, balance);
}

function UI(destiny, budget, balance) {
  let result = document.getElementById("result");
  let dataPrint = document.createElement("div");
  dataPrint.innerHTML = `
  <div class="container-data row">
    <div class="col s4">
    <h6>${destiny}</h6>
  </div>
    <div class="col s4">
    <h6>${budget}</h6>
  </div>
    <div class="col s4">
    <h6>${balance}</h6>
  </div>
  </div>
`;
  result.appendChild(dataPrint);

  reset();
}
function reset() {
  document.getElementById("vacationCalc").reset();
}
