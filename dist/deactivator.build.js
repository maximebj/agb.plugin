wp.domReady(function () {

  // Deactivate Blocks
  if (advancedGutenbergBlocksDeactivated) {
 
    var deactivatedBlocks = JSON.parse(advancedGutenbergBlocksDeactivated);

    deactivatedBlocks.forEach(block => {
      wp.blocks.unregisterBlockType(block);
    });
  }

});