/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out or empty, is "localhost"
	port: 8080,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	timeFormat: 24,
	units: "imperial",
	serverOnly:  "true" ,
			     // local for armv6l processors, default
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
				]
			}
		},
//		{
//			module: "compliments",
//			position: "lower_third"
//		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "fb3ffaf8f905111c203636ce9496d1c6"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "fb3ffaf8f905111c203636ce9496d1c6"
			}
		},
/*		{
//			module: "newsfeed",
//			position: "bottom_bar",
//			config: {
//				feeds: [
//					{
//						title: "New York Times",
//						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
//					}
//				],
//				showSourceTitle: true,
//				showPublishDate: true,
//				broadcastNewsFeeds: true,
//				broadcastNewsUpdates: true
//			}
//		},
*/		{
			module: "MMM-NFL",
			position: "bottom_right",
			config: {
				colored: true,
				helmets: false,
				reloadInterval: 1800000,
				format: "ddd h:mm",
				tableSize: "medium",
			},
		},
		{
			module: "MMM-Reddit",
			position: "top_left",
			config: {
				subreddit: "popular",
				updateInterval: 15,
				displayType: "headlines",
				count: 10,
				show: 5,
				rotateInterval: 30,
				width: 500,
				showSubreddit: true,
				colorText: true,
				showThumbnail: true,
				forceImmediateUpdate: true,
			},
		},
/*         {
                module: "MMM-nyc-transit",
                position: "top_bar",
                header: "Next Train - Atlantic Ave",
                config: {
                         apiKey: "API_KEY",
                         displayType: "list",
                         mtaType: "train",
                         stations: {
                                 stationId: 617,
                                 walkingTime: 5,
                                 dir: {
                                        upTown: true,
                                        downTown: false
                                        },
                                 },
                         },		
			updateInterval: 300000,
		},	
*/	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

