import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { useGetPlantRecentEventsAndCurrentStageEnvironmentLazyQuery } from '@gardn/data';
import { PlantRecentEventsIcons as PlantRecentEventsIconsUi } from '@gardn/plant/ui';

/**
 * @param props 
 */
export const PlantRecentEventsIcons = () => {
  const { id } = useParams<{id: string}>()

  const [getPlantRecentEventsAndCurrentIdealEnvironment, { data, loading, error }] = useGetPlantRecentEventsAndCurrentStageEnvironmentLazyQuery({
    variables: {
      plantId: parseInt(id),
      limitPerType: 1 // applied to main events, not water or light change (see the actual query for how this variable is used)
    }
  });

  useEffect(() => { getPlantRecentEventsAndCurrentIdealEnvironment() }, [getPlantRecentEventsAndCurrentIdealEnvironment])

  if (error) {
    return <div>Error :( { error.graphQLErrors[0]?.message } </div>
  }

  if (loading || !data) {
    return <div>Loading</div>
  }

  return <PlantRecentEventsIconsUi events={data.events} currentEnvironment={data.currentEnvironment} lightChangeEvents={data.lightChangeEvents} waterEvents={data.waterEvents} />
};

export default PlantRecentEventsIcons;
