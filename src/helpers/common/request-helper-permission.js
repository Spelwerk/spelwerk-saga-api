'use strict';

const logger = require('../../logger/winston');
const permissionSQLHelper = require('./sql-helper-permission');

// ////////////////////////////////////////////////////////////////////////////////// //
// PUBLIC
// ////////////////////////////////////////////////////////////////////////////////// //

const getPermission = async (req, table, id) => {
    logger.debug('common-request-helper-permission.getPermission', req.log);
    return permissionSQLHelper.getPermission(req.account.id, req.account.roles, table, id);
};

// ////////////////////////////////////////////////////////////////////////////////// //
// EXPORTS
// ////////////////////////////////////////////////////////////////////////////////// //

module.exports = {
    getPermission,
};