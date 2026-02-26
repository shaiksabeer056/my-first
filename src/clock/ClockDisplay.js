class ClockDisplay {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
    this.init();
  }

  init() {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();
    
    this.element.innerHTML = `
      <div class=["clock-display"]>
        <div class=["time"]>${timeString}</div>
        <div class=["date"]>${dateString}</div>
      </div>
    `;
  }

  getFormattedTime() {
    return new Date().toLocaleTimeString();
  }
}

export default ClockDisplay;