AFRAME.registerComponent("game",{
    schema:{
        elementId:{type:"string",default:"#ring1"}
    },
    init:function(){
        var duration = 120;
        var timerel = document.querySelector("#time");
        this.startTime(duration,timerel);
        
        var gameOverAlert = document.querySelector("#gameOver");
        gameOverAlert.setAttribute("text",{value:""});
    },
    update: function(){
        this.isCollided(this.data.elementId);
        this.updateScore(this.data.elementId);
    },
    startTime:function(duration,timerel){
        var minutes;
        var seconds;
        setInterval(()=>{
            if(duration>=0){
                minutes=parseInt(duration/60);
                seconds=parseInt(duration%60);
                if(minutes<10){
                    minutes="0"+minutes;
                }
                if(seconds<10){
                    seconds="0"+seconds;
                }
                timerel.setAttribute("text",{value:minutes+":"+seconds});
                duration-=1;
            }
            else{
                this.gameOver();
            }
        },1000)
    },
    gameOver:function(){
        var gameOverAlert = document.querySelector("#gameOver");
        gameOverAlert.setAttribute("text",{value:"Game Over"});
    },
    isCollided: function(elementId){
        const window = document.querySelector(elementId);
        window.addEventListener("collide",(e)=>{
            if(elementId.includes("#ring")){
                console.log(elementId+" collision");
                elementId.setAttribute("visible",false);
                this.circulitosF();
            }
            else if(elementId.includes("#bird")){
                console.log(elementId+" collision");
                elementId.setAttribute("visible",false);
                this.pajaritosF();
            }
            
        })

    },
    circulitosF:function(){
        var element = document.querySelector("#rings");
        var count = element.getAttribute("text").value;
        var currentRings = parseInt(count);
        currentRings -=1;
        element.setAttribute("text",{
            value:currentRings
        });
    },
    pajaritosF:function(){
        var element = document.querySelector("#bird");
        var count = element.getAttribute("text").value;
        var currentRings = parseInt(count);
        currentRings -=1;
        element.setAttribute("text",{
            value:currentRings
        });
    },
    updateScore:function(elementId){
        var element = document.querySelector("#score");
        var count= element.getAttribute("text").value;
        var currentScore=parseInt(count);
        if(elementId.includes("#ring")){
            currentScore+=25;
        }
        if(elementId.includes("#bird")){
            currentScore-=25;
        }
        element.setAttribute("text",{
            value:currentScore
        })
        return element
    }
    
})