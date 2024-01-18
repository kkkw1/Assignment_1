class Stormtrooper{
	constructor(game){
		this.game = game;
		const frameSpecs = [
			{ xStart: 0, yStart: 0, width: 46, height: 51 },
			{ xStart: 46, yStart: 0, width: 47, height: 51 },
			{ xStart: 94, yStart: 0, width: 48, height: 51 },
			{ xStart: 147, yStart: 0, width: 42, height: 51 },
			{ xStart: 186, yStart: 0, width: 40, height: 51 },
			{ xStart: 229, yStart: 0, width: 44, height: 51 },
			{ xStart: 274, yStart: 0, width: 47, height: 51 },
			{ xStart: 323, yStart: 0, width: 51, height: 51 },
			
			{ xStart: 374, yStart: 0, width: 50, height: 51 },
			{ xStart: 422, yStart: 0, width: 50, height: 51 },
			{ xStart: 474, yStart: 0, width: 50, height: 51 },
			{ xStart: 520, yStart: 0, width: 48, height: 51 },
			{ xStart: 564, yStart: 0, width: 50, height: 51 },
			{ xStart: 612, yStart: 0, width: 48, height: 51 },
			{ xStart: 656, yStart: 0, width: 48, height: 51 },
			{ xStart: 702, yStart: 0, width: 47, height: 51 },
		];
		this.animator = new Animator(ASSET_MANAGER.getAsset("./storm.png"), frameSpecs, 0.2);
		this.x = 0;
		this.y = 0;
		this.speed = 75;
		this.scale = 3; // Adjust the scale as needed

	};

	update(){
		this.x += this.speed * this.game.clockTick;
		if (this.x > 1024 ) this.x = 0;

	};

	draw(ctx){
		

        // Draw the sprite with adjusted coordinates
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale);
	
		//ctx.drawImage(ASSET_MANAGER.getAsset("./Stormtrooper.png" ), 0, 0);
		//this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1); //where should we put the picture 
	};
}
