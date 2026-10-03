const classId = document.body.dataset.class;

const checkboxes = [...document.querySelectorAll(".done")];
const fill = document.querySelector(".progress-fill");
const text = document.querySelector(".progress-text");

function keyFor(box) {
    return `challengers-${classId}-${box.id}`;
}

checkboxes.forEach(box => {

    box.checked =
        localStorage.getItem(keyFor(box)) === "1";

    box.addEventListener("change", () => {

        localStorage.setItem(
            keyFor(box),
            box.checked ? "1" : "0"
        );

        updateProgress();
    });
});

function updateProgress() {

    const completed =
        checkboxes.filter(x => x.checked).length;

    const total = checkboxes.length;

    text.textContent =
        `Прегледани: ${completed} от ${total} материала`;

    const percent =
        total ? completed / total * 100 : 0;

    fill.style.width = `${percent}%`;
}

updateProgress();
