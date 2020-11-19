import { mockEnvironmentSeed, mockEnvironmentSprout } from '../../../environment/mocks';
import { 
  plantStageGermination,
  plantStagePlanting,
  plantStageSeed,
  plantStageSprouting
} from '../../../plant-stage/seed-data';
import { createDBSpeciesPlantStages } from '../../../species/species-plantstages/helpers/create-species-plant-stages';
import { species1, species2 } from '../../../species/seed-data';

/**
 * Associations Seeds
 *  many:many relationships between Models
 */
export const speciesPlantStagesSeed = [
  // Species 1's PlantStages
  createDBSpeciesPlantStages({
    speciesId: species1.id,
    plantStageId: plantStageSeed.id
  }),
  createDBSpeciesPlantStages({
    speciesId: species1.id,
    plantStageId: plantStageGermination.id,
    environmentId: mockEnvironmentSeed.id
  }),
  createDBSpeciesPlantStages({
    speciesId: species1.id,
    plantStageId: plantStagePlanting.id,
    environmentId: mockEnvironmentSprout.id
  }),
  createDBSpeciesPlantStages({
    speciesId: species1.id,
    plantStageId: plantStageSprouting.id,
    environmentId: mockEnvironmentSprout.id
  }),
  // Species 2's PlantStages
  createDBSpeciesPlantStages({
    speciesId: species2.id,
    plantStageId: plantStageSeed.id
  }),
  createDBSpeciesPlantStages({
    speciesId: species2.id,
    plantStageId: plantStageGermination.id,
    environmentId: mockEnvironmentSeed.id
  }),
  createDBSpeciesPlantStages({
    speciesId: species2.id,
    plantStageId: plantStagePlanting.id,
    environmentId: mockEnvironmentSprout.id
  }),
  createDBSpeciesPlantStages({
    speciesId: species2.id,
    plantStageId: plantStageSprouting.id,
    environmentId: mockEnvironmentSprout.id
  }),
  // for full testing, remaining species do not have the optional data PlantStage
];