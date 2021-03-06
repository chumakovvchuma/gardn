import { Store } from './../store/interface';

import { valueIsDefined } from '@gardn/helpers';
import { DataSourceFactory } from '../data-sources.interfaces';
import { LightBulbTemplate } from '../generated';

export const lightBulbTemplateDataSourceFactory: DataSourceFactory<LightBulbTemplate> = (store: Store) => ({
  byId({ id }) {
    return store.lightBulbTemplates.find(lightBulbTemplate => lightBulbTemplate.id === id);
  },
  getAll() {
    return store.lightBulbTemplates;
  },
  filterByEnvironmentId({ id }) {
    const environmentLightBulbTemplatesRecords = store.environmentsLightBulbTemplates.filter(eLS => eLS.environmentId === id);

    return environmentLightBulbTemplatesRecords
      .map(eLS => store.lightBulbTemplates.find(lightBulbTemplate => lightBulbTemplate.id === eLS.lightBulbTemplateId))
      .filter(valueIsDefined);
  }
})