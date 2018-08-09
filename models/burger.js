var orm = require("../config/orm.js");

var burger = {

  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },

  insert: function (cols, vals, cb) {
    orm.insert("burgers", cols, vals, function (res) {
      cb(res);
    });
  },

  update: function (keyvalobj, condition, cb) {
    orm.update("burgers", keyvalobj, condition, function (res) {
      cb(res);
    });
  },

  delete: function (condition, cb) {
    orm.delete("burgers", condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;