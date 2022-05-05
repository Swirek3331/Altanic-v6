class NukeBulletType extends BombBulletType {
    constructor(damage, radius, sprite) {
        super (2500, 30, sprite);
    }
    splashDamageRadius = radius;
    splashDamage = damage * 3;
    collidesTiles = false;
    collides = false;
    shrinkY = 0.7;
    lifetime = 30;
    drag = 0.05;
    keepVelocity = false;
    collidesAir = false;
    hitSound = explosionbig;
    shootEffect = shootBig;
    hitEffect = reactorExplosion;
    ammoMultiplier = 1;
}

//class MissileNukeBullet extends NukeBulletType {}

//class ArtilleryNukeBullet extends NukeBulletType {}

module.export = {
    NukeBulletType: NukeBulletType,
    //MissileNukeBullet: MissileNukeBullet,
    //ArtilleryNukeBullet: ArtilleryNukeBullet
}
