// Activator Controller

gutenblocksGlobals.deactivatedBlocks.forEach( block => {
	wp.blocks.unregisterBlockType(block)
})

// TODO
// when issue are solved
// https://github.com/WordPress/gutenberg/issues/4848
// https://github.com/WordPress/gutenberg/pull/4841

// const {
//   unregisterBlockType,
// 	getBlockTypes,
// } = wp.blocks;

//console.log(getBlockTypes())

// setTimeout( () => {
// 	console.log(getBlockTypes())
// 	gutenblocksGlobals.deactivatedBlocks.map( block => {
//
// 		unregisterBlockType(block)
// 	})
// }, 3000)

//console.log(gutenblocksGlobals.deactivatedBlocks)


// Blocks

import './notice/index.js';
import './plugin/index.js';
