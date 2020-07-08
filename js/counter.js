const counters = document.querySelectorAll(".counter");
const speed = 90; // The lower the slower
function runCounter() {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = count + 1;
        // Call function every ms
        setTimeout(updateCount, 0.01);
      } else {
        counter.innerText = "+ " + target;
      }
    };

    updateCount();
  });
}
