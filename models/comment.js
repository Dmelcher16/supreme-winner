const { NOW } = require("sequelize/types");
// Dependencies
// =============================================================
// This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");
// var sequelize = require("../config/config.json");

const { now } = require("sequelize/types/lib/utils");

// Creates a "Comment" model that matches up with DB
module.exports = function (sequelize, DataTypes) {

    var Comment = sequelize.define("Comments", {
      author: {
            type: DataTypes.STRING,
            allowNull: false,
           },
      body:{
          type: DataTypes.STRING,
          allowNull: false,
      },
      created_at: {
          type: DataTypes.DATE,
          defaultValue: NOW,
        }
    });

    Comment.associate = function (models) {
        Comment.belongsTo(models.User, {  //this is still in question
          
            foregnKey: {

                allowNull: false
            }
        });
    };

    return Comment;
}
// Syncs with DB
// Makes the Comments Model available for other files (will also create a table)

// Comment.sync();
// module.exports = Comment;