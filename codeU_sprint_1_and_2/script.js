const resizer = document.getElementById("resizer");
const leftPanel = document.getElementById("leftPanel");
let isResizing = false;

resizer.addEventListener("mousedown", (e) => {
    isResizing = true;
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResize);
});

function resize(e) {
    if (isResizing) {
        let newWidth = Math.max(100, e.clientX);
        leftPanel.style.width = `${newWidth}px`;
    }
}

function stopResize() {
    isResizing = false;
    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mouseup", stopResize);
}