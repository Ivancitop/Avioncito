AFRAME.registerComponent("terrain-rotation-reader",{
    schema:{rotationSpeed:{type:"number",default:0},
    init: function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key == "ArrowRight"){
                if(this.data.rotationSpeed<0.1){
                    this.data.rotationSpeed+=0.01;
                }
            }
            if(e.key=="ArrowLeft"){
                if(this.data.rotationSpeed>-0.1){
                    this.data.rotationSpeed-=0.01;
                }
            }
        })
    },
    tick: function(){
        var mapRotation = this.el.getAttribute("rotation");
        mapRotation.y += this.data.rotationSpeed;
        this.el.setAttribute("rotation",{
            x: mapRotation.x,
            y:mapRotation.y,
            z:mapRotation.z
        })
    }}
})


AFRAME.registerComponent("plane-rotation",{
    schema:{rotationSpeed:{type:"number",default:0},
    ascenseSpeed:{type:"number",default:0}},
    init:function(){
        window.addEventListener("keydown",(e)=>{
            this.data.rotationSpeed = this.el.getAttribute("rotation");
            this.data.ascenseSpeed = this.el.getAttribute("position");
            var planeRotation = this.data.rotationSpeed;
            var planeAscension = this.data.ascenseSpeed;
            if(e.key=="ArrowRight"){
                if(planeRotation.x<10){
                    planeRotation.x+=0.5;
                    this.el.setAttribute("rotation",planeRotation)
                }
            }
            if(e.key=="ArrowLeft"){
                if(planeRotation.x>-10){
                    planeRotation.x-=0.5;
                    this.el.setAttribute("rotation",planeRotation)
                }
            }
            if(e.key=="ArrowUp"){
                if(planeRotation.z<20){
                    planeRotation.z+=0.1;
                    this.el.setAttribute("rotation",planeRotation)
                }
                if(planeAscension.y<2){
                    planeAscension.y+=0.1;
                    this.el.setAttribute("position",planeAscension)
                }
            }
            if(e.key=="ArrowDown"){
                if(planeRotation.z>-20){
                    planeRotation.z-=0.1;
                    this.el.setAttribute("rotation",planeRotation)
                }
                if(planeAscension.y>-2){
                    planeAscension.y-=0.1;
                    this.el.setAttribute("position",planeAscension)
                }
                
            }
            
            
        })
    }

    
})