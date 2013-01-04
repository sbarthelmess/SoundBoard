// =-=-=-=-=-=-=-=-=-=-=-=-=
//	Audio / Media Routines
// =-=-=-=-=-=-=-=-=-=-=-=-=
var audio = {
	// Always a good idea to create a logging mechanism so you can easily
	// control the logging level in an application...
	log : function(msg) {
		console.log(msg);
		document.getElementById('message').innerHTML = msg;
	},

	// Simply reload the page
	reload : function() {
		window.location.reload();
	},

	duration : function() {
		try {
			if(document.getElementById('myMedia')) {
				var myM = document.getElementById('myMedia');
				audio.log('Duration: ' + (myM.currentTime).toFixed(2) + ' of ' + (myM.duration).toFixed(2) + ' secs');
			}
		} catch (err) {
			audio.log('Cannot read duration...' + err);
		}
	},

	// How to pause a media control...
	pause : function() {
		try {
			if(document.getElementById('myMedia')) {
				var myM = document.getElementById('myMedia');
				myM.autoplay = false;
				myM.pause();
				audio.log('Pausing...');
			}
		} catch (err) {
			audio.log('Cannot pause audio...' + err);
		}
	},

	// How to play a file...
	play : function(myFile) {
		try {
			if(document.getElementById('myMedia')) {
				var myM = document.getElementById('myMedia');
				myM.src = 'media/' + myFile;
				myM.load();
				myM.play();
				audio.log('Playing: ' + myFile);
			}
		} catch (err) {
			audio.log('Cannot play audio...' + err);
		}
	},

	// Create buttons for the BB Menu...
	createButtons : function() {
		var mi_0 = new blackberry.ui.menu.MenuItem(true, 0);
		var mi_1 = new blackberry.ui.menu.MenuItem(false, 1, "Pause clip", audio.pause);
		var mi_2 = new blackberry.ui.menu.MenuItem(false, 2, "Duration", audio.duration);
		var mi_3 = new blackberry.ui.menu.MenuItem(false, 3, "Reload app", audio.reload);
		var mi_4 = new blackberry.ui.menu.MenuItem(true, 4);
		//Optionally remove any default menu items:
		blackberry.ui.menu.clearMenuItems();
		// Apply items to the stack
		blackberry.ui.menu.addMenuItem(mi_0);
		blackberry.ui.menu.addMenuItem(mi_1);
		blackberry.ui.menu.addMenuItem(mi_2);
		blackberry.ui.menu.addMenuItem(mi_3);
		blackberry.ui.menu.addMenuItem(mi_4);
		// Default focus...
		blackberry.ui.menu.setDefaultMenuItem(mi_1);
	}
}