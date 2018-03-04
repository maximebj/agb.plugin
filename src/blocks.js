// Deactivate native Blocks

if(Array.isArray(gutenblocksGlobals.deactivatedBlocks)) {
	gutenblocksGlobals.deactivatedBlocks.forEach( block => {
		wp.blocks.unregisterBlockType(block)
	})
}

// Blocks

import './notice/index.js';
import './plugin/index.js';
