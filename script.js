// Function to append values to the display
function appendValue(value) {
    document.getElementById("display").value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById("display").value = '';
  }
  
  // Function to calculate the result
  function calculateResult() {
    const display = document.getElementById("display");
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }
  