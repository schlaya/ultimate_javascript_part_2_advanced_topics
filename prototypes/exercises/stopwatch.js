function Stopwatch() {
    let startTime,
        endTime,
        running,
        duration = 0;

    // Is used to define a read only property
    Object.defineProperty(this, "duration", {
        get: function () {
            return duration;
        },
        set: function (value) {
            duration = value;
        },
    });

    Object.defineProperty(this, "startTime", {
        get: function () {
            return duration;
        },
    });

    Object.defineProperty(this, "endTime", {
        get: function () {
            return endTime;
        },
    });

    Object.defineProperty(this, "running", {
        get: function () {
            return running;
        },
    });
}

Stopwatch.prototype.start = function () {
    if (this.running) throw new Error("Stopwatch has already started.");

    this.running = true;

    this.startTime = new Date();
};

Stopwatch.prototype.stop = function () {
    if (!running) throw new Error("Stopwatch is not started.");

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    this.duration += seconds;
};

Stopwatch.prototype.reset = function () {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
};

const sw = new Stopwatch();
