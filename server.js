const express = require ('express');
const bodyparser=require('body-parser);

const app= express();

app.use(bodyParser.urlencoded({extended:true}));

//login token API

app.post('./getlogintoken.json',function(req,res){
	var user=(req.body.username);
	var pasw= (req.body.password);

if (user == "itpl" && pasw == "itpl4692")
{ 
	return res.send("Admin="+ user+"token="+token);
}	

//get Customer API


app.post('/dmt/getcustomer/7377688748',function(req,res){

{ 
	console.log(res.status(););
	res.write(beneList.customerId);
	res.write(beneList.name);
	res.send();

}
const PORT= process.env.PORT||5000;
app.listen(PORT,()=>consolke.log('server started at ${PORT}'));	  