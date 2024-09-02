let MessageColour = toColour(0, 255, 255, 255);

addEventHandler("OnPedWasted", function(event, ped, attacker, weapon, pedPiece) {
    if (ped.isType(ELEMENT_PLAYER)) {
        
        if (attacker.isType(ELEMENT_PLAYER)) {

            const weaponName = getWeaponName(weapon);

            message(attacker.name + " killed " + ped.name + " with " + weaponName, MessageColour);
        }
    }
    if (ped.isType(ELEMENT_PED)) {
        
        if (attacker.isType(ELEMENT_PLAYER)) {

            const weaponName = getWeaponName(weapon);

            message(attacker.name + " killed " + "ped" + " with " + weaponName, MessageColour);
        }
    }
});

function getWeaponName(weaponId) {
    const weaponNames = {
        0: "(Fist)",
        1: "(Brass Knuckles)",
        2: "(Screwdriver)",
        3: "(Golf Club)",
        4: "(Nite Stick)",
        5: "(Knife)",
        6: "(Baseball Bat)",
        7: "(Hammer)",
        8: "(Meat Cleaver)",
        9: "(Machete)",
        10: "(Katana)",
        11: "(Chainsaw)",
        12: "(Grenade)",
        13: "(Remote Grenade)",
        14: "(Teargas)",
        15: "(Molotov Cocktail)",
        16: "(Rocket (Unfirable)",
        17: "(Colt .45)",
        18: "(Python)",
        19: "(Shotgun)",
        20: "(Spaz Shotgun)",
        21: "(Stubby Shotgun)",
        22: "(Tec-9)",
        23: "(Uzi)",
        24: "(Ingram)",
        25: "(MP5)",
        26: "(M4)",
        27: "(Ruger)",
        28: "(Sniper Rifle)",
        29: "(Laser Sniper)",
        30: "(RPG)",
        31: "(Flame Thrower)",
        32: "(M60)",
        33: "(Minigun)",
        34: "(Camera)",
        36: "(Detonator)"
    };

    return weaponNames[weaponId] || "Unknown Weapon";
}
