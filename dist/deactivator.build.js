wp.domReady( function() {

  // Deactivate Blocks
  var deactivatedBlocks = JSON.parse(advancedGutenbergBlocksDeactivated);

  deactivatedBlocks.forEach( block => {
  	wp.blocks.unregisterBlockType(block);
  } );

} );