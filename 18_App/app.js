const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.locals.pretty = true;
app.use( express.static("src") );
app.use( bodyParser.urlencoded({ extended: true }) );
app.set("view engine","pug").set("views","src/pug");
app.get('/',(req,res)=>{ res.render("main"); });
app.post("/result",(req,res)=>{
	let scoreBoard = [];
	for(let i=1; i<=3; i++){
		let totalScore = parseInt(req.body[`kor${i}`]) + parseInt(req.body[`eng${i}`]) + parseInt(req.body[`math${i}`]);
		scoreBoard.push( { name : req.body[`name${i}`], total : totalScore, avr : Math.floor(totalScore / 3) } );
	}
	res.render("result",{ scoreBoard : scoreBoard });
});
app.listen( 4264, ()=>{ console.log("OPEN 4264"); });