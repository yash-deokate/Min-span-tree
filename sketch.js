/// <reference path="./p5.global-mode.d.ts" />
var dots=[];
var visited=[];
var unvisited=[];
var i=0;
class dot{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }

  //display dots
  show(){
    stroke(255);
    fill(255);
    ellipse(this.x,this.y,10);

  }
}



function setup(){
   createCanvas(600,600);
}
 
//create dots on click
function mousePressed() {
  dots[i]=new dot(mouseX,mouseY);//make dot object and put it in array
 
  i++;
}

function draw(){
  background(0);

  for (let i = 0; i < dots.length; i++) {
    dots[i].show();
  }

   
  var visited=[];
  var unvisited=[];  

  for (let i = 0; i < dots.length; i++) {
    unvisited[i]=dots[i]; //intialise every dot as unvisited
  }


  visited.push(unvisited[0]);
  unvisited.splice(0,1);

 

  while (unvisited.length > 0) { 
    var min_dist=100000;
    var visited_index;
    var unvisited_index;
    for (let i = 0; i < visited.length; i++) {
     for (let j = 0; j < unvisited.length; j++) {
           
        var dv=visited[i];
        var du=unvisited[j];
        var dist_betn=dist(dv.x,dv.y,du.x,du.y);

        if(dist_betn < min_dist){
            
          min_dist=dist_betn;
          visited_index=i;
          unvisited_index=j;
        }
     }
    }
    
    stroke(255);
    line(visited[visited_index].x, visited[visited_index].y, unvisited[unvisited_index].x, unvisited[unvisited_index].y);
    visited.push( unvisited[unvisited_index]);
    unvisited.splice(unvisited_index,1);

  }


 
 
}