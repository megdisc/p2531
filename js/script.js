// Common JavaScript for the project
console.log('JS for vs forEach project loaded.');

// Helper function to clear output
function clearOutput(elementId) {
    const el = document.getElementById(elementId);
    if (el) el.textContent = '';
}

// Helper to append log
function logOutput(elementId, message) {
    const el = document.getElementById(elementId);
    if (el) {
        el.textContent += message + '\n';
    }
}
