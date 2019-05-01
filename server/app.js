const express = require('express');
const app=express();
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var cookieParser = require('cookie-parser');
var session = require('express-session');
 
var options = {
    host: 'localhost',
    port: 8080,
    user: 'root',
    password: '',
    database: 'blog'
};
global.sessionId= [];

let dbConf = require('./conf.js');
let pool = mysql.createPool(dbConf);    //连接池

app.use(session({
    key: 'test-session',
    secret: 'session_cookie_secret',
    cookie: {
    	maxAge: 1000 * 60 *10
    }, 
    resave: false,
    saveUninitialized: false,
    rolling: true
}));

/*app.all('*', function(req, res, next) {
    //res.header("Access-Control-Allow-Origin",'http://localhost:3000');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Credentials","true");
    res.header("Access-Control-Allow-Methods","POST, GET, OPTIONS, PUT, PATCH, DELETES");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});*/

app.use(cors({                                   //跨域配置
  origin: ['http://localhost:8080'],
  methods: ['GET','POST'],
  credentials: true
}));


app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static('client'));




/*----------------登录-------------------*/
app.post('/login', function (req, res) {
	pool.getConnection(function(err, connection) {
	  if (err) console.log(err);
	  connection.query('select * from user where username=? and password=?',[req.body.userName,req.body.password], function (error, results, fields) {
	    if (error) throw error;
	    console.log(results);
	    if(results[0] != undefined){
			if (results[0].password == req.body.password) {
				req.session.user = req.body.userName
				res.send({
					status: 1
				})
			}
	    }
	    else {
	    	console.log('login wrong');
	    	res.send('WRONG!');
	    }
	   	connection.release();
	  });
	});
})
/*------------------提交文章------------------*/
app.post('/writeBlog',function (req, res) {
	console.log(req.body);
	req.body.readTime = 0 ;
	pool.getConnection(function(err, connection) {
		connection.query('insert into article(title,author,tag,body,readTime) values(?, ?, ?, ?, ?) ', [req.body.title, req.body.author, req.body.tag, req.body.content, req.body.readTime],
			(error, results,fields) => {
				if (error) throw error;
				console.log(results);
				res.send(JSON.stringify({status: 1}));
			});
	   	connection.release();
	});		
})

/*-----------获取文章-----------*/
app.post('/articleList', function (req, res) {
	pool.getConnection(function(err, connection) {
	  if (err) console.log(err);
	  connection.query('select * from article', function (error, results, fields) {
	    if (error) throw error;
	    results = JSON.stringify(results);//把results对象转为字符串，去掉RowDataPacket
	    results = JSON.parse(results);
	    res.send(results);
	   	connection.release();
	  });
	});
})


/*---------------读取文章----------------------*/
app.post('/pickPost', function (req, res) {
	//let resData = [];
	//console.log(req);
	let id = req.body.id;
	pool.getConnection(function(err, connection) {
	  if (err) console.log(err);
	 
	  connection.query('select * from article where id = ?',[req.body.id], function (error, results, fields) {
	    if (error) throw error;
	    results = JSON.stringify(results);//把results对象转为字符串，去掉RowDataPacket
	    results = JSON.parse(results);
	    console.log(results)	
	   	res.send(results);		

	   	connection.release();
	 
	  });
	});
})


/*-------------搜索文章---------------*/
app.post('/search', function (req, res) {
	console.log(req.body);
	pool.getConnection(function(err, connection) {
	  if (err) console.log(err);
	 connection.query('select * from article where title like ?;' , ['%' + req.body.tag +'%'], function (error, results, fields) {
	    if (error) throw error;
	    console.log(results);
	    results = JSON.stringify(results);//把results对象转为字符串，去掉RowDataPacket
	    results = JSON.parse(results);
	   	res.send(results);
	    //console.log('The solution is: ', results[0]);
	   	connection.release();
	 
	  });
	});
})


app.post('/isLogin', (req, res) => {
	if (req.session.user) {
		res.send({
			status: 1
		})
	} else {
		res.send({
			status: 0
		})
	}
})

app.listen(3000, function () {
	console.log('server is opened');
})

