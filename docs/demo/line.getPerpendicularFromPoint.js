!function(){window.demoDescription="In a field of points that revolves around a center, trace a perpendicular path from each point to an axis line.";for(var e={a1:"#ff2d5d",a2:"#42dc8e",a3:"#2e43eb",a4:"#ffe359",b1:"#96bfed",b2:"#f5ead6",b3:"#f1f3f7",b4:"#e2e6ef"},a=new CanvasSpace("demo","#222").display(),n=new Form(a.ctx),o=[],t=a.size.$divide(2),i=new Line(t).to(a.size),r=200,d=.8*Math.min(a.size.x,a.size.y),f=0;r>f;f++){var s=new Vector(Math.random()*d-Math.random()*d,Math.random()*d-Math.random()*d);s.moveBy(t).rotate2D(f*Math.PI/r,t),o.push(s)}a.add({animate:function(a,r,f){for(var s=0;s<o.length;s++){var c=o[s];c.rotate2D(Const.one_degree/20,t),n.stroke(!1).fill(e["a"+s%4]).point(c,1);var m=new Line(c).to(i.getPerpendicularFromPoint(c)),h=Math.min(.8,1-Math.abs(i.getDistanceFromPoint(c))/d);n.stroke("rgba(255,255,255,"+h+")",2*(s%20)/20).fill(!1).line(m)}},onMouseAction:function(e,a,n,o){"move"==e&&i.p1.set(a,n)}}),a.bindMouse(),a.play()}();