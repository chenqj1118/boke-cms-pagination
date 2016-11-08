var app = require("../../../supports/webpack-dev-web-test");
var testdata={
	pageNo:0,
	pageSize:10,
	totalRecords:200,
	pageCount:20,
	data: [	{title:"js深入学习与放弃",price:"￥45",publishtime:"2012-12-3"},
			{title:"Learn yourself!",price:"￥178",publishtime:"2015-11-3"},
			{title:"java框架深入讲解",price:"￥38",publishtime:"2014-12-3"},
			{title:"前端的发展趋势与展望",price:"￥98",publishtime:"2015-12-23"},
	]
};

app.start({
    /** The default configuration parameters
      httpPort: 8080,
      wdsPort: 8081,
      wdsPubPath: "web-test",
      webpackCfg: require("./webpack.web-test-config.js")
    */
}, function(app){
    /** The response for ajax post testing */
    app.post('/test-data.json', function(req, resp) {
        resp.send(testdata);
    });
    app.post('/test-500.html', function(req, resp) {
        throw "500 error for testing";
    });
});
