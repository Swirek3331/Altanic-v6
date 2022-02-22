const multiLib = require("multi-lib/library");

const furnace = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "furnace", [
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
            items: ["altanic-ironore/1"],
            power: 0.5,
        },
        output: {
            items: ["altanic-zelazo/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["coal/1", "sand/2"],
            power: 0.5,
        },
        output: {
            items: ["silicon/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["coal/2", "altanic-ironore/1"],
            power: 1.5,
        },
        output: {
            items: ["altanic-stal/1"],
        },
        craftTime: 90
    },
    {
        input: {
            items: ["lead/1", "sand/1"],
            power: 0.5,
        },
        output: {
            items: ["metaglass/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-quartz/4"],
            powet: 1
        },
        output: {
            items: ["silicon/1"], 
        },
        craftTime: 90
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
furnace.localizedName = "Electric Furnace";
furnace.description = "Electir Furnace use power to smelt items";
furnace.itemCapacity = 20;
furnace.size = 2;
furnace.health = 250;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
furnace.dumpToggle = true;



const inductionFurnace = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "induction-furnace", [
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
            items: ["altanic-ironore/1"],
            power: 1,
        },
        output: {
            items: ["altanic-zelazo/1"],
        },
        craftTime: 15
    },
    {
        input: {
            items: ["coal/1", "sand/2"],
            power: 1,
        },
        output: {
            items: ["silicon/1"],
        },
        craftTime: 15
    },
    {
        input: {
            items: ["coal/2", "altanic-ironore/1"],
            power: 3,
        },
        output: {
            items: ["altanic-stal/1"],
        },
        craftTime: 45
    },
    {
        input: {
            items: ["lead/1", "sand/1"],
            power: 1,
        },
        output: {
            items: ["metaglass/1"],
        },
        craftTime: 15
    },
    {
        input: {
            items: ["altanic-cokecoal/5", "altanic-ironore/5"],
            power: 6,
        },
        output: {
            items: ["altanic-stal/5"],
            liquids: ["slag/3"],
        },
        craftTime: 60
    },
    {
        input: {
            items: ["altanic-quartz/4"],
            powet: 1.5
        },
        output: {
            items: ["silicon/2"], 
        },
        craftTime: 45
    }, 
    {
        input: {
            items: ["copper/3", "lead/4", "titanium/2", "silicon/3"],
            powet: 4
        },
        output: {
            items: ["surge-alloy/1"], 
        },
        craftTime: 75
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
inductionFurnace.localizedName = "Induction furnce";
inductionFurnace.description = "Induction smelter use power to smelt even faster, and also can use more advanced metalurgic proces";
inductionFurnace.itemCapacity = 40;
inductionFurnace.liquidCapacity = 20;
inductionFurnace.size = 2;
inductionFurnace.health = 500;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
inductionFurnace.dumpToggle = true;

const electricArcFurnace = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "electric-arc-furnace", [
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
            items: ["altanic-ironore/1"],
            power: 2,
        },
        output: {
            items: ["altanic-zelazo/1"],
        },
        craftTime: 7.5
    },
    {
        input: {
            items: ["coal/1", "sand/2"],
            power: 2,
        },
        output: {
            items: ["silicon/1"],
        },
        craftTime: 7.5
    },
    {
        input: {
            items: ["coal/2", "altanic-ironore/1"],
            power: 6,
        },
        output: {
            items: ["altanic-stal/1"],
        },
        craftTime: 25
    },
    {
        input: {
            items: ["lead/1", "sand/1"],
            power: 2,
        },
        output: {
            items: ["metaglass/1"],
        },
        craftTime: 7.5
    },
    {
        input: {
            items: ["coal/5"],
            power: 4,
        },
        output: {
            items: ["altanic-cokecoal/5"],
        },
        craftTime: 30
    },
        {
        input: {
            items: ["altanic-cokecoal/5", "altanic-ironore/5"],
            power: 12,
        },
        output: {
            items: ["altanic-stal/5"],
            liquids: ["slag/1.5"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-quartz/4"],
            powet: 3
        },
        output: {
            items: ["silicon/4"], 
        },
        craftTime: 22.5
    },
    {
        input: {
            items: ["copper/3", "lead/4", "titanium/2", "silicon/3"],
            powet: 8,
        },
        output: {
            items: ["surge-alloy/1"], 
        },
        craftTime: 35
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
electricArcFurnace.localizedName = "Electric arc furnace";
electricArcFurnace.description = "Electric arc furnace is a masive structure that requires lots of power to work, but is very fast";
electricArcFurnace.itemCapacity = 20;
electricArcFurnace.size = 4;
electricArcFurnace.health = 1000;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
electricArcFurnace.dumpToggle = true;

const macerator = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "macerator", [
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
            items: ["scrap/1"],
            power: 0.4
        },
        output: {
            items: ["sand/2"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["scrap/1"],
            power: 0.4
        },
        output: {
            items: ["altanic-ironore/2"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["sand/2"],
            power: 0.5
        },
        output: {
            items: ["altanic-quartz/2"],
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
macerator.localizedName = "Macerator";
macerator.description = "Macerator";
macerator.itemCapacity = 20;
macerator.size = 2;
macerator.health = 250;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
macerator.dumpToggle = true;

const thermalCentrifuge = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "thermal-centrifuge", [
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
            items: ["thorium/10"],
            power: 6,
        },
        output: {
            items: ["altanic-uranium/8"],
        },
        craftTime: 180
    },
    {
        input: {
            items: ["altanic-uranium/10"],
            power: 8,
        },
        output: {
            items: ["altanic-plutonium/8"],
        },
        craftTime: 180
    },
    {
        input: {
            liquids: ["oil/12"],
            power: 1,
        },
        output: {
            items: ["coal/6"],
        },
        craftTime: 45
    },
        {
        input: {
            items: ["sand/4"],
            liquids: ["oil/12"],
            power: 2,
        },
        output: {
            items: ["coal/4", "pyratite/4"],
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
thermalCentrifuge.localizedName = "thermal centrifuge";
thermalCentrifuge.description = "thermal centrifuge";
thermalCentrifuge.itemCapacity = 30;
thermalCentrifuge.liquidCapacity = 240;
thermalCentrifuge.size = 3;
thermalCentrifuge.health = 750;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
thermalCentrifuge.dumpToggle = true;

const radioisotopeThermoelectricBoiler = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "radioisotope-thermoelectric-boiler", [
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
            items: ["thorium/1"],
            liquids: ["water/24"],
        },
        output: {
            liquids: ["altanic-steam/24"],
        },
        craftTime: 60
    },
    {
        input: {
            items: ["altanic-uranium/1"],
            liquids: ["water/36"],
        },
        output: {
            liquids: ["altanic-steam/36"],
        },
        craftTime: 60
    },
    {
        input: {
            items: ["altanic-plutonium/1"],
            liquids: ["water/48"],
        },
        output: {
            liquids: ["altanic-steam/48"],
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
radioisotopeThermoelectricBoiler.localizedName = "RTB";
radioisotopeThermoelectricBoiler.description = "Radioisotope thermoelectric boiler";
radioisotopeThermoelectricBoiler.itemCapacity = 20;
radioisotopeThermoelectricBoiler.liquidCapacity = 360;
radioisotopeThermoelectricBoiler.size = 2;
radioisotopeThermoelectricBoiler.health = 250;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
radioisotopeThermoelectricBoiler.dumpToggle = false;
