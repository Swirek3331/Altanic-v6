const nukeBulletType = extend(BasicBulletType, {
    speed: 2,
    damage: 2500,
    splashDamageRadius: 30,
    splashDamage: splashDamageRadius * (splashDamageRadius / 100),
    nukeBulletammoMultiplier: 1,
    hitEffect: reactorExplosiom,
    despawnEffect: shootBigSmoke,
});