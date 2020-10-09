import { 
  photoDataSourceFactory,
  plantDataSourceFactory,
  speciesDataSourceFactory,
  LifeCycleDataSourceFactory,
  lightSourceDataSourceFactory,
  EnvironmentDataSourceFactory,
  store
} from '@gardn/data';

/**
 * Data Sources factory
 */
export const dataSources = (): any => ({
  plant: plantDataSourceFactory(store),
  species: speciesDataSourceFactory(store),
  photo: photoDataSourceFactory(store),
  lifeCycle: LifeCycleDataSourceFactory(store),
  lightSource: lightSourceDataSourceFactory(store),
  environment: EnvironmentDataSourceFactory(store)
});