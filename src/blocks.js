// Blocks

import './notice/index.js';
import './plugin/index.js';


// Deactivate Blocks
let deactivatedBlocks = JSON.parse(gutenblocksGlobals.deactivatedBlocks)

deactivatedBlocks.forEach( block => {
	wp.blocks.unregisterBlockType(block)
})
