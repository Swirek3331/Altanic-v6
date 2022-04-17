const nukeBulletType = extend(BasicBulletType);

nukeBulletType.speed = 2;
nukeBulletType.damage = 2500;
nukeBulletType.splashDamageRadius = 30;
nukeBulletType.splashDamage = splashDamageRadius * (splashDamageRadius / 100);
nukeBulletType.nukeBulletammoMultiplier = 1;
nukeBulletType.hitEffect = reactorExplosion;
nukeBulletType.despawnEffect = shootBigSmoke;