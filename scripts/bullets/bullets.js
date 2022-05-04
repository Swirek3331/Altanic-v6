const NukeBulletType = import("scripts/bullets/NukeBulletType.js");
//const MissileNukeBullet = import("scripts/bullets/NukeBulletType.js");
//const ArtilleryNukeBullet = import("scripts/bullets/NukeBulletType.js");

const standardThorium = new NukeBulletType(2500, 30, "thorium", {
    shootEffect = thoriumShoot;
});