jQuery(function($){

	function supersized_callback() {
		if(typeof window.supersized_slide_callback == 'function'){
      supersized_slide_callback();
    }
	}

	// Prepare slide_links
	if (Drupal.settings.supersized.slide_links == 0) {
		Drupal.settings.supersized.slide_links = false;
	}
	$.supersized.themeVars.image_path = Drupal.settings.supersized.image_path;
	$.supersized({	
		// Functionality
		slideshow               :   1,			// Slideshow on/off
		autoplay				        :	  parseInt(Drupal.settings.supersized.autoplay),			// Slideshow starts playing automatically
		start_slide             :   parseInt(Drupal.settings.supersized.start_slide),			// Start slide (0 is random)
		stop_loop               :	  parseInt(Drupal.settings.supersized.stop_loop),			// Pauses slideshow on last slide
		random                  : 	parseInt(Drupal.settings.supersized.random),				// Randomize slide order (Ignores start slide)
		slide_interval          :   parseInt(Drupal.settings.supersized.slide_interval),		// Length between transitions
		transition              :   parseInt(Drupal.settings.supersized.transition), 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		    :	  parseInt(Drupal.settings.supersized.transition_speed),		// Speed of transition
		new_window				      :	  parseInt(Drupal.settings.supersized.new_window),			// Image links open in new window/tab
		pause_hover             :   parseInt(Drupal.settings.supersized.pause_hover),			// Pause slideshow on hover
		keyboard_nav            :   parseInt(Drupal.settings.supersized.keyboard_nav),			// Keyboard navigation on/off
		performance				      :	  parseInt(Drupal.settings.supersized.performance),			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
		image_protect			      :	  parseInt(Drupal.settings.supersized.image_protect),			// Disables image dragging and right click with Javascript
		on_new_slide			      :	  supersized_callback,													// Calls a function when a new slide/image is loaded

		// Size & Position						   
		min_width		            :   parseInt(Drupal.settings.supersized.min_width),			// Min width allowed (in pixels)
		min_height		          :   parseInt(Drupal.settings.supersized.min_height),			// Min height allowed (in pixels)
		vertical_center         :   parseInt(Drupal.settings.supersized.vertical_center),		// Vertically center background
		horizontal_center       :   parseInt(Drupal.settings.supersized.horizontal_center),	// Horizontally center background
		fit_always				      :	  parseInt(Drupal.settings.supersized.fit_always),			// Image will never exceed browser width or height (Ignores min. dimensions)
		fit_portrait         	  :   parseInt(Drupal.settings.supersized.fit_portrait),		// Portrait images will not exceed browser height
		fit_landscape			      :   parseInt(Drupal.settings.supersized.fit_landscape),		// Landscape images will not exceed browser width
												   
		// Components							
		slide_links				      :	  Drupal.settings.supersized.slide_links,					// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		thumb_links				      : 	parseInt(Drupal.settings.supersized.thumb_links),			// Individual thumb links for each slide
		thumbnail_navigation    :   parseInt(Drupal.settings.supersized.thumbnail_navigation),// Thumbnail navigation
		
		slides                  :   Drupal.settings.supersized.slides,

		// Theme Options			   
		progress_bar			      :	  parseInt(Drupal.settings.supersized.progress_bar),		// Timer for each slide							
		mouse_scrub				      :	  parseInt(Drupal.settings.supersized.mouse_scrub)
		
	});
});
