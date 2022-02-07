//fuelfluid generator in 1.6.1
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
        input: {
            items: ["thorium/2"],
            liquids: ["crofluid/6"],
        },
        output: {
            items: ["altanic-thorium-waste/2"],
            power: 20
        },
        craftTime: 60
    },
    {
        input: {
            items: ["altanic-uranium/2"],
            liquids: ["cryofluid/9"],
        },
        output: {
            items: ["altanic-uranium-waste/2"],
            power: 25
        },
        craftTime: 60
    },
    {
        input: {
            items: ["altanic-plutonium/2"],
            liquids: ["cryofluid/12"],
        },
        output: {
            items: ["altanic-plutonium-waste/2"],
            power: 30
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
nuclearReactor.localizedName = "Nuclear reactor"
nuclearReactor.description = "Nuclear reactor require radioactive materials, produce more power than thorium reactor but requires more coolant and produce waste"
nuclearReactor.itemCapacity = 20;
nuclearReactor.liquidCapacity = 180;
nuclearReactor.size = 4;
nuclearReactor.health = 1000;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
nuclearReactor.dumpToggle = false;
