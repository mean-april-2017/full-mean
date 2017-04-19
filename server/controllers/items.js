/*
    Handle Incoming Requests for Items
*/
console.log("/server/controllers/items.js");

var mongoose = require("mongoose");
var Item = mongoose.model("Item");


module.exports.index = function (request, response)
{
    Item.find({}, function (err, items) {
        if (err) {
            console.log(err);
        } else {
            response.json({ message: "Items Index", items: items });
        }
    });
}

module.exports.create = function (request, response)
{
    console.log("SAVING NEW ITEM");
    var item = new Item({
        title: request.body.title,
    });
    item.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            response.json({ message: "Successfully Created Item!", item: item });
        }
    });
}
