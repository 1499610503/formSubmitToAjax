# formSubmitToAjax

form提交 转 ajax请求

使用前需先引入jq

引入formSubmitToAjaxl.js后页面上的form都将以ajax形式提交  

可以给 指定的form 设置 success 和 error 处理方法：

$('#form1').get(0).success=function(res){
  console.log(res) 
} 
$('#form1').get(0).error=function(err){
  console.log(err) 
}
