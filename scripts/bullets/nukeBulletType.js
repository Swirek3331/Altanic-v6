class NukeBulletType extends BombBulletType {
    constructor(damage, radius, sprite) {
        super (2500, 30, sprite);
    }
    splashDamageRadius = radius;
    splashDamage = damage;
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
}

//class MissileNukeBullet extends NukeBulletType {}