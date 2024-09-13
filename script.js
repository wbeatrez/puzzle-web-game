// Make items draggable
const draggables = document.querySelectorAll('.draggable');
const dropArea = document.getElementById('drop-area');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', e.target.id);
  });
});

// Handle drop events
dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
});

dropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  const elementId = e.dataTransfer.getData('text');
  const draggedElement = document.getElementById(elementId);
  const clone = draggedElement.cloneNode(true); // Clone element for multiple uses
  dropArea.appendChild(clone);
});
