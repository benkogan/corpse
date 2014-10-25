var i_just_wanna_just_chill_and_do_nothing = document.getElementById("corpse")
var the_fucking_canvas_context = i_just_wanna_just_chill_and_do_nothing.getContext("2d")
var so_the_images_overlap_eachother = 1;

setInterval(function(){
	the_fucking_canvas_context.fillStyle="white";
	the_fucking_canvas_context.fillRect(0,380,600,190);
},20000);

setInterval(function(){
	if(so_the_images_overlap_eachother>0)
	{
		throw_it_up_onto_the_canvas_my_good_friend(140+Math.cos(count/4)*5,leftTop+Math.cos(count/6)*4,0);
		throw_it_up_onto_the_canvas_my_good_friend(270+Math.sin(count/4)*5,rightTop+Math.sin(count/6)*4,1);	
	}
	else
	{
		throw_it_up_onto_the_canvas_my_good_friend(270+Math.sin(count/4)*5,rightTop+Math.sin(count/6)*4,1);
		throw_it_up_onto_the_canvas_my_good_friend(140+Math.cos(count/4)*5,leftTop+Math.cos(count/6)*4,0);
	}
	count++;	
	so_the_images_overlap_eachother *= -1;	
},40)

function throw_it_up_onto_the_canvas_my_good_friend(x,y,side)
{
  the_left_leg = new Image();	
  the_left_leg.src = 'images/legs-right.png';
  the_right_leg = new Image();
  the_right_leg.src = 'images/legs-lefty.png';
  if(side == 0)
  	the_right_leg.onload = function(){
	  	the_fucking_canvas_context.drawImage(the_right_leg, x, y,imgW+20,imgH-10);
	}
  else
  	the_left_leg.onload = function(){
	  	the_fucking_canvas_context.drawImage(the_left_leg, x, y,imgW+20,imgH-10);
  }
}

function a_goddamn_random_number(range){
		return Math.floor(Math.random()*range);
}
	
	
//hen, you should really move these to the top... why do you keep leaving these down here...
var imgH = 190; 
var imgW = 160;
var leftTop = 390;
var rightTop = 390;
var count = 0;
