class Animator {
    constructor(spritesheet, frameSpecs, frameDuration) {
        this.spritesheet = spritesheet;
        this.frameSpecs = frameSpecs;
        this.frameDuration = frameDuration;
        this.elapsedTime = 0;
        this.totalTime = this.frameSpecs.length * this.frameDuration;
    }

    drawFrame(tick, ctx, x, y, scale) {
        this.elapsedTime += tick;
        if (this.elapsedTime > this.totalTime) this.elapsedTime = this.elapsedTime % this.totalTime;
        const frameIndex = this.currentFrame();
        const frame = this.frameSpecs[frameIndex];

       

        ctx.drawImage(
            this.spritesheet, 
            frame.xStart, frame.yStart, 
            frame.width, frame.height,
            x, y, 
            frame.width * scale, frame.height * scale
        );
    }

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration) % this.frameSpecs.length;
    }

    isDone() {
        return this.elapsedTime >= this.totalTime;
    }
}


