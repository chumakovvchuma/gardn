import { Store } from './../../store/interface';
import { BaseDbModel } from '../../generated';
import { DataSourceFactory } from '../../data-sources.interfaces';
import { DBSpeciesPlantStages } from '../interfaces';
import { createDBSpeciesPlantStages } from './helpers/create-species-plant-stages';

/**
 * SpeciesPlantStagesDataSourceFactory DataSource Factory
 * @param store 
 */
export const SpeciesPlantStagesDataSourceFactory: DataSourceFactory<DBSpeciesPlantStages> = (store: Store) => ({
  // Read Data
  byId({ id }) {
    const speciesPlantStagesRecord = store.speciesPlantStages.find(speciesPlantStages => speciesPlantStages.id === id);

    if (!speciesPlantStagesRecord) {
      return null;
    }

    return speciesPlantStagesRecord;
  },
  getAll() {
    return store.speciesPlantStages
  },
  filterBySpeciesAndStage(speciesId: number, plantStageId, number) {
    const filteredSpeciesPlantStagesRecords = store.speciesPlantStages
      .filter(speciesPlantStages => speciesPlantStages.speciesId === speciesId)
      .filter(speciesPlantStages => speciesPlantStages.plantStageId === plantStageId)

    // there should only be 1 Species<->PlantStages record per species & plant stage
    if (filteredSpeciesPlantStagesRecords.length === 1) {
      return filteredSpeciesPlantStagesRecords[0]
    }

    if (filteredSpeciesPlantStagesRecords.length === 0) {
      return null
    }

    throw new Error(`[DataSource] SpeciesPlantStagesDataSource filterBySpeciesAndStage() case exception - multiple records found for speciesId=${speciesId} plantStageId=${plantStageId}`)
  },
  // Create Data
  new(eventsTargetsData: Omit<DBSpeciesPlantStages, keyof BaseDbModel>) {
    const newDBSpeciesPlantStagesRecord = createDBSpeciesPlantStages(eventsTargetsData);
    store.speciesPlantStages.push(newDBSpeciesPlantStagesRecord);

    return newDBSpeciesPlantStagesRecord;
  }
});