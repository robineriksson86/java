'use strict';

Module.register("MMM-countDown", {

  result: {},
  defaults: {
    updateInterval: 1000
  },

  getStyles: function() {
    return ["MMM-countDown.css"];
  },

  start: function() {
    this.getTickers();
    this.scheduleUpdate();
  },

  getDom: function() {
    var wrapper = document.createElement("ticker");
    wrapper.className = 'medium bright';
    wrapper.className = 'ticker';
    var tid =  document.createElement("span");
    
    var countDownDate = new Date("April 7, 2017 17:00:00").getTime();

    // Update the count down every 1 second
    function setInterval() {

      // Get todays date and time
      var now = new Date().getTime();
      
      // Find the distance between now an the count down date
      var distance = countDownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      var testtest;
      return testtest = days + "d " + hours + "t "
      + minutes + "m " + seconds + "s " + "till examen!";
      
    };
    var x = setInterval();
      tid.innerHTML = x ;
      wrapper.appendChild(tid);
    return wrapper;
  },

  scheduleUpdate: function(delay) {
    var nextLoad = this.config.updateInterval;
    if (typeof delay !== "undefined" && delay >= 0) {
      nextLoad = delay;
    }

   var self = this;
		setInterval(function() {
			self.updateDom();
		}, 1000);
  },

  getTickers: function () {
    var url = 'https://www.bitstamp.net/api/ticker_hour/';
    this.sendSocketNotification('GET_TICKERS', url);
  },

  socketNotificationReceived: function(notification, payload) {
    if (notification === "TICKERS_RESULT") {
      this.result = payload;
      this.updateDom(self.config.fadeSpeed);
    }
  },

});