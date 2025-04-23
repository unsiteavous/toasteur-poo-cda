const styles = `
.toast-container {
  position: fixed;
  z-index: 9999;
  max-width: 320px;
  width: 100%;
}

.toast {
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 4px;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.3s ease;
}

.toast-visible {
  opacity: 1;
  transform: translateY(0);
}

.toast-dismissing {
  opacity: 0;
  transform: translateY(-20px);
}

.toast-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.toast-icon-success:before { content: "✓"; margin-right: 8px; }
.toast-icon-error:before { content: "✗"; margin-right: 8px; }
.toast-icon-info:before { content: "ℹ"; margin-right: 8px; }
.toast-icon-warning:before { content: "⚠"; margin-right: 8px; }

.toast-title {
  flex-grow: 1;
  font-weight: bold;
}

.toast-close {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  padding: 0;
}

.toast-body {
  word-break: break-word;
}
`;
function addStylesheet() {
    const style = document.createElement('style');
    style.textContent = styles;
    document.head.appendChild(style);
}
