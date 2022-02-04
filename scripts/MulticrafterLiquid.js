const multiLib = require("multi-lib/library");

const heatExchanger = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "heat-exchanger", [
    /*default form for each recipes. You can change values.
    {
        input:{
            items:[],     Modded Item:  "mod-name-item-name/amount", Vanilla Item: "item-name/amount"
            liquids:[],   Modded Liquid:  "mod-name-liquid-name/amount",  Vanilla liquid: "liquid-name/amount"
            power:0,
        },
        output:{
            items:[],
            liquids:[],
            power:0,
        },
        craftTime:80,
    },*/
    {
        input: {
            liquid: ["water/12", "altanic-hot-blast/1"],
            power: 0.5,
        },
        output: {
          liquid: ["altanic-steam/12"],
        },
        craftTime: 60
    },
], {
    /*you can customize block here. ex) load()*/
},
    /*this is Object constructor. This way is much better than literal way{a:123}
    you can replace this with {} if you don't want to modify entity*/
    function Extra() {
        /*you can use customUpdate=function(){}. this function excuted before update()
        also this.draw=function(){}
        you can customize entity here.
        ex)
        this._myProp=0;
        this.getMyProp=function(){
            return this._myProp;
        };
        this.setMyProp=function(a){
            this._myProp=a;
        };*/
    });
/*
YOU MUST NOT MODIFY VALUE OF THESE
configurable
outputsPower
hasItems
hasLiquids
hasPower
*/
//using example without .json file. I don't recommand this way because you can't use mod item as requirements.
heatExchanger.localizedName = "Heat Exchanger";
heatExchanger.description = "heat Exchanger";
heatExchanger.itemCapacity = 20;
heatExchanger.size = 2;
heatExchanger.health = 250;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
heatExchanger.dumpToggle = false;

//I make this, cus in .json i inpossible to make to liquid input
