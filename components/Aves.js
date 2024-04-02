AFRAME.registerComponent("birds",{

    init:function(){
        for(var r=1;r<=20;r++){
            var id = `bird${r}`;
            var posx = Math.floor(Math.random()*3000+ -1000);
            var posy = Math.floor(Math.random()*2+ -1);
            var posz = Math.floor(Math.random()*3000+ -1000);
            var position = {x:posx, y:posy, z:posz};
            this.createBirds(id,position);
        }
    },
    createBirds:function(id,position){
        var terrainel = document.querySelector("#terrain");
        var Birdsel = document.createElement("a-entity");
        Birdsel.setAttribute("id",id);
        Birdsel.setAttribute("position",position);
        Birdsel.setAttribute("scale",{x:500,y:500,z:500});
        Birdsel.setAttribute("gltf-model","./assets/flying_bird/scene.gltf");
        Birdsel.setAttribute("animation-mixer",{});
        Birdsel.setAttribute("static-body",{shape:"sphere",sphereRadius:5});
        Birdsel.setAttribute("game",{elementId:`#${id}`});
        terrainel.appendChild(Birdsel);

    }
})