import { Resolvers } from './../generated';

/**
 * Data is stored in memory for development
 */
export const plantStageResolvers: Resolvers = {
  Query: {
    plantStages: (_, __, { dataSources }) => dataSources.plantStage.getAll(),
    plantStage: (_, { id, speciesId }, { dataSources }) => {
      const plantStage = dataSources.plantStage.byId({ id })

      // todo future use field resolvers that check for speciesId (atm the typing doesn't include it? also this bypassing n+1)
      if (speciesId) {
        const speciesPlantStagesRecord = dataSources.speciesPlantStages.filterBySpeciesAndStage(speciesId, id)
        if (speciesPlantStagesRecord !== null) {
          // plantStage. // 1) populate species-plantstages data with species specific plant stage data
          //                2) finish this resolver
          //                3) update fe queries and components
        }
      }


      if (plantStage) {
        return plantStage;
      }
      
      return new Error('PlantStage not found')
    }
  },
  PlantStage: {
    defaultEnvironment: ({ id }, _, { dataSources }) => {
      const plantStage = dataSources.plantStage.byId({ id });

      if (plantStage.defaultEnvironmentId) {
        const environment = dataSources.environment.byId({ id: plantStage.environmentId })
        return environment;
      }

      return null;
    },
    environment: ({ id }, _, { dataSources }) => {
      const plantStage = dataSources.plantStage.byId({ id });

      // todo environmentId comes from species<->plantStages many:many record
      // todo need speciesId
      if (plantStage.environmentId) {
        const environment = dataSources.environment.byId({ id: plantStage.environmentId })
        return environment;
      }

      return null;
    },
    estimateLength: ({ id }, _, { dataSources }) => {
      const plantStage = dataSources.plantStage.byId({ id });

      if (plantStage.environmentId) {
        const environment = dataSources.environment.byId({ id: plantStage.environmentId })
        return environment;
      }

      return null;
    }
  }
}