<div class="wp-block-advanced-gutenberg-blocks-gmap<?php echo $alignment; ?>">
	<script>
		function initMap<?php echo $rand; ?>() {

			var coords = { lat: <?php echo $latitude; ?>, lng: <?php echo $longitude; ?> }

			var map = new google.maps.Map( document.querySelector( '#gutenblock-gmap-<?php echo $rand; ?>' ), {
				zoom: <?php echo $zoom; ?>,
				center: coords,
				styles: <?php echo $styles; ?>
			} );

			var marker = new google.maps.Marker( {
				position: coords,
				map: map
			} );

			var infoWindow = new google.maps.InfoWindow( {
	    	content: "<p><strong><?php echo htmlspecialchars($name); ?></strong></p><p><?php echo htmlspecialchars($address); ?></p>"
	  	} )

			marker.addListener('click', function() {
	    	infoWindow.open( map, marker );
	  	} )
		}
	</script>
	<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=<?php echo $api_key; ?>&callback=initMap<?php echo $rand; ?>">
  </script>
	<div class="wp-block-advanced-gutenberg-blocks-gmap__canvas" id="gutenblock-gmap-<?php echo $rand; ?>" style="height: <?php echo $height; ?>px;"></div>
</div>
