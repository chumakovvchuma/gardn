import { Resolvers } from './../../../generated';

/**
 * Data is stored in memory for development
 */
export const plantStageEventDataResolvers: Resolvers = {
  PlantStageEventData: {
    previousPlantStage: ({ id }, _, { dataSources }) => {
      const plantStageEventDataRecord = dataSources.plantStageEventData.byId({ id })

      if (plantStageEventDataRecord.previousPlantStageId) {
        return dataSources.plantStage.byId({ id: plantStageEventDataRecord.previousPlantStageId })
      }

      return null
    },
    plantStage: ({ id }, _, { dataSources }) => {
      const plantStageEventDataRecord = dataSources.plantStageEventData.byId({ id })

      if (plantStageEventDataRecord.plantStageId) {
        return dataSources.plantStage.byId({ id: plantStageEventDataRecord.plantStageId })
      }

      return null
    },
    previousEnvironment: ({ id }, _, { dataSources }) => {
      const plantStageEventDataRecord = dataSources.plantStageEventData.byId({ id })

      if (plantStageEventDataRecord.previousEnvironmentId) {
        return dataSources.environment.byId({ id: plantStageEventDataRecord.previousEnvironmentId })
      }

      return null
    },
    environment: ({ id }, _, { dataSources }) => {
      const plantStageEventDataRecord = dataSources.plantStageEventData.byId({ id })

      if (plantStageEventDataRecord.environmentId) {
        return dataSources.environment.byId({ id: plantStageEventDataRecord.environmentId })
      }

      return null
    }
  }
}

