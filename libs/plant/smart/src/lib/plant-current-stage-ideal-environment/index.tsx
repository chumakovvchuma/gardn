import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { useGetPlantCurrentPlantStageEnvironmentLazyQuery } from '@gardn/data';
import { PlantCurrentStageIdealEnvironment as PlantCurrentStageIdealEnvironmentUi } from '@gardn/plant/ui';

/**
 * @param props 
 */
export const PlantCurrentStageIdealEnvironment = () => {
  const { id } = useParams<{id: string}>()

  const [getPlantCurrentStageEnvironment, { data, loading, error }] = useGetPlantCurrentPlantStageEnvironmentLazyQuery({
    variables: {
      id: parseInt(id)
    }
  });

  useEffect(() => { getPlantCurrentStageEnvironment() }, [getPlantCurrentStageEnvironment])

  if (error) {
    return <div>Error :( { error.graphQLErrors[0]?.message } </div>
  }

  if (loading || !data) {
    return <div>Loading</div>
  }

  // todo on update API to support singular event(), update this to simplify since its getting events() => event[]
  return <PlantCurrentStageIdealEnvironmentUi currentEnvironment={data.currentEnvironment} />
};

export default PlantCurrentStageIdealEnvironment;
