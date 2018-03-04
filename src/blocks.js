// Deactivate native Blocks

gutenblocksGlobals.deactivatedBlocks.forEach( block => {
	wp.blocks.unregisterBlockType(block)
})

// Blocks

import './notice/index.js';
import './plugin/index.js';
