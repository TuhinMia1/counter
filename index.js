const counter = document.querySelector(".counter");
        let count = 0;
        const target = +counter.getAttribute("data-target");

        function updateCounter(newCount) {
            count = newCount;
            counter.innerText = count;
        }

        function increaseCounter() {
            if (count < target) {
                updateCounter(count + 1);
            }
        }

        function decreaseCounter() {
            if (count > 0) {
                updateCounter(count - 1);
            }
        }

        function resetCounter() {
            updateCounter(0);
        }
