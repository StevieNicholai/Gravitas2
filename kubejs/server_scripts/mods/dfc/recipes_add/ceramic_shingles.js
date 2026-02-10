const dfcRecipeAddCeramicShingles = (/** @type {Internal.RecipesEventJS} */ event) => {
  // === CERAMIC SHINGLE RECIPES ===

  // Forming Press: 1 clay ball + cylinder mold → 1 unfired shingle (5s, 800 EU)
  event.recipes.gtceu
    .forming_press('unfired_shingle_from_clay')
    .notConsumable('gtceu:cylinder_casting_mold')
    .itemInputs('minecraft:clay_ball')
    .itemOutputs('dfc:ceramic/unfired_shingle')
    .duration(100)
    .EUt(8)

  // Create Vintage Curving: 1 clay ball + cylinder mold → 1 unfired shingle
  event.recipes.vintage.curving(
    'dfc:ceramic/unfired_shingle',
    'minecraft:clay_ball',
    'gtceu:cylinder_casting_mold'
  ).id('gregitas:curving/unfired_shingle')

  // Alloy Smelter: 4 clay balls + cylinder mold → 4 fired shingles (4s, 2400 EU)
  event.recipes.gtceu
    .alloy_smelter('shingle_from_clay')
    .itemInputs('4x minecraft:clay_ball')
    .notConsumable('gtceu:cylinder_casting_mold')
    .itemOutputs('4x dfc:ceramic/shingle')
    .duration(80)
    .EUt(30)

  // Smelting: unfired shingle → fired shingle (10s = 200 ticks)
  event.smelting('dfc:ceramic/shingle', 'dfc:ceramic/unfired_shingle')
    .cookingTime(200)
}
