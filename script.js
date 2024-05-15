document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button:not(#calculate)");
  const calculateButton = document.getElementById("calculate");
  const priceInput = document.getElementById("pricePerSqFt");
  const totalDiv = document.querySelector(".total-div");

  let selectedSizeId = null;

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove "selected" class from previously selected button, if any
      const previouslySelectedButton = document.getElementById(selectedSizeId);
      if (previouslySelectedButton) {
        previouslySelectedButton.classList.remove("selected");
      }

      // Add "selected" class to the clicked button
      button.classList.add("selected");
      selectedSizeId = button.id;
    });
  });

  calculateButton.addEventListener("click", function () {
    const price = parseFloat(priceInput.value);
    const total = calculateTotal(price, selectedSizeId);
    document.getElementById("total").textContent = total;
    totalDiv.style.display = "block";
  });

  function calculateTotal(price, selectedSize) {
    console.log(selectedSize);
    switch (selectedSize) {
      case "modular":
        return modular(price);
      case "queen":
        return queen(price);
      case "engineer":
        return engineer(price);
      case "king":
        return king(price);
      case "utility":
        return utility(price);
      case "closure":
        return closure(price);
      case "norman":
        return norman(price);
      default:
        return 'Unknown';
    }
  }

  function modular(price) {
    return (price / 1000) * 6.86;
  }

  function queen(price) {
    return (price / 1000) * 5.5;
  }
  function engineer(price) {
    return (price / 1000) * 5.76;
  }
  function king(price) {
    return (price / 1000) * 4.55;
  }
  function utility(price) {
    return (price / 1000) * 3.0;
  }
  function closure(price) {
    return (price / 1000) * 4.5;
  }
  function norman(price) {
    return (price / 1000) * 4.57;
  }
});
