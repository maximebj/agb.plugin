<?php defined( 'ABSPATH' ) || exit; ?>
<div class="wp-block-advanced-gutenberg-blocks-gmap<?php echo esc_attr($alignment); ?><?php echo esc_html($customClass); ?>">
	<script>
		function initMap<?php echo esc_html($rand); ?>() {

			var coords = { lat: <?php echo esc_html($latitude); ?>, lng: <?php echo esc_html($longitude); ?> }

			var map = new google.maps.Map( document.querySelector( '#gutenblock-gmap-<?php echo esc_html($rand); ?>' ), {
				zoom: <?php echo esc_html($zoom); ?>,
				center: coords,
				styles: <?php echo esc_html($styles); ?>
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
    src="https://maps.googleapis.com/maps/api/js?key=<?php echo esc_html($api_key); ?>&callback=initMap<?php echo esc_html($rand); ?>">
  </script>
	<div class="wp-block-advanced-gutenberg-blocks-gmap__canvas" id="gutenblock-gmap-<?php echo esc_attr($rand); ?>" style="height: <?php echo esc_attr($height); ?>px;"></div>
</div>
