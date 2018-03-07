// Deactivate Blocks
var deactivatedBlocks = JSON.parse(gutenblocksDeactivated);

deactivatedBlocks.forEach( block => {
	wp.blocks.unregisterBlockType(block);
});
