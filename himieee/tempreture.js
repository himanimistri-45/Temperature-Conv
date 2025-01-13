function convert() {
    const textBox = document.getElementById("textBox");
    const tofahrenheit = document.getElementById("tofahrenheit");
    const tocelsius = document.getElementById("tocelsius");
    const result = document.getElementById("result");
  
    let temp = Number(textBox.value);
  
    if (tofahrenheit.checked) {
      temp = (temp * 9/5) + 32; 
      result.textContent = temp.toFixed(2) + " °F"; 
    } else if (tocelsius.checked) {
      temp = (temp - 32) * 5/9; 
      result.textContent = temp.toFixed(2) + " °C";
    } else {
      result.textContent = "Please select a conversion unit."; 
    }
  }