var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: "localHost",
    port: 3306,
    user: "root",
    password: "fuck",
    database: "greatBay_db"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log('Successfully connected as ' + connection.threadId);
    postOrBid();
});
const questPoB = [
    {
        name: "pob",
        type: "list",
        message: "POST or BID?",
        choices: ["POST", "BID"]
    }
];
const postQs = [
    {
        name: "postname",
        message: "Enter item name:",
        type: "input",
    },
    {
        name: "postbid",
        message: "Enter item's starting bid:",
        type: "number",
    }
];
function postOrBid() {
    inquirer.prompt(questPoB).then(function(res) {
        console.log(res);
      if (res.pob === "POST") {
          postItem();
      }  else if (res.pob === "BID") {
          bidItem();
      };
    });
};
function postItem() {
    inquirer.prompt(postQs).then(function(item) {
        console.table(item);
        var query = connection.query('INSERT INTO bidItems SET ?',
            {
                item: "Fur Elise",
                bid: 100
            }, function(err,res) {
                if (err) throw err;
            }
        );
    });
};
function bidItem() {
    console.table("Loading Items...\n");
    connection.query("SELECT * FROM bidItems", function(err, res) {
      if (err) throw err;
      console.table(res);
    });
}