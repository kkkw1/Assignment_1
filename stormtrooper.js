class Stormtrooper{
	constructor(game){
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./storm.png"), 0, 0, 47, 68, 16, 1);
		this.x = 0;
		this.y = 0;
		this.speed = 50;

	};

	update(){
		this.x += this.speed * this.game.clockTick;
		if (this.x > 1024 ) this.x = 0;

	};

	draw(ctx){
		//ctx.drawImage(ASSET_MANAGER.getAsset("./Stormtrooper.png" ), 0, 0);
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y); //where should we put the picture 
	};
}
