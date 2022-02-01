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
            items: ["ironore/1"],
            power: 0.5,
        },
        output: {
            items: ["zelazo/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["coal/1", "sand/2"],
            power: 0.51,
        },
        output: {
            items: ["lead/1", "sand/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["coal/2", "ironore/1"],
        },
        output: {
            items: ["stal/1"],
        },
        craftTime: 30
    },
], /*{
    you can customize block here. ex) load()
},*/
/*
YOU MUST NOT MODIFY VALUE OF THESE
configurable
outputsPower
hasItems
hasLiquids
hasPower
*/
//using example without .json file. I don't recommand this way because you can't use mod item as requirements.
multi.localizedName = "Electric Furnace":
multi.description = "Electric use power to smelt items";
multi.itemCapacity = 20;
multi.size = 2;
multi.health = 100;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
multi.dumpToggle = false;
multi.requirements(Category.crafting, ItemStack.with(Items.copper, 75));
