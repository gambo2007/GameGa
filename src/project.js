window.__require=function t(i,n,o){function e(s,h){if(!n[s]){if(!i[s]){var r=s.split("/");if(r=r[r.length-1],!i[r]){var u="function"==typeof __require&&__require;if(!h&&u)return u(r,!0);if(c)return c(r,!0);throw new Error("Cannot find module '"+s+"'")}}var a=n[s]={exports:{}};i[s][0].call(a.exports,function(t){return e(i[s][1][t]||t)},a,a.exports,t,i,n,o)}return n[s].exports}for(var c="function"==typeof __require&&__require,s=0;s<o.length;s++)e(o[s]);return e}({"LightControl.js":[function(t,i,n){"use strict";cc._RF.push(i,"bdb29rBwNJC/4MGTcNBfmHf","LightControl.js"),cc.Class({extends:cc.Component,properties:{redLight:cc.Node,yellowLight:cc.Node,greenLight:cc.Node,countdownLabel:cc.Label,Chicken:cc.Node,Car:cc.Node,_diffVector:cc.v2,distance:0,chickendie:cc.Sprite},onLoad:function(){this.timer=0,this.colorIndex=0,this.blinkCount=0,this.blinkTimer=0,this.countdown=3,this.updateLights()},update:function(t){this.distance=this.takeDistance(this.Chicken.position,this.Car.position),2===this.colorIndex?this.countdown>0&&(this.timer+=t,this.timer>=1&&(this.timer=0,this.countdown--,this.updateCountdownLabel(),0===this.countdown&&(this.countdownLabel.string="Go Go Go!",this.Chicken.getComponent("chickenAni")&&(this.Chicken.getComponent("chickenAni").enabled=!0),this.Car.getComponent("carAni")&&(this.Car.getComponent("carAni").enabled=!0)))):(this.timer+=t,this.timer>=3&&(this.timer=0,this.colorIndex=(this.colorIndex+1)%3,this.updateLights()),2!==this.colorIndex&&this.blinkCount<6&&(this.blinkTimer+=t,this.blinkLight(0===this.colorIndex?this.redLight:this.yellowLight,t))),this.distance<80&&(this.chickendie.node.active=!0,this.Chicken.active=!1)},updateLights:function(){switch(this.redLight.color=cc.Color.BLACK,this.yellowLight.color=cc.Color.BLACK,this.greenLight.color=cc.Color.BLACK,this.colorIndex){case 0:this.blinkCount=0,this.blinkTimer=0,this.blinkLight(this.redLight);break;case 1:this.blinkCount=0,this.blinkTimer=0,this.blinkLight(this.yellowLight);break;case 2:this.greenLight.color=cc.Color.GREEN,this.startCountdown()}},takeDistance:function(t,i){return this._diffVector=t.sub(i),this._diffVector.mag()},blinkLight:function(t){this.blinkTimer>=.5&&(this.blinkTimer=0,this.blinkCount%2==0?t.color=0===this.colorIndex?cc.Color.RED:cc.Color.YELLOW:t.color=cc.Color.BLACK,this.blinkCount++,this.blinkCount>=6&&(this.blinkCount=0))},startCountdown:function(){this.countdownLabel.node.active=!0,this.updateCountdownLabel()},updateCountdownLabel:function(){this.countdownLabel.string=this.countdown.toString()}}),cc._RF.pop()},{}],carAni:[function(t,i,n){"use strict";cc._RF.push(i,"321fefYAGNB/bYBWXqUpcPc","carAni"),cc.Class({extends:cc.Component,properties:{carAnimation:cc.Animation},onLoad:function(){this.carAnimation=this.getComponent(cc.Animation)},start:function(){},update:function(t){this.moveCar(t)},moveCar:function(t){this.node.x-=300*t}}),cc._RF.pop()},{}],chickenAni:[function(t,i,n){"use strict";cc._RF.push(i,"9add1LZPZpK4Iq2umyXh0BQ","chickenAni"),cc.Class({extends:cc.Component,properties:{chickenAnimation:cc.Animation,endPostion:cc.Node},onLoad:function(){this.chickenAnimation=this.getComponent(cc.Animation)},start:function(){},update:function(t){this.moveChicken(t)},moveChicken:function(t){this.node.x+=-60*t,this.node.y+=-10*t}}),cc._RF.pop()},{}]},{},["LightControl.js","carAni","chickenAni"]);