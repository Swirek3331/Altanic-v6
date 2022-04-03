const multiLib = require("multi-lib/library");

const metalurgicFacilityMK1 = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "metalurgic-facilityMK1", [
    {
        input: {
            items: ["altanic-ironore/10"],
            power: 5,
        },
        output: {
            items: ["altanic-zelazo/10"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["coal/10", "sand/20"],
            power: 5,
        },
        output: {
            items: ["silicon/10"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["coal/20", "altanic-ironore/10"],
            power: 15,
        },
        output: {
            items: ["altanic-stal/10"],
        },
        craftTime: 90
    },
    {
        input: {
            items: ["lead/10", "sand/10"],
            power: 5,
        },
        output: {
            items: ["metaglass/10"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-quartz/40"],
            powet: 10
        },
        output: {
            items: ["silicon/10"], 
        },
        craftTime: 90
    },
    {
        input: {
            items: ["metaglass/200", "titanium/100"],
            powet: 40
        },
        output: {
            items: ["z.p.g.m._mod-butelka/100"], 
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
metalurgicFacilityMK1.localizedName = "Metalurgic Facility MK1";
metalurgicFacilityMK1.description = "Metalurgic Facility MK1";
metalurgicFacilityMK1.itemCapacity = 200;
metalurgicFacilityMK1.health = 1500;
metalurgicFacilityMK1.size = 5
metalurgicFacilityMK1.dumpToggle = true;