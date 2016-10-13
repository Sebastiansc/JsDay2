class Clock {
  constructor() {
    // 1. Create a Date object.
    let clock = new Date()
    // 2. Store the hours, minutes, and seconds.
    this.time = extractTime(clock)
    this.hours = Number(this.time.slice(0,2));
    this.minutes = Number(this.time.slice(3,5));
    this.seconds = Number(this.time.slice(6,8));
    // 3. Call printTime.
    this.printTime()
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick, 1000);
  }

  extractTime(date) {
    return String(date).slice(16,24);
  }

  printTime() {
    time = `${this.hours}:${this.minutes}:${this.seconds}`;
    console.log(time);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.
    this.seconds += 1;
    if (this.seconds > 60){
      this.minutes += 1;
      this.seconds = 0;
    }

    if (this.minutes > 60){
      this.hours += 1;
      this.minutes = 0;
    }

    // 2. Call printTime.
    this.printTime();
  }
}

const clock = new Clock();
