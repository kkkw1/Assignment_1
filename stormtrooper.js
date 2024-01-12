class Stormtrooper{
	constructor(game){
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./stormtropper.png"), 0, 0, 58, 50, 11, 0.2);

	};

	update(){

	};

	draw(ctx){
		this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);
	};
}
