const multiLib = require("multi-lib/library");

//crafting

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
            items: ["altanic-quartz/2", "coal/2"],
            powet: 0.5,
        },
        output: {
            items: ["silicon/4"], 
        },
        craftTime: 40
    },
    {
        input: {
            items: ["metaglass/20", "titanium/10"],
            powet: 4,
        },
        output: {
            items: ["z.p.g.m._mod-butelka/10"], 
        },
        craftTime: 300
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
//using example without .hjson file. I don't recommand this way because you can't use mod item as requirements.
furnace.localizedName = "Electric Furnace";
furnace.description = "Electir Furnace use power to smelt items";
furnace.itemCapacity = 20;
furnace.size = 2;
furnace.health = 250;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
furnace.dumpToggle = true;

const pyrolysisPlant = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "pyrolysis-plant", [
    {
        input: {
            items: ["altanic-wood/5"],
            power: 1
        },
        output: {
            items: ["coal/1"],
            liquids: ["altanic-creosote-oil/6"],
        },
        craftTime: 300
    },
    {
        input: {
            items: ["coal/5"],
            power: 2,
        },
        output: {
            items: ["altanic-cokecoal/5"],
            liquids: ["altanic-creosote-oil/12"],
        },
        craftTime: 120
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
//using example without .hjson file. I don't recommand this way because you can't use mod item as requirements.
pyrolysisPlant.localizedName = "Pyrolysis Plant";
pyrolysisPlant.description = "Pyrolysis Plant";
pyrolysisPlant.itemCapacity = 20;
pyrolysisPlant.liquidCapacity = 30;
pyrolysisPlant.size = 2;
pyrolysisPlant.health = 250;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
pyrolysisPlant.dumpToggle = true;


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
            items: ["altanic-ironore/5"],
            power: 1,
        },
        output: {
            items: ["altanic-zelazo/5"],
        },
        craftTime: 15
    },
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
            items: ["coal/5", "sand/10"],
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
            items: ["coal/4", "altanic-ironore/2"],
            power: 3,
        },
        output: {
            items: ["altanic-stal/2"],
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
            items: ["lead/5", "sand/5"],
            power: 1,
        },
        output: {
            items: ["metaglass/5"],
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
            liquids: ["slag/6"],
        },
        craftTime: 60
    },
    {
        input: {
            items: ["altanic-quartz/4", "coal/4"],
            powet: 1.5
        },
        output: {
            items: ["silicon/4"], 
        },
        craftTime: 20
    },
    {
        input: {
            items: ["altanic-quartz/8", "coal/8"],
            powet: 1.5
        },
        output: {
            items: ["silicon/8"], 
        },
        craftTime: 20
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
    {
        input: {
            items: ["copper/6", "lead/8", "titanium/4", "silicon/6"],
            powet: 4
        },
        output: {
            items: ["surge-alloy/2"], 
        },
        craftTime: 75
    },
    {
        input: {
            items: ["metaglass/40", "titanium/20"],
            powet: 8
        },
        output: {
            items: ["z.p.g.m._mod-butelka/20"], 
        },
        craftTime: 300
    },
    {
        input: {
            items: ["metaglass/4", "titanium/2"],
            powet: 2.5
        },
        output: {
            items: ["z.p.g.m._mod-butelka/2"], 
        },
        craftTime: 120
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
//using example without .hjson file. I don't recommand this way because you can't use mod item as requirements.
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
            items: ["altanic-ironore/5"],
            power: 2
        },
        output: {
            items: ["altanic-zelazo/5"],
        },
        craftTime: 7.5
    },
    {
        input: {
            items: ["altanic-ironore/10"],
            power: 2,
        },
        output: {
            items: ["altanic-zelazo/10"],
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
            items: ["coal/5", "sand/10"],
            power: 1,
        },
        output: {
            items: ["silicon/1"],
        },
        craftTime: 15
    },
    {
        input: {
            items: ["coal/10", "sand/20"],
            power: 2,
        },
        output: {
            items: ["silicon/10"],
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
            items: ["coal/8", "altanic-ironore/4"],
            power: 6,
        },
        output: {
            items: ["altanic-stal/4"],
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
            items: ["lead/10", "sand/10"],
            power: 2,
        },
        output: {
            items: ["metaglass/10"],
        },
        craftTime: 7.5
    },
    {
        input: {
            items: ["altanic-cokecoal/5", "altanic-ironore/5"],
            power: 12,
        },
        output: {
            items: ["altanic-stal/5"],
            liquids: ["slag/6"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-cokecoal/10", "altanic-ironore/10"],
            power: 12,
        },
        output: {
            items: ["altanic-stal/10"],
            liquids: ["slag/12"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-quartz/4", "coal/4"],
            powet: 3
        },
        output: {
            items: ["silicon/4"], 
        },
        craftTime: 10
    },
    {
        input: {
            items: ["altanic-quartz/8", "coal/8"],
            powet: 3
        },
        output: {
            items: ["silicon/8"],
        },
        craftTime: 10
    },
    {
        input: {
            items: ["altanic-quartz/16", "coal/16"],
            powet: 3
        },
        output: {
            items: ["silicon/16"], 
        },
        craftTime: 10
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
    {
        input: {
            items: ["copper/12", "lead/16", "titanium/8", "silicon/12"],
            powet: 8,
        },
        output: {
            items: ["surge-alloy/1"], 
        },
        craftTime: 35
    },
    {
        input: {
            items: ["metaglass/80", "titanium/40"],
            powet: 16,
        },
        output: {
            items: ["z.p.g.m._mod-butelka/40"], 
        },
        craftTime: 300
    },
    {
        input: {
            items: ["metaglass/4", "titanium/2"],
            power: 5,
        },
        output: {
            items: ["z.p.g.m._mod-butelka/2"], 
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
//using example without .hjson file. I don't recommand this way because you can't use mod item as requirements.
electricArcFurnace.localizedName = "Electric arc furnace";
electricArcFurnace.description = "Electric arc furnace is a masive structure that requires lots of power to work, but is very fast";
electricArcFurnace.itemCapacity = 20;
electricArcFurnace.size = 5;
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
            power: 0.4,
        },
        output: {
            items: ["sand/2"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["scrap/2"],
            power: 0.4,
        },
        output: {
            items: ["altanic-ironore/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["sand/2"],
            power: 0.5,
        },
        output: {
            items: ["altanic-quartz/2"],
        },
        craftTime: 60
    },
    {
        input: {
            liquids: ["water/6"],
            items: ["sand/4", "altanic-stone/1"],
            power: 1.5,
        },
        output: {
            items: ["altanic-earth/4"],
        },
        craftTime: 60
    },
    {
        input: {
            items: ["altanic-stone/1"],
            power: 0.8,
        },
        output: {
            items: ["sand/4"],
        },
        craftTime: 45
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
//using example without .hjson file. I don't recommand this way because you can't use mod item as requirements.
macerator.localizedName = "Macerator";
macerator.description = "Macerator";
macerator.itemCapacity = 20;
macerator.size = 2;
macerator.health = 250;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
macerator.dumpToggle = true;

const assembler = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "assembler", [
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
            items: ["metaglass/4"],
            power: 0.35,
        },
        output: {
            items: ["altanic-liquid-can/10"],
        },
        craftTime: 60
    },
    {
        input: {
            items: ["thorium/8", "sand/20"],
            power: 6,
        },
        output: {
            items: ["phase-fabric/2"],
        },
    },
    {
        input: {
            items: ["z.p.g.m._mod-baterian/2", "z.p.g.m._mod-butelkar/6", "z.p.g.m._mod-butelkaw/8", "z.p.g.m._mod-butelkaz/4", "z.p.g.m._mod-siarka/3"],
            power: 8,
        },
        output: {
            items: ["z.p.g.m._mod-chemia/2"],
        },
        craftTime: 300
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
//using example without .hjson file. I don't recommand this way because you can't use mod item as requirements.
assembler.localizedName = "Assembler";
assembler.description = "Assembler";
assembler.itemCapacity = 20;
assembler.liquidCapacity = 60;
assembler.size = 2;
assembler.health = 500;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
assembler.dumpToggle = true;

const industrialPress = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "industrial-press", [
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
            items: ["coal/4"],
            power: 0.5,
        },
        output: {
            items: ["graphite/2"],
        },
        craftTime: 60
    },
    {
        input: {
            items: ["altanic-cokecoal/2"],
            power: 1,
        },
        output: {
            items: ["graphite/2"],
        },
        craftTime: 90
    },
    {
        input: {
            items: ["spore-pod/10"],
            power: 1,
        },
        output: {
            liquids: ["oil/60"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-biomass/10"],
            power: 0.75,
        },
        output: {
            liquids: ["altanic-plant-oil/60"],
        },
    },
    {
        input: {
            items: ["altanic-canola/10"],
            power: 0.75,
        },
        output: {
            liquids: ["altanic-plant-oil/120"],
        },
        craftTime: 30
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
//using example without .hjson file. I don't recommand this way because you can't use mod item as requirements.
industrialPress.localizedName = "Industrial Press";
industrialPress.description = "Industrial Press";
industrialPress.itemCapacity = 20;
industrialPress.liquidCapacity = 60;
industrialPress.size = 2;
industrialPress.health = 500;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
industrialPress.dumpToggle = true;

const fermenter = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "fermenter", [
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
            items: ["altanic-corn/10"],
            power: 2.75,
        },
        output: {
            liquids: ["altanic-ethanol/30"],
        },
        craftTime: 600
    },
    {
        input: {
            items: ["altanic-sugar-cane/10"],
            power: 2.75,
        },
        output: {
            liquids: ["altanic-ethanol/60"],
        },
        craftTime: 600
    },
    {
        input: {
            items: ["altanic-biomass/10"],
            power: 2.75,
        },
        output: {
            liquids: ["altanic-ethanol/90"],
        },
        craftTime: 600
    },
    {
        input: {
            items: ["altanic-sugar-beet/10"],
            power: 2.75,
        },
        output: {
            liquids: ["altanic-ethanol/120"],
        },
        craftTime: 600
    },
    //biogaz
    {
        input: {
            items: ["altanic-corn/10"],
            power: 3,
        },
        output: {
            liquids: ["altanic-biogas/15"],
        },
        craftTime: 600
    },
    {
        input: {
            items: ["altanic-sugar-cane/10"],
            power: 3,
        },
        output: {
            liquids: ["altanic-biogas/30"],
        },
        craftTime: 600
    },
    {
        input: {
            items: ["altanic-biomass/10"],
            power: 3,
        },
        output: {
            liquids: ["altanic-biogas/45"],
        },
        craftTime: 600
    },
    {
        input: {
            items: ["altanic-sugar-beet/10"],
            power: 3,
        },
        output: {
            liquids: ["altanic-biogas/90"],
        },
        craftTime: 600
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
//using example without .hjson file. I don't recommand this way because you can't use mod item as requirements.
fermenter.localizedName = "Fermenter";
fermenter.description = "Fermenter";
fermenter.itemCapacity = 20;
fermenter.liquidCapacity = 60;
fermenter.size = 2;
fermenter.health = 500;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
fermenter.dumpToggle = true;

const compressor = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "compressor", [
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
            items: ["coal/4"],
            power: 0.5,
        },
        output: {
            items: ["graphite/4"],
        },
        craftTime: 90
    },
    {
        input: {
            items: ["altanic-cokecoal/2"],
            liquids: ["water/6"],
            power: 0.8,
        },
        output: {
            items: ["graphite/8"],
        },
        craftTime: 60
    },
    {
        input: {
            items: ["spore-pod/100"],
            power: 1.5
        },
        output: {
            liquids: ["oil/600"],
        },
        craftTime: 90
    },
    {
        input: {
            items: ["titanium/2"],
            liquids: ["altanic-naphta/12"],//nie pamiętam jaki mi procent ropy na inne produkty wyszedł, a zgubiłem kartkę z obliczeniami
            power: 2
        },
        output: {
            items: ["plastanium/1"]
        },
        craftTime: 60
    },
    {
        input: {
            items: ["titanium/12"],
            liquids: ["altanic-heavy-oil/12"],
            power: 5
        },
        output: {
            items: ["plastanium/6"],
        },
        craftTime: 120
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
//using example without .hjson file. I don't recommand this way because you can't use mod item as requirements.
compressor.localizedName = "Compressor";
compressor.description = "Compressor";
compressor.itemCapacity = 20;
compressor.liquidCapacity = 60;
compressor.size = 2;
compressor.health = 500;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
compressor.dumpToggle = true;

const centrifuge = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "centrifuge", [
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
            liquids: ["oil/6"],
            power: 0.7,
        },
        output: {
            items: ["coal/1"],
        },
        craftTime: 30
    },
    {
        input: {
            liquids: ["altanic-heavy-oil/6"],
            power: 1.45,
        },
        output: {
            items: ["altanic-petroleum-coke/1"],
        },
        craftTime: 60
    },
    {
        input: {
            liquids: ["slag/48"],
            power: 3.75,
        },
        output: {
            items: ["copper/5", "lead/3", "graphite/2", "titanium/2"],
        },
        craftTime: 300
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
//using example without .hjson file. I don't recommand this way because you can't use mod item as requirements.
centrifuge.localizedName = "Centrifuge";
centrifuge.description = "Centrifuge";
centrifuge.itemCapacity = 20;
centrifuge.liquidCapacity = 60;
centrifuge.size = 2;
centrifuge.health = 500;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
centrifuge.dumpToggle = true;

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
            items: ["thorium/12"],
            liquids: ["z.p.g.m._mod-lrciecz/19.18"],
            power: 8,
        },
        output: {
            items: ["z.p.g.m._mod-torzu/10", "z.p.g.m._mod-torwz/2"],
        },
        craftTime: 180
    },
    {
        input: {
            items: ["z.p.g.m._mod-uran/12"],
            liquids: ["z.p.g.m._mod-mrciecz/19.18"],
            power: 12,
        },
        output: {
            items: ["z.p.g.m._mod-uranzu/10", "z.p.g.m._mod-uranwz/2"],
        },
        craftTime: 180
    },
    {
        input: {
            liquids: ["oil/12"],
            power: 3,
        },
        output: {
            items: ["coal/6"],
        },
        craftTime: 30
    },
    {
        input: {
            liquids: ["altanic-heavy-oil/12"],
            power: 4,
        },
        output: {
            items: ["altanic-petroleum-coke/6"],
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
//using example without .hjson file. I don't recommand this way because you can't use mod item as requirements.
thermalCentrifuge.localizedName = "thermal centrifuge";
thermalCentrifuge.description = "thermal centrifuge";
thermalCentrifuge.itemCapacity = 30;
thermalCentrifuge.liquidCapacity = 240;
thermalCentrifuge.size = 3;
thermalCentrifuge.health = 750;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
thermalCentrifuge.dumpToggle = true;

//liquids

const mixer = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "mixer", [
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
            items: ["titanium/1"],
            liquids: ["water/12"],
            power: 1.5,
        },
        output: {
            liquids: ["cryofluid/12"]
        },
        craftTime: 60
    },
    {
        input: {
            liquids: ["water/6"],
            items: ["sand/4", "altanic-stone/2"],
            power: 1.5,
        },
        output: {
            items: ["altanic-earth/4"],
        },
        craftTime: 90
    },
    {
        input: {
            items: ["spore-pod/15", "z.p.g.m._mod-siarka/10"],
            liquids: ["water/90"],
            power: 10,
        },
        output: {
            liquids: ["zpgm-connector-nitrociecz/9"],
        },
        craftTime: 600
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
//using example without .hjson file. I don't recommand this way because you can't use mod item as requirements.
mixer.localizedName = "Mixer";
mixer.description = "Mixer";
mixer.itemCapacity = 20;
mixer.liquidCapacity = 60;
mixer.size = 2;
mixer.health = 500;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
mixer.dumpToggle = true;

const thermalMelter = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "thermal-melter", [
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
            items: ["altanic-ore-vein/1"],
            power: 2.5,
        },
        output: {
            liquids: ["altanic-lava/30"],
        },
        craftTime: 90
    },
    {
        input: {
            items: ["altanic-purified-ore-vein/1"],
            power: 1,
        },
        output: {
            liquids: ["slag/60"],
        },
        craftTime: 60
    },
    {
        input: {
            items: ["scrap/5"],
            power: 1.5,
        },
        output: {
            liquids: ["slag/60"],
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
//using example without .hjson file. I don't recommand this way because you can't use mod item as requirements.
thermalMelter.localizedName = "melter";
thermalMelter.description = "melter";
thermalMelter.itemCapacity = 20;
thermalMelter.liquidCapacity = 60;
thermalMelter.size = 2;
thermalMelter.health = 500;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
thermalMelter.dumpToggle = true;

const chemicalPlant = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "chemical-plant", [
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
            items: ["titanium/1"],
            liquids: ["water/18"],
            power: 3,
        },
        output: {
            liquids: ["cryofluid/18"]
        },
        craftTime: 60
    },
    {
        input: {
            liquids: ["altanic-lubricant/6", "cryofluid/6"],
            power: 2.5,
        },
        output: {
            liquids: ["altanic-coil/12"],
        },
        craftTime: 120
    },
    {
        input: {
            liquids: ["altanic-naphta/6", "altanic-gasoline/6"],
            power: 3.75,
        },
        output: {
            items: ["altanic-sulfur/3"],
            liquids: ["altanic-refined-fuel/9"],
        },
        craftTime: 120
    },
    {
        input: {
            liquids: ["altanic-ethanol/6", "altanic-plant-oil/6"],
            power: 3
        },
        output: {
            liquids: ["altanic-biofuel/12"],
        },
        craftTime: 100
    },
    {
        input: {
            liquids: ["altanic-gas/12"],
            power: 4,
        },
        output: {
            items: ["altanic-sulfur/9"],
        },
        craftTime: 60
    },
    {
        input: {
            liquids: ["altanic-heavy-oil/12"],
            power: 3.25,
        },
        output: {
            liquids: ["altanic-lubricant/12"]
        },
        craftTime: 120
    },
    {
        input: {
            items: ["spore-pod/150", "z.p.g.m._mod-siarka/100"],
            liquids: ["water/900"],
            power: 15,
        },
        output: {
            liquids: ["zpgm-connector-nitrociecz/90"],
        },
        craftTime: 300
    },
    {
        input: {
            items: ["spore-pod/15", "z.p.g.m._mod-siarka/10"],
            liquids: ["water/90"],
            power: 12.5,
        },
        output: {
            liquids: ["zpgm-connector-nitrociecz/9"],
        },
        craftTime: 300
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
//using example without .hjson file. I don't recommand this way because you can't use mod item as requirements.
chemicalPlant.localizedName = "Chemical plant";
chemicalPlant.description = "Chemical plant";
chemicalPlant.itemCapacity = 30;
chemicalPlant.liquidCapacity = 120;
chemicalPlant.size = 3;
chemicalPlant.health = 750;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
chemicalPlant.dumpToggle = true;

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
            items: ["phase-fabric/1"],
            liquids: ["water/12"],
        },
        output: {
            liquids: ["altanic-steam/12"],
        },
        craftTime: 60
    },
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
    {
        input: {
            items: ["z.p.g.m._mod-torwz/1"],
            liquids: ["water/48"],
        },
        output: {
            liquids: ["altanic-steam/48"],
        },
        craftTime: 60
    },
    {
        input: {
            items: ["z.p.g.m._mod-torzu/1"],
            liquids: ["water/17"],
        },
        output: {
            liquids: ["altanic-steam/17"],
        },
        craftTime: 60
    },
    {
        input: {
            items: ["z.p.g.m._mod-uran/1"],
            liquids: ["water/120"],
        },
        output: {
            liquids: ["altanic-steam/120"],
        },
        craftTime: 60
    },
    {
        input: {
            items: ["z.p.g.m._mod-uranwz/1"],
            liquids: ["water/192"],
        },
        output: {
            liquids: ["altanic-steam/192"],
        },
        craftTime: 60
    },
    {
        input: {
            items: ["z.p.g.m._mod-uranzu/1"],
            liquids: ["water/36"],
        },
        output: {
            liquids: ["altanic-steam/36"],
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
//using example without .hjson file. I don't recommand this way because you can't use mod item as requirements.
radioisotopeThermoelectricBoiler.localizedName = "RTB";
radioisotopeThermoelectricBoiler.description = "Radioisotope thermoelectric boiler";
radioisotopeThermoelectricBoiler.itemCapacity = 20;
radioisotopeThermoelectricBoiler.liquidCapacity = 360;
radioisotopeThermoelectricBoiler.size = 2;
radioisotopeThermoelectricBoiler.health = 250;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
radioisotopeThermoelectricBoiler.dumpToggle = false;

const canner = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "canner", [
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
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-biofuel/12"],
            power: 0.1,
        },
        output: {
            items: ["altanic-biofuel-can/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-biogas/12"],
            power: 0.1,
        },
        output: {
            items: ["altanic-biogas-can/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-coil/12"],
            power: 0.1,
        },
        output: {
            items: ["altanic-coil-can/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-liquid-can/1"],
            liquids: ["cryofluid/12"],
            power: 0.1,
        },
        output: {
            items: ["altanic-cryofluid-can/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-ethanol/12"],
            power: 0.1,
        },
        output: {
            items: ["altanic-ethanol-can/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-gas/12"],
            power: 0.1,
        },
        output: {
            items: ["altanic-gas-can/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-gasoline/12"],
            power: 0.1,
        },
        output: {
            items: ["altanic-gasoline-can/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-heavy-oil/12"],
            power: 0.1,
        },
        output: {
            items: ["altanic-heavy-oil-can/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-lava/12"],
            power: 0.1,
        },
        output: {
            items: ["altanic-lava-can/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-lubricant/12"],
            power: 0.1,
        },
        output: {
            items: ["altanic-lubricant-can/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-naphta/12"],
            power: 0.1,
        },
        output: {
            items: ["altanic-naphta-can/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-liquid-can/1"],
            liquids: ["oil/12"],
            power: 0.1,
        },
        output: {
            items: ["altanic-oil-can/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-plant-oil/12"],
            power: 0.1,
        },
        output: {
            items: ["altanic-plant-oil-can/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-refined-fuel/12"],
            power: 0.1,
        },
        output: {
            items: ["altanic-refined-fuel-can/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-liquid-can/1"],
            liquids: ["slag/12"],
            power: 0.1,
        },
        output: {
            items: ["altanic-slag-can/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-steam/12"],
            power: 0.1,
        },
        output: {
            items: ["altanic-steam-can/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-liquid-can/1"],
            liquids: ["water/12"],
            power: 0.1,
        },
        output: {
            items: ["altanic-water-can/1"],
        },
        craftTime: 30
    },
    //unloading
    {
        input: {
            items: ["altanic-biofuel-can/1"],
            power: 0.1,
        },
        output: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-biofuel/12"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-biogas-can/1"],
            power: 0.1,
        },
        output: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-biogas/12"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-coil-can/1"],
            power: 0.1,
        },
        output: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-coil/12"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-cryofluid-can/1"],
            power: 0.1,
        },
        output: {
            items: ["altanic-liquid-can/1"],
            liquids: ["cryofluid/12"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-ethanol-can/1"],
            power: 0.1,
        },
        output: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-ethanol/12"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-gas-can/1"],
            power: 0.1,
        },
        output: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-gas/12"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-gasoline-can/1"],
            power: 0.1,
        },
        output: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-gasoline/12"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-heavy-oil-can/1"],
            power: 0.1,
        },
        output: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-heavy-oil/12"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-lava-can/1"],
            power: 0.1,
        },
        output: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-lava/12"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-lubricant-can/1"],
            power: 0.1,
        },
        output: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-lubricant/12"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-naphta-can/1"],
            power: 0.1,
        },
        output: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-naphta/12"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-oil-can/1"],
            power: 0.1,
        },
        output: {
            items: ["altanic-liquid-can/1"],
            liquids: ["oil/12"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-plant-oil-can/1"],
            power: 0.1,
        },
        output: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-plant-oil/12"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-refined-fuel-can/1"],
            power: 0.1,
        },
        output: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-refined-fuel/12"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-slag-can/1"],
            power: 0.1,
        },
        output: {
            items: ["altanic-liquid-can/1"],
            liquids: ["slag/12"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-steam-can/1"],
            power: 0.1,
        },
        output: {
            items: ["altanic-liquid-can/1"],
            liquids: ["altanic-steam/12"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-water-can/1"],
            power: 0.1,
        },
        output: {
            items: ["altanic-liquid-can/1"],
            liquids: ["water/12"],
        },
        craftTime: 30
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
//using example without .hjson file. I don't recommand this way because you can't use mod item as requirements.
canner.localizedName = "Canner";
canner.description = "Canner";
canner.itemCapacity = 4;
canner.liquidCapacity = 24;
canner.size = 1;
canner.health = 100;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
canner.dumpToggle = true;