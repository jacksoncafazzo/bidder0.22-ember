/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'bidder022',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    firebase: 'https://bidder2.firebaseio.com/',
    contentSecurityPolicy: {
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com maps.gstatic.com" ,
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' *.googleapis.com maps.gstatic.com",
      'font-src': "'self' fonts.gstatic.com",
      'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com"
    },
    torii: {
      sessionServiceName: 'session',
      // providers: {
      //   'facebook-oauth2': {
      //     apiKey      : '1268010953226646',
      //     xfbml      : true,
      //     version    : 'v2.5',
      //     scope      : 'email'
      //   }
      // }
    },
    googleMap: {
      apiKey: 'AIzaSyDPe_5UuDK4YnbIdaGodRrYaL7LkG9aS74'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
