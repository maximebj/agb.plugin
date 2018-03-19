<div class="wp-block-gutenblocks-gmap">
	<script>
		function initMap() {

			var coords = { lat: <?php echo $attributes['latitude']; ?>, lng: <?php echo $attributes['longitude']; ?> }

			var map = new google.maps.Map( document.querySelector( '.wp-block-gutenblocks-gmap__canvas' ), {
				zoom: <?php echo $attributes['zoom']; ?>,
				center: coords,
				styles: <?php echo $style; ?>
			} )

			var marker = new google.maps.Marker({
				position: coords,
				map: map
			} )
		}
	</script>
	<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=<?php echo $api_key; ?>&callback=initMap">
  </script>
	<div class="wp-block-gutenblocks-gmap__canvas" style="height: <?php echo $attributes['height']; ?>px;"></div>
</div>
