'use strict';

/**
 * ejecucion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ejecucion.ejecucion');
