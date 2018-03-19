<div class="wp-block-gutenblocks-gmap">
	<script>
		function initMap<?php echo $rand; ?>() {

			var coords = { lat: <?php echo $attributes['latitude']; ?>, lng: <?php echo $attributes['longitude']; ?> }

			var map = new google.maps.Map( document.querySelector( '#gutenblock-gmap-<?php echo $rand; ?>' ), {
				zoom: <?php echo $attributes['zoom']; ?>,
				center: coords,
				styles: <?php echo $style; ?>
			} );

			var marker = new google.maps.Marker( {
				position: coords,
				map: map
			} );

			var infoWindow = new google.maps.InfoWindow( {
	    	content: "<p><strong><?php echo htmlspecialchars($attributes['name']); ?></strong></p><p><?php echo htmlspecialchars($attributes['address']); ?></p>"
	  	} )

			marker.addListener('click', function() {
	    	infoWindow.open( map, marker );
	  	} )
		}
	</script>
	<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=<?php echo $api_key; ?>&callback=initMap<?php echo $rand; ?>">
  </script>
	<div class="wp-block-gutenblocks-gmap__canvas" id="gutenblock-gmap-<?php echo $rand; ?>" style="height: <?php echo $attributes['height']; ?>px;"></div>
</div>
