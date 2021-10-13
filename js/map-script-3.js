/*============================== 
	- MAP JS (ICON MARKER)
	- Template: MARRY - Responsive HTML Wedding Template
	- Author: DoubleEight
	- Version: 1.0.0
	- Website: www.dethemes.com
================================= */
	
(function($) {

'use strict';		
	
	// CHECK WINDOW RESIZE
	var is_windowresize = false;
	$(window).resize(function(){
		is_windowresize = true;
	});
	
	
	//INITIALIZE MAP
	function initialize() {
		
		// Create an array of styles
		//=======================================================================================
  		var styles = [
    		{
      			stylers: [
        			{ hue: "#f98d8a" },
        			{ saturation: -50 }
      			]
    		}
  		];
		
		// Create a new StyledMapType object, passing it the array of styles,
  		// as well as the name to be displayed on the map type control.
  		var styledMap = new google.maps.StyledMapType(styles,
   			{name: "Styled Map"});
			
		
		//DEFINE MAP OPTIONS
		//=======================================================================================
  		var mapOptions = {
    		zoom: 16,		
			mapTypeId: google.maps.MapTypeId.ROADMAP,	
    		center: new google.maps.LatLng(13.010790391190413, 76.10049510000002),
			panControl: true,
  			zoomControl: true,
  			mapTypeControl: true,
  			//scaleControl: false,
  			streetViewControl: true,
  			overviewMapControl: true,
			//rotateControl:true,			
			scrollwheel: false,
			
  		};

		//CREATE NEW MAP
		//=======================================================================================
  		var map = new google.maps.Map(document.getElementById('map-canvas-3'), mapOptions);
		
		//Associate the styled map with the MapTypeId and set it to display.
 		 map.mapTypes.set('map_style', styledMap);
 		 map.setMapTypeId('map_style');
		
		//MARKER ICON
		//=======================================================================================
		//var image = 'facebook30.svg';
		
		//ADD NEW MARKER
		//=======================================================================================
  		/*var marker = new google.maps.Marker({
    		position: map.getCenter(),
   		 	map: map,
    		title: 'Click to zoom',
			icon: image
  		});
		
		var marker1 = new google.maps.Marker({
    		position: new google.maps.LatLng(35.441938, -97.432494),
   		 	map: map,
    		title: 'Click to zoom'
  		});*/
		
		
		//ADD NEW MARKER WITH LABEL
		//=======================================================================================
		var marker1 = new MarkerWithLabel({
       		position: new google.maps.LatLng(35.441921, -97.432528),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="wedding-marker" class="main-icon-wrapper"><div class="big-circle scale-animation"></div><div class="main-icon-text">Wedding</br>Location</div></div>',
       		labelAnchor: new google.maps.Point(88, 88),
       		labelClass: "labels" // the CSS class for the label
     	});
				
		 
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker1, 'click', function() {
			marker1_infowindow.open(map,marker1);	
  		});
		
		
	
		
		
		//ON BOUND EVENTS AND WINDOW RESIZE
		//=======================================================================================
		google.maps.event.addListener(map, 'bounds_changed', function() {  		
			if (is_windowresize)
			{
				//map.setCenter(marker.getPosition());
				window.setTimeout(function() {
      				map.panTo(marker1.getPosition());
    			}, 500);
			}
			is_windowresize=false;
		});
	}

	// LOAD GMAP
	google.maps.event.addDomListener(window, 'load', initialize);
	
	
})(jQuery);