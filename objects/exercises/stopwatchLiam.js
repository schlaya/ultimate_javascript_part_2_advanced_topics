function Stopwatch() {
    let duration = 0;
    let startTime = 0;
    let stopTime = 0;
    let isRunning = false;

    this.start = function () {
        if (isRunning) throw new Error("The Stopwatch is already running");
        startTime = new Date().getTime();
        isRunning = true;
    };

    this.stop = function () {
        if (!isRunning) throw new Error("The Stopwatch is not running!");
        stopTime = new Date().getTime();
        isRunning = false;

        duration += (stopTime - startTime) / 1000; // Convert milliseconds to seconds
    };

    this.getDuration = function () {
        return duration;
    };

    this.reset = function () {
        this.duration = 0;
    };
}

const sw = new Stopwatch();
sw.start();
setTimeout(() => {
    sw.stop();
    console.log("Duration:", sw.getDuration(), "seconds"); // Should print around 2 seconds
}, 3000);
