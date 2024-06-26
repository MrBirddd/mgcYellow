namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const imgENEMY = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sceneSELECT == 0) {
        MC.setImage(img`
            . . . . . . c c c . . . . . . . 
            . . . . . . c 5 b c . . . . . . 
            . . . . c c c 5 5 c c c . . . . 
            . . c c c c 5 5 5 5 c b c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . c 5 5 5 b b b b 5 5 5 f . . 
            . . f f 5 5 5 5 5 5 5 5 f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . . f f f f f f f f f f . . . 
            . . . e e f f f f f f f e . . . 
            . . e b f b 5 b b 5 b c b e . . 
            . . e e f 5 5 5 5 5 5 f e e . . 
            . . . . c b 5 5 5 5 b c . . . . 
            . . . . . f f f f f f . . . . . 
            `)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    if (sprite.overlapsWith(SIGN)) {
        game.showLongText("Hey. It's me the sign", DialogLayout.Bottom)
        game.showLongText("You should...", DialogLayout.Bottom)
        game.showLongText("Fight Me.", DialogLayout.Bottom)
        sceneSELECT = 1
        SCENE()
    }
})
function fightSIGN () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    tileUtil.unloadTilemap()
    scene.setBackgroundColor(15)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    scene.centerCameraAt(80, 60)
    MC = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c 5 c c . . . . . . 
        . . . . c c c 5 5 5 c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f b b b b b b f . . . . 
        . . e b b e e e e e f . . . . . 
        . . e b b e b b b 5 5 f . . . . 
        . . . e e e 5 5 5 5 5 c . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Player)
    MC.setPosition(30, 63)
    pHP = 100
    signMONSTER = sprites.create(assets.image`signMONSTER`, SpriteKind.Player)
    signMONSTER.setPosition(115, 50)
    signHealth = 300
    FIGHTtxt = textsprite.create("FIGHT")
    FIGHTtxt.setBorder(2, 1)
    FIGHTtxt.setPosition(70, 8)
    ITEMtxt = textsprite.create("ITEM")
    ITEMtxt.setBorder(2, 1)
    ITEMtxt.setPosition(38, 8)
    RUNtxt = textsprite.create("RUN")
    RUNtxt.setBorder(2, 1)
    RUNtxt.setPosition(12, 8)
    HEALTHBAR = statusbars.create(60, 6, StatusBarKind.Health)
    HEALTHBAR.setBarBorder(2, 13)
    HEALTHBAR.setPosition(32, 19)
    MAGICENERGY = statusbars.create(60, 6, StatusBarKind.Energy)
    MAGICENERGY.setBarBorder(2, 13)
    MAGICENERGY.setPosition(32, 28)
    scaling.scaleToPixels(MC, 53, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    scaling.scaleToPixels(signMONSTER, 96, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    BUTTONS = [RUNtxt, ITEMtxt, FIGHTtxt]
    curSELECT = 0
    selectUI(curSELECT)
    timer.after(500, function () {
        game.showLongText("Welcome to the tutorial!", DialogLayout.Bottom)
        game.showLongText("Use the DIRECTIONAL BUTTONS to navigate the menu.", DialogLayout.Bottom)
        game.showLongText("You have 3 Health Potions and 3 Magic Potions to start with.", DialogLayout.Bottom)
        game.showLongText("Goodluck! (Try using all the items and buttons.)", DialogLayout.Bottom)
    })
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sceneSELECT == 1) {
        if (BUTTONS[curSELECT] == RUNtxt) {
            game.showLongText("You can't run right now this is a TUTORIAL!", DialogLayout.Bottom)
        } else if (BUTTONS[curSELECT] == ITEMtxt) {
            ITEM_MENU()
            sprites.destroy(ITEMtxt)
        } else if (BUTTONS[curSELECT] == FIGHTtxt) {
            game.showLongText("There is no fighting yet!", DialogLayout.Bottom)
        }
        if (BUTTONS[curSELECT] == HealthPotionTXT) {
            HPPHeld += -1
            DelITEMMENU()
        }
        if (BUTTONS[curSELECT] == MagicPotionTXT) {
            MPPHeld += -1
            DelITEMMENU()
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sceneSELECT == 0) {
        MC.setImage(img`
            . . . . . . . c c . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . c c 5 5 5 c c c . . . . 
            . . c c c c 5 5 5 5 c b c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . c 5 5 5 b b b b 5 5 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 f f . . 
            . . . . f e e e f b e e f f . . 
            . . . . f e b b f 1 b f f f . . 
            . . . . f b b b b b b f f . . . 
            . . . . . f e e e e f e e . . . 
            . . . . . f 5 b b e b b e . . . 
            . . . . f 5 5 5 5 e b b e . . . 
            . . . . c b 5 5 5 5 e e . . . . 
            . . . . . f f f f f f . . . . . 
            `)
    }
    if (sceneSELECT == 1) {
        if (curSELECT == 0) {
            curSELECT = BUTTONS.length - 1
        } else {
            curSELECT += -1
        }
        selectUI(curSELECT)
    }
})
function DelITEMMENU () {
    ITEMtxt = textsprite.create("ITEM")
    ITEMtxt.setBorder(2, 1)
    ITEMtxt.setPosition(38, 8)
    sprites.destroy(HealthPotionTXT)
    sprites.destroy(MagicPotionTXT)
    BUTTONS = [RUNtxt, ITEMtxt, FIGHTtxt]
    curSELECT = 0
    selectUI(curSELECT)
}
function SCENE () {
    if (sceneSELECT == 0) {
        theGarden()
    } else {
        fightSIGN()
    }
}
function ITEM_MENU () {
    timer.after(100, function () {
        BUTTONS.shift()
        BUTTONS.shift()
        BUTTONS.shift()
        if (HPPHeld > 0 || MPPHeld > 0) {
            if (HPPHeld > 0) {
                HealthPotionTXT = textsprite.create("Health Potion")
                HealthPotionTXT.setPosition(40, 94)
                HealthPotionTXT.setBorder(2, 1)
                BUTTONS.push(HealthPotionTXT)
            }
            if (MPPHeld > 0) {
                MagicPotionTXT = textsprite.create("Magic Potion")
                MagicPotionTXT.setPosition(37, 108)
                MagicPotionTXT.setBorder(2, 1)
                BUTTONS.push(MagicPotionTXT)
            }
            curSELECT = 0
            selectUI(curSELECT)
        } else {
            game.splash("You Have No More Items Left!")
            BUTTONS = [RUNtxt, FIGHTtxt]
            FIGHTtxt.setPosition(41, 8)
            curSELECT = 0
            selectUI(curSELECT)
        }
    })
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sceneSELECT == 0) {
        MC.setImage(img`
            . . . . . . . c c . . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . c c c 5 5 5 c c . . . . 
            . . c c b c 5 5 5 5 c c c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . f 5 5 5 b b b b 5 5 5 c . . 
            . . f f 5 5 5 5 5 5 5 5 f . . . 
            . . f f e e b f e e e f . . . . 
            . . f f f b 1 f b b e f . . . . 
            . . . f f b b b b b b f . . . . 
            . . . e e f e e e e f . . . . . 
            . . . e b b e b b 5 f . . . . . 
            . . . e b b e 5 5 5 5 f . . . . 
            . . . . e e 5 5 5 5 b c . . . . 
            . . . . . f f f f f f . . . . . 
            `)
    }
    if (sceneSELECT == 1) {
        if (curSELECT == BUTTONS.length - 1) {
            curSELECT = 0
        } else {
            curSELECT += 1
        }
        selectUI(curSELECT)
    }
})
function selectUI (num: number) {
    for (let index = 0; index <= BUTTONS.length - 1; index++) {
        if (index == num) {
            BUTTONS[index].setBorder(2, 2)
        } else {
            BUTTONS[index].setBorder(2, 1)
        }
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sceneSELECT == 0) {
        MC.setImage(img`
            . . . . . . . c c c . . . . . . 
            . . . . . . c b 5 c . . . . . . 
            . . . . c c c 5 5 c c c . . . . 
            . . c c b c 5 5 5 5 c c c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . f 5 5 5 b b b b 5 5 5 c . . 
            . . f f 5 5 5 5 5 5 5 5 f f . . 
            . . f f f b f e e f b f f f . . 
            . . f f f 1 f b b f 1 f f f . . 
            . . . f f b b b b b b f f . . . 
            . . . e e f e e e e f e e . . . 
            . . e b c b 5 b b 5 b f b e . . 
            . . e e f 5 5 5 5 5 5 f e e . . 
            . . . . c b 5 5 5 5 b c . . . . 
            . . . . . f f f f f f . . . . . 
            `)
    }
})
function theGarden () {
    tiles.setCurrentTilemap(tilemap`level1`)
    MC = sprites.create(img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 5 b c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e e f f f f f f f e . . . 
        . . e b f b 5 b b 5 b c b e . . 
        . . e e f 5 5 5 5 5 5 f e e . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Player)
    SIGN = sprites.create(assets.image`sign`, SpriteKind.NPC)
    scene.cameraFollowSprite(MC)
    tiles.placeOnTile(MC, tiles.getTileLocation(7, 15))
    tiles.placeOnTile(SIGN, tiles.getTileLocation(7, 13))
    controller.moveSprite(MC, 100, 100)
}
let MagicPotionTXT: TextSprite = null
let HealthPotionTXT: TextSprite = null
let curSELECT = 0
let BUTTONS: TextSprite[] = []
let MAGICENERGY: StatusBarSprite = null
let HEALTHBAR: StatusBarSprite = null
let RUNtxt: TextSprite = null
let ITEMtxt: TextSprite = null
let FIGHTtxt: TextSprite = null
let signHealth = 0
let signMONSTER: Sprite = null
let pHP = 0
let SIGN: Sprite = null
let MC: Sprite = null
let MPPHeld = 0
let HPPHeld = 0
let sceneSELECT = 0
sceneSELECT = 0
SCENE()
HPPHeld = 3
MPPHeld = 3
