const dfcRecipesAddPewter = (/** @type {Internal.RecipesEventJS} */ event) => {

  // Pewter plate processing recipes
  // Create press: ingot → plate
  event.recipes.create.pressing(
    'dfc:metal/sheet/pewter',
    ['dfc:metal/ingot/pewter']
  ).id('gregitas:pressing/pewter_plate')

  // GregTech forge hammer: 3 ingots → 2 plates
  event.recipes.gtceu
    .forge_hammer('pewter_ingot_to_plate')
    .itemInputs('3x dfc:metal/ingot/pewter')
    .itemOutputs('2x dfc:metal/sheet/pewter')
    .duration(100)
    .EUt(8)

  // GregTech bender: ingot → plate
  event.recipes.gtceu
    .bender('pewter_ingot_to_plate_bender')
    .itemInputs('dfc:metal/ingot/pewter')
    .itemOutputs('dfc:metal/sheet/pewter')
    .circuit(1)
    .duration(100)
    .EUt(24)

  // GregTech extruder: ingot + plate mold → plate
  event.recipes.gtceu
    .extruder('pewter_ingot_to_plate_extruder')
    .itemInputs('dfc:metal/ingot/pewter')
    .notConsumable('gtceu:plate_extruder_mold')
    .itemOutputs('dfc:metal/sheet/pewter')
    .duration(100)
    .EUt(64)

  // GregTech cutter: ingot → plate
  event.recipes.gtceu
    .cutter('pewter_ingot_to_plate_cutter')
    .itemInputs('dfc:metal/ingot/pewter')
    .inputFluids(Fluid.of('gtceu:lubricant', 1))
    .itemOutputs('dfc:metal/sheet/pewter')
    .duration(40)
    .EUt(32)

  // GregTech fluid solidifier: molten pewter + plate mold → plate
  event.recipes.gtceu
    .fluid_solidifier('pewter_fluid_to_plate')
    .inputFluids('dfc:metal/dfc_pewter 144')
    .notConsumable('gtceu:plate_casting_mold')
    .itemOutputs('dfc:metal/sheet/pewter')
    .duration(60)
    .EUt(8)

  // Heated Create press: 2 ingots + flux → double ingot
  event.custom({
    type: 'create:compacting',
    ingredients: [
      {
        item: 'dfc:metal/ingot/pewter',
        count: 2
      },
      {
        item: 'tfc:powder/flux',
        count: 1
      }
    ],
    results: [
      {
        item: 'dfc:metal/double_ingot/pewter',
        count: 1
      }
    ],
    heatRequirement: 'superheated'
  }).id('gregitas:heated_pressing/double_ingot/pewter')

  // GregTech bender: 2 sheets → double sheet
  event.recipes.gtceu
    .bender('pewter_sheets_to_double_sheet')
    .itemInputs('2x dfc:metal/sheet/pewter')
    .itemOutputs('dfc:metal/double_sheet/pewter')
    .circuit(2)
    .duration(100)
    .EUt(24)

  // Pewter rod processing recipes
  // Create rolling: 1 ingot → 2 rods
  event.recipes.createaddition.rolling(
    Item.of('dfc:metal/rod/pewter', 2),
    'dfc:metal/ingot/pewter'
  ).id('gregitas:rolling/pewter_rod')

  // GregTech extruder: 1 ingot + rod mold → 2 rods
  event.recipes.gtceu
    .extruder('pewter_ingot_to_rod_extruder')
    .itemInputs('dfc:metal/ingot/pewter')
    .notConsumable('gtceu:rod_extruder_mold')
    .itemOutputs('2x dfc:metal/rod/pewter')
    .duration(100)
    .EUt(64)

  // GregTech lathe: 1 ingot → 2 rods
  event.recipes.gtceu
    .lathe('pewter_ingot_to_rod_lathe')
    .itemInputs('dfc:metal/ingot/pewter')
    .itemOutputs('2x dfc:metal/rod/pewter')
    .duration(100)
    .EUt(8)
}
