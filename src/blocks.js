// Blocks

import './notice/index.js';
import './plugin/index.js';


// Deactivate Blocks
gutenblocksGlobals.deactivatedBlocks.split(',').forEach( block => {
	wp.blocks.unregisterBlockType(block)
})
