!function(){function e(e,t,n){switch(t){case Const.top_left:return new Pair(e).to(e.$add(n,n));case Const.top_right:return new Pair(e).to(e.$add(-n,n));case Const.bottom_left:return new Pair(e).to(e.$add(n,-n));case Const.bottom_right:return new Pair(e).to(e.$add(-n,-n));case Const.top:return new Pair(e).to(e.$add(0,n));case Const.bottom:return new Pair(e).to(e.$add(0,-n));case Const.left:return new Pair(e).to(e.$add(n,0));default:return new Pair(e).to(e.$add(-n,0))}}function t(){for(c=0;c<r.length;c++){var t=i.quadrant(r[c],2),o=e(r[c],t,12);a.stroke(n["a"+(t%4+1)],1.5),a.line(new Pair(o.p1.x,o.y).to(o.x,o.y)),a.line(new Pair(o.x,o.y).to(o.x,o.p1.y)),a.fill(n.c4).stroke(!1),a.point(o.p1,3,!0)}}window.demoDescription="Distribute points evenly on a surface. Check the quadrant of each point in relation to mouse position. Draw a corresponding corner for each point.";for(var n={a1:"#ff2d5d",a2:"#42dc8e",a3:"#2e43eb",a4:"#ffe359",b1:"#96bfed",b2:"#f5ead6",b3:"#f1f3f7",b4:"#e2e6ef",c1:"#111",c2:"#567",c3:"#abc",c4:"rgba(255,255,255,.9)"},o=new CanvasSpace("point-quadrant-demo",n.c1).display(),a=new Form(o.ctx),r=[],i=new Vector,d=o.size.$subtract(20,20).divide(10,20),c=0;10>=c;c++)for(var s=0;20>=s;s++)r.push(new Vector(10+d.x*c,10+d.y*s));o.add({animate:function(e,n,o){t()},onMouseAction:function(e,t,n,o){"move"===e&&i.set(t,n)}}),o.bindMouse(),o.play()}();