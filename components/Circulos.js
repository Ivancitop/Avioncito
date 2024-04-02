AFRAME.registerComponent("rings",{

    init:function(){
        for(var r=1;r<=20;r++){
            var id = `ring${r}`;
            var posx = Math.floor(Math.random()*3000+ -1000);
            var posy = Math.floor(Math.random()*2+ -1);
            var posz = Math.floor(Math.random()*3000+ -1000);
            var position = {x:posx, y:posy, z:posz};
            this.createRings(id,position);
        }
    },
    createRings:function(id,position){
        var terrainel = document.querySelector("#terrain");
        var ringel = document.createElement("a-entity");
        console.log(ringel);
        ringel.setAttribute("id",id);
        ringel.setAttribute("position",position);
        ringel.setAttribute("material","color","orange");
        ringel.setAttribute("geometry",{primitive:"torus",radius:8, radiusTubular:0});
        ringel.setAttribute("static-body",{shape:"sphere",sphereRadius:2})
        ringel.setAttribute("game",{elementId:`#${id}`});
        terrainel.appendChild(ringel);

    }
})