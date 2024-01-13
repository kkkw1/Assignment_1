class Animator{
	constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration){
		Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration}); /** copy down parameter into object */
		this.elapsedTime = 0;
		this.totalTime = frameCount * frameDuration;
	};

	drawFrame(tick, ctx, x, y, scale){
		
		this.elapsedTime += tick;
		if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
		const frame = this.currentFrame();


		ctx.drawImage(this.spritesheet, 
			this.xStart + this.width * frame, this.yStart,  /*source x, y and widhth and height*/
			this.width, this.height,
			x, y,   /*destination x, y is what we passed in*/
			this.width*2, this.height*2);  /*destination widhth and height*/

	};

	currentFrame(){
		return Math.floor(this.elapsedTime/ this.frameDuration);
	};

	isDone(){
		return (this.elapsedTime >= this.totalTime);

	};
};