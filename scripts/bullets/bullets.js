const NukeBulletType = import("scripts/bullets/NukeBulletType.js");
//const MissileNukeBullet = import("scripts/bullets/NukeBulletType.js");
//const ArtilleryNukeBullet = import("scripts/bullets/NukeBulletType.js");

const standardThoriumNukeBullet = new NukeBulletType(2500, 30, "thorium", {
    shootEffect: thoriumShoot,
    sprite: "bullet",
    size: 10,
});