//doesn't works?
//I also don't know why
//fuelfluid generator
//in 1.6.1
//nuclear reactor maybe in 1.6?
//advanced nuclear reactor in 1.9
const multiLib = require("multi-lib/library");

const nuclearReactor = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "nuclear-reactor", [
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
        input:{
            items:["thorium/5"],
            liquids:["water/6", "cryofliud/6"],
        },
        output:{
            liquids:["altanic-steam/6"],
        },
        craftTime: 120,
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
nuclearReactor.localizedName = "Nuclear reactor";
nuclearReactor.description = "Nuclear reactor that can't explode, but requires much more collant";
nuclearReactor.itemCapacity = 20;
nuclearReactor.liquidCapacity = 30;
nuclearReactor.size = 3;
nuclearReactor.health = 1000;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
nuclearReactor.dumpToggle = false;
