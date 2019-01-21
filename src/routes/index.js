"use strict";

module.exports.register = async server => {
  server.route({
    method: "GET",
    path: "/",
    handler: () => {
      return 'still my first hapi server.'
    }
  })
};