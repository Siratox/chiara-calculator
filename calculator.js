let firstInput = document.getElementById('first_number');
let secondInput = document.getElementById('second_number');

let selectedInput = firstInput;

// handle input selection on focus
firstInput.onfocus = function () {
  selectedInput = firstInput;
};
secondInput.onfocus = function () {
  selectedInput = secondInput;
};

// calculate button behavior
document.getElementById('calculate').onclick = function () {
  let a = firstInput.value;
  let b = secondInput.value;

  if (a == '' || b == '') {
    alert('Ungueltig!');
    return;
  }

  a = parseInt(a);
  b = parseInt(b);

  let operation = document.getElementById('operation').value;

  let result = 0;

  if (operation == '+') {
    result = a + b;
  } else if (operation == '-') {
    result = a - b;
  } else if (operation == '*') {
    result = a * b;
  } else if (operation == '/') {
    result = a / b;
  }

  document.getElementById('result_text').innerHTML = result;
};

// numpad button behavior
for (let n = 0; n < 10; n++) {
  document.getElementById(`numpad_${n}`).onclick = function () {
    selectedInput.value = selectedInput.value + `${n}`;
    selectedInput.value = parseInt(selectedInput.value);
  };
}

// clear button behavior
document.getElementById('clear_button').onclick = function () {
  selectedInput.value = '0';
};
