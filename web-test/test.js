var pagination= require("..");
var tpl = require("./tpl.html");


var options = {
    pager: ".announcement-pager",
    render: ".announcementlist",
    tmplStr: tpl,
    tmpl: "",
    format: "[<(qq-) ncnnn (-pp)>]",	
    url: "/test-data.json",
	pageNoFieldName:"pageNo",
	data: {pageSize:1} 
};

window.doTest = function(){
    pagination.pagingShow(options);
}






