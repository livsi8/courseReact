var mysql = require('mysql');

var con = mysql.createConnection({
    host: "sql7.freemysqlhosting.net",
    user: "sql7272337",
    password: "TAASIdyVYz",
    database: "sql7272337",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    const sql = `INSERT INTO users (email, password, username) VALUES ('test@test.test', 'test', 'Tester')`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        console.log("1 record inserted");
    });
});