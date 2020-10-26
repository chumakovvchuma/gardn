import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Timestamp: any;
};


export enum EventType {
  Water = 'WATER',
  Light = 'LIGHT',
  HumidityReading = 'HUMIDITY_READING',
  TemperatureReading = 'TEMPERATURE_READING'
}

export enum LiquidUnit {
  Gill = 'GILL',
  Pint = 'PINT',
  Quart = 'QUART',
  Gallon = 'GALLON',
  Milliliter = 'MILLILITER',
  Liter = 'LITER',
  Kiloliter = 'KILOLITER'
}

export enum TimeUnit {
  Second = 'SECOND',
  Minute = 'MINUTE',
  Hour = 'HOUR',
  Day = 'DAY',
  Week = 'WEEK',
  Month = 'MONTH',
  Year = 'YEAR',
  Decade = 'DECADE',
  Century = 'CENTURY'
}

export enum TemperatureUnit {
  Fahrenheit = 'FAHRENHEIT',
  Celsius = 'CELSIUS'
}

export enum HumidityUnit {
  GramsPerCubicMeter = 'GRAMS_PER_CUBIC_METER',
  GramsPerKilogram = 'GRAMS_PER_KILOGRAM',
  Percentage = 'PERCENTAGE'
}

export enum ElectricalConductivityUnit {
  SiemensPerSquareMeterPerMole = 'SIEMENS_PER_SQUARE_METER_PER_MOLE',
  MillisiemensPerMeter = 'MILLISIEMENS_PER_METER',
  MillisiemensPerCentimeter = 'MILLISIEMENS_PER_CENTIMETER'
}

export enum LightBulbType {
  Hid = 'HID',
  Mh = 'MH',
  Cmh = 'CMH',
  Cdm = 'CDM',
  Hps = 'HPS',
  Led = 'LED',
  Cfl = 'CFL',
  Ccfl = 'CCFL'
}

export enum LightBulbColor {
  Uva = 'UVA',
  Blue = 'BLUE',
  Green = 'GREEN',
  Red = 'RED',
  FarRed = 'FAR_RED',
  Infrared = 'INFRARED'
}

export type Environment = BaseDbModel & {
  __typename?: 'Environment';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  idealWaterAmount?: Maybe<Scalars['Float']>;
  idealWaterAmountUnit?: Maybe<LiquidUnit>;
  idealWaterAmountPerTimePeriod?: Maybe<Scalars['Int']>;
  idealWaterAmountPerTimePeriodUnit?: Maybe<TimeUnit>;
  idealTemperatureMin?: Maybe<Scalars['Float']>;
  idealTemperatueMax?: Maybe<Scalars['Float']>;
  idealTemperatureMinUnit?: Maybe<TemperatureUnit>;
  idealTemperatureMaxUnit?: Maybe<TemperatureUnit>;
  idealHumidityMin?: Maybe<Scalars['Float']>;
  idealHumidityMax?: Maybe<Scalars['Float']>;
  idealHumidityMinUnit?: Maybe<HumidityUnit>;
  idealHumidityMaxUnit?: Maybe<HumidityUnit>;
  lightOnTime?: Maybe<Scalars['Int']>;
  lightOnTimeUnit?: Maybe<TimeUnit>;
  lightOnTimePerTimePeriod?: Maybe<Scalars['Int']>;
  lightOnTimePerTimePeriodUnit?: Maybe<TimeUnit>;
  lightSources?: Maybe<Array<Maybe<LightSource>>>;
  desiredPH?: Maybe<Scalars['Float']>;
  phMinimum?: Maybe<Scalars['Float']>;
  phMaximum?: Maybe<Scalars['Float']>;
  desiredElectricalConductivity?: Maybe<Scalars['Float']>;
  desiredElectricalConductivityUnit?: Maybe<ElectricalConductivityUnit>;
  electricalConductivityMin?: Maybe<Scalars['Float']>;
  electricalConductivityMax?: Maybe<Scalars['Float']>;
  electricalConductivityMinUnit?: Maybe<ElectricalConductivityUnit>;
  electricalConductivityMaxUnit?: Maybe<ElectricalConductivityUnit>;
};

export type Query = {
  __typename?: 'Query';
  allSpecies?: Maybe<Array<Maybe<Species>>>;
  environment?: Maybe<Environment>;
  environments?: Maybe<Array<Maybe<Environment>>>;
  event?: Maybe<Event>;
  lifeCycle?: Maybe<LifeCycle>;
  lifeCycles?: Maybe<Array<Maybe<LifeCycle>>>;
  lightSource?: Maybe<LightSource>;
  lightSources?: Maybe<Array<Maybe<LightSource>>>;
  photo?: Maybe<Photo>;
  photos?: Maybe<Array<Maybe<Photo>>>;
  plant?: Maybe<Plant>;
  plants?: Maybe<Array<Maybe<Plant>>>;
  species?: Maybe<Species>;
};


export type QueryEnvironmentArgs = {
  id: Scalars['Int'];
};


export type QueryEventArgs = {
  eventDataId: Scalars['Int'];
  eventType: EventType;
};


export type QueryLifeCycleArgs = {
  id: Scalars['Int'];
};


export type QueryLightSourceArgs = {
  id: Scalars['Int'];
};


export type QueryPhotoArgs = {
  id: Scalars['Int'];
};


export type QueryPlantArgs = {
  id: Scalars['Int'];
};


export type QuerySpeciesArgs = {
  id: Scalars['Int'];
};

export enum EventTargetType {
  Plant = 'PLANT'
}

export type WaterEventData = BaseDbModel & {
  __typename?: 'WaterEventData';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  amount?: Maybe<Scalars['Float']>;
  amountUnit?: Maybe<LiquidUnit>;
  temperature?: Maybe<Scalars['Float']>;
  temperatureUnit?: Maybe<TemperatureUnit>;
  eventTime?: Maybe<Scalars['Timestamp']>;
};

export type EventTarget = Plant;

export type EventData = WaterEventData;

export type Event = BaseDbModel & {
  __typename?: 'Event';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  type: EventType;
  data?: Maybe<EventData>;
  targets?: Maybe<Array<Maybe<EventTarget>>>;
};

export type BaseDbModel = {
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
};

export type LifeCycle = BaseDbModel & {
  __typename?: 'LifeCycle';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  environment?: Maybe<Environment>;
};

export type LightSource = BaseDbModel & {
  __typename?: 'LightSource';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  bulbType?: Maybe<LightBulbType>;
  wattage?: Maybe<Scalars['Int']>;
  lumens?: Maybe<Scalars['Int']>;
  color?: Maybe<LightBulbColor>;
};

export type Photo = BaseDbModel & {
  __typename?: 'Photo';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  url: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPhoto?: Maybe<Photo>;
  addPlant?: Maybe<Plant>;
  addSpecies?: Maybe<Species>;
};


export type MutationAddPhotoArgs = {
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type MutationAddPlantArgs = {
  name?: Maybe<Scalars['String']>;
};


export type MutationAddSpeciesArgs = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type Plant = BaseDbModel & {
  __typename?: 'Plant';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  name?: Maybe<Scalars['String']>;
  species?: Maybe<Species>;
  photos?: Maybe<Array<Maybe<Photo>>>;
  coverPhoto?: Maybe<Photo>;
  avatar?: Maybe<Photo>;
  currentLifeCycle?: Maybe<LifeCycle>;
  events?: Maybe<Array<Maybe<Event>>>;
};

export type Species = BaseDbModel & {
  __typename?: 'Species';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  coverPhoto?: Maybe<Photo>;
  avatar?: Maybe<Photo>;
  sproutToHarvestInHours?: Maybe<Scalars['Int']>;
  lifeCycles?: Maybe<Array<Maybe<LifeCycle>>>;
};

export type EnvironmentConditionsFragment = (
  { __typename?: 'Environment' }
  & Pick<Environment, 'idealWaterAmount' | 'idealWaterAmountUnit' | 'idealWaterAmountPerTimePeriod' | 'idealWaterAmountPerTimePeriodUnit' | 'idealTemperatureMin' | 'idealTemperatueMax' | 'idealTemperatureMinUnit' | 'idealTemperatureMaxUnit' | 'idealHumidityMin' | 'idealHumidityMax' | 'idealHumidityMinUnit' | 'idealHumidityMaxUnit' | 'lightOnTime' | 'lightOnTimeUnit' | 'lightOnTimePerTimePeriod' | 'lightOnTimePerTimePeriodUnit' | 'desiredPH' | 'phMinimum' | 'phMaximum' | 'desiredElectricalConductivity' | 'desiredElectricalConductivityUnit' | 'electricalConductivityMin' | 'electricalConductivityMax' | 'electricalConductivityMinUnit' | 'electricalConductivityMaxUnit'>
  & { lightSources?: Maybe<Array<Maybe<(
    { __typename?: 'LightSource' }
    & LightSourceDetailsFragment
  )>>> }
);

export type GetLifeCycleQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetLifeCycleQuery = (
  { __typename?: 'Query' }
  & { lifeCycle?: Maybe<(
    { __typename?: 'LifeCycle' }
    & Pick<LifeCycle, 'name' | 'dateCreated' | 'description'>
    & { environment?: Maybe<(
      { __typename?: 'Environment' }
      & Pick<Environment, 'id' | 'name'>
    )> }
  )> }
);

export type GetAllLifeCyclesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLifeCyclesQuery = (
  { __typename?: 'Query' }
  & { lifeCycles?: Maybe<Array<Maybe<(
    { __typename?: 'LifeCycle' }
    & Pick<LifeCycle, 'name' | 'dateCreated' | 'description'>
    & { environment?: Maybe<(
      { __typename?: 'Environment' }
      & Pick<Environment, 'id' | 'name'>
    )> }
  )>>> }
);

export type LightSourceDetailsFragment = (
  { __typename?: 'LightSource' }
  & Pick<LightSource, 'id' | 'name' | 'description' | 'bulbType' | 'wattage' | 'lumens' | 'color'>
);

export type AddPhotoMutationVariables = Exact<{
  url: Scalars['String'];
  title?: Maybe<Scalars['String']>;
}>;


export type AddPhotoMutation = (
  { __typename?: 'Mutation' }
  & { addPhoto?: Maybe<(
    { __typename?: 'Photo' }
    & Pick<Photo, 'id' | 'url' | 'title' | 'dateCreated'>
  )> }
);

export type GetPhotosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPhotosQuery = (
  { __typename?: 'Query' }
  & { photos?: Maybe<Array<Maybe<(
    { __typename?: 'Photo' }
    & Pick<Photo, 'id' | 'url' | 'title' | 'dateCreated'>
  )>>> }
);

export type GetPhotoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPhotoQuery = (
  { __typename?: 'Query' }
  & { photo?: Maybe<(
    { __typename?: 'Photo' }
    & Pick<Photo, 'id' | 'url' | 'title' | 'dateCreated'>
  )> }
);

export type AddPlantMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
}>;


export type AddPlantMutation = (
  { __typename?: 'Mutation' }
  & { addPlant?: Maybe<(
    { __typename?: 'Plant' }
    & Pick<Plant, 'id' | 'name'>
  )> }
);

export type GetPlantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlantsQuery = (
  { __typename?: 'Query' }
  & { plants?: Maybe<Array<Maybe<(
    { __typename?: 'Plant' }
    & Pick<Plant, 'id' | 'name'>
  )>>> }
);

export type GetPlantQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlantQuery = (
  { __typename?: 'Query' }
  & { plant?: Maybe<(
    { __typename?: 'Plant' }
    & Pick<Plant, 'name' | 'dateCreated'>
    & { species?: Maybe<(
      { __typename?: 'Species' }
      & Pick<Species, 'name'>
    )>, photos?: Maybe<Array<Maybe<(
      { __typename?: 'Photo' }
      & Pick<Photo, 'url' | 'title'>
    )>>>, coverPhoto?: Maybe<(
      { __typename?: 'Photo' }
      & Pick<Photo, 'url'>
    )> }
  )> }
);

export type GetPlantCoverPhotoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlantCoverPhotoQuery = (
  { __typename?: 'Query' }
  & { plant?: Maybe<(
    { __typename?: 'Plant' }
    & { coverPhoto?: Maybe<(
      { __typename?: 'Photo' }
      & Pick<Photo, 'url'>
    )> }
  )> }
);

export type GetPlantInfoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlantInfoQuery = (
  { __typename?: 'Query' }
  & { plant?: Maybe<(
    { __typename?: 'Plant' }
    & Pick<Plant, 'id' | 'name' | 'dateCreated'>
    & { currentLifeCycle?: Maybe<(
      { __typename?: 'LifeCycle' }
      & Pick<LifeCycle, 'id' | 'name' | 'description'>
      & { environment?: Maybe<(
        { __typename?: 'Environment' }
        & Pick<Environment, 'id' | 'name'>
        & EnvironmentConditionsFragment
      )> }
    )>, species?: Maybe<(
      { __typename?: 'Species' }
      & Pick<Species, 'id' | 'name' | 'description' | 'sproutToHarvestInHours'>
    )> }
  )> }
);

export type GetPlantEventsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlantEventsQuery = (
  { __typename?: 'Query' }
  & { plant?: Maybe<(
    { __typename?: 'Plant' }
    & { events?: Maybe<Array<Maybe<(
      { __typename?: 'Event' }
      & Pick<Event, 'id' | 'dateCreated' | 'type'>
      & { data?: Maybe<(
        { __typename?: 'WaterEventData' }
        & Pick<WaterEventData, 'amount' | 'amountUnit' | 'temperature' | 'temperatureUnit' | 'eventTime'>
      )> }
    )>>> }
  )> }
);

export type GetPlantPhotosQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlantPhotosQuery = (
  { __typename?: 'Query' }
  & { plant?: Maybe<(
    { __typename?: 'Plant' }
    & { photos?: Maybe<Array<Maybe<(
      { __typename?: 'Photo' }
      & Pick<Photo, 'id' | 'url' | 'title' | 'dateCreated'>
    )>>> }
  )> }
);

export type AddSpeciesMutationVariables = Exact<{
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
}>;


export type AddSpeciesMutation = (
  { __typename?: 'Mutation' }
  & { addSpecies?: Maybe<(
    { __typename?: 'Species' }
    & Pick<Species, 'id' | 'name' | 'description'>
  )> }
);

export type GetSpeciesQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetSpeciesQuery = (
  { __typename?: 'Query' }
  & { species?: Maybe<(
    { __typename?: 'Species' }
    & Pick<Species, 'name' | 'description'>
  )> }
);

export type GetAllSpeciesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSpeciesQuery = (
  { __typename?: 'Query' }
  & { allSpecies?: Maybe<Array<Maybe<(
    { __typename?: 'Species' }
    & Pick<Species, 'id' | 'name'>
  )>>> }
);

export const LightSourceDetailsFragmentDoc = gql`
    fragment LightSourceDetails on LightSource {
  id
  name
  description
  bulbType
  wattage
  lumens
  color
}
    `;
export const EnvironmentConditionsFragmentDoc = gql`
    fragment EnvironmentConditions on Environment {
  idealWaterAmount
  idealWaterAmountUnit
  idealWaterAmountPerTimePeriod
  idealWaterAmountPerTimePeriodUnit
  idealTemperatureMin
  idealTemperatueMax
  idealTemperatureMinUnit
  idealTemperatureMaxUnit
  idealHumidityMin
  idealHumidityMax
  idealHumidityMinUnit
  idealHumidityMaxUnit
  lightOnTime
  lightOnTimeUnit
  lightOnTimePerTimePeriod
  lightOnTimePerTimePeriodUnit
  lightSources {
    ...LightSourceDetails
  }
  desiredPH
  phMinimum
  phMaximum
  desiredElectricalConductivity
  desiredElectricalConductivityUnit
  electricalConductivityMin
  electricalConductivityMax
  electricalConductivityMinUnit
  electricalConductivityMaxUnit
}
    ${LightSourceDetailsFragmentDoc}`;
export const GetLifeCycleDocument = gql`
    query getLifeCycle($id: Int!) {
  lifeCycle(id: $id) {
    name
    dateCreated
    description
    environment {
      id
      name
    }
  }
}
    `;

/**
 * __useGetLifeCycleQuery__
 *
 * To run a query within a React component, call `useGetLifeCycleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLifeCycleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLifeCycleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLifeCycleQuery(baseOptions?: Apollo.QueryHookOptions<GetLifeCycleQuery, GetLifeCycleQueryVariables>) {
        return Apollo.useQuery<GetLifeCycleQuery, GetLifeCycleQueryVariables>(GetLifeCycleDocument, baseOptions);
      }
export function useGetLifeCycleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLifeCycleQuery, GetLifeCycleQueryVariables>) {
          return Apollo.useLazyQuery<GetLifeCycleQuery, GetLifeCycleQueryVariables>(GetLifeCycleDocument, baseOptions);
        }
export type GetLifeCycleQueryHookResult = ReturnType<typeof useGetLifeCycleQuery>;
export type GetLifeCycleLazyQueryHookResult = ReturnType<typeof useGetLifeCycleLazyQuery>;
export type GetLifeCycleQueryResult = Apollo.QueryResult<GetLifeCycleQuery, GetLifeCycleQueryVariables>;
export const GetAllLifeCyclesDocument = gql`
    query getAllLifeCycles {
  lifeCycles {
    name
    dateCreated
    description
    environment {
      id
      name
    }
  }
}
    `;

/**
 * __useGetAllLifeCyclesQuery__
 *
 * To run a query within a React component, call `useGetAllLifeCyclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllLifeCyclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllLifeCyclesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllLifeCyclesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllLifeCyclesQuery, GetAllLifeCyclesQueryVariables>) {
        return Apollo.useQuery<GetAllLifeCyclesQuery, GetAllLifeCyclesQueryVariables>(GetAllLifeCyclesDocument, baseOptions);
      }
export function useGetAllLifeCyclesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllLifeCyclesQuery, GetAllLifeCyclesQueryVariables>) {
          return Apollo.useLazyQuery<GetAllLifeCyclesQuery, GetAllLifeCyclesQueryVariables>(GetAllLifeCyclesDocument, baseOptions);
        }
export type GetAllLifeCyclesQueryHookResult = ReturnType<typeof useGetAllLifeCyclesQuery>;
export type GetAllLifeCyclesLazyQueryHookResult = ReturnType<typeof useGetAllLifeCyclesLazyQuery>;
export type GetAllLifeCyclesQueryResult = Apollo.QueryResult<GetAllLifeCyclesQuery, GetAllLifeCyclesQueryVariables>;
export const AddPhotoDocument = gql`
    mutation addPhoto($url: String!, $title: String) {
  addPhoto(url: $url, title: $title) {
    id
    url
    title
    dateCreated
  }
}
    `;
export type AddPhotoMutationFn = Apollo.MutationFunction<AddPhotoMutation, AddPhotoMutationVariables>;

/**
 * __useAddPhotoMutation__
 *
 * To run a mutation, you first call `useAddPhotoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPhotoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPhotoMutation, { data, loading, error }] = useAddPhotoMutation({
 *   variables: {
 *      url: // value for 'url'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useAddPhotoMutation(baseOptions?: Apollo.MutationHookOptions<AddPhotoMutation, AddPhotoMutationVariables>) {
        return Apollo.useMutation<AddPhotoMutation, AddPhotoMutationVariables>(AddPhotoDocument, baseOptions);
      }
export type AddPhotoMutationHookResult = ReturnType<typeof useAddPhotoMutation>;
export type AddPhotoMutationResult = Apollo.MutationResult<AddPhotoMutation>;
export type AddPhotoMutationOptions = Apollo.BaseMutationOptions<AddPhotoMutation, AddPhotoMutationVariables>;
export const GetPhotosDocument = gql`
    query getPhotos {
  photos {
    id
    url
    title
    dateCreated
  }
}
    `;

/**
 * __useGetPhotosQuery__
 *
 * To run a query within a React component, call `useGetPhotosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhotosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhotosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPhotosQuery(baseOptions?: Apollo.QueryHookOptions<GetPhotosQuery, GetPhotosQueryVariables>) {
        return Apollo.useQuery<GetPhotosQuery, GetPhotosQueryVariables>(GetPhotosDocument, baseOptions);
      }
export function useGetPhotosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPhotosQuery, GetPhotosQueryVariables>) {
          return Apollo.useLazyQuery<GetPhotosQuery, GetPhotosQueryVariables>(GetPhotosDocument, baseOptions);
        }
export type GetPhotosQueryHookResult = ReturnType<typeof useGetPhotosQuery>;
export type GetPhotosLazyQueryHookResult = ReturnType<typeof useGetPhotosLazyQuery>;
export type GetPhotosQueryResult = Apollo.QueryResult<GetPhotosQuery, GetPhotosQueryVariables>;
export const GetPhotoDocument = gql`
    query getPhoto($id: Int!) {
  photo(id: $id) {
    id
    url
    title
    dateCreated
  }
}
    `;

/**
 * __useGetPhotoQuery__
 *
 * To run a query within a React component, call `useGetPhotoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhotoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhotoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPhotoQuery(baseOptions?: Apollo.QueryHookOptions<GetPhotoQuery, GetPhotoQueryVariables>) {
        return Apollo.useQuery<GetPhotoQuery, GetPhotoQueryVariables>(GetPhotoDocument, baseOptions);
      }
export function useGetPhotoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPhotoQuery, GetPhotoQueryVariables>) {
          return Apollo.useLazyQuery<GetPhotoQuery, GetPhotoQueryVariables>(GetPhotoDocument, baseOptions);
        }
export type GetPhotoQueryHookResult = ReturnType<typeof useGetPhotoQuery>;
export type GetPhotoLazyQueryHookResult = ReturnType<typeof useGetPhotoLazyQuery>;
export type GetPhotoQueryResult = Apollo.QueryResult<GetPhotoQuery, GetPhotoQueryVariables>;
export const AddPlantDocument = gql`
    mutation addPlant($name: String) {
  addPlant(name: $name) {
    id
    name
  }
}
    `;
export type AddPlantMutationFn = Apollo.MutationFunction<AddPlantMutation, AddPlantMutationVariables>;

/**
 * __useAddPlantMutation__
 *
 * To run a mutation, you first call `useAddPlantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPlantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPlantMutation, { data, loading, error }] = useAddPlantMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAddPlantMutation(baseOptions?: Apollo.MutationHookOptions<AddPlantMutation, AddPlantMutationVariables>) {
        return Apollo.useMutation<AddPlantMutation, AddPlantMutationVariables>(AddPlantDocument, baseOptions);
      }
export type AddPlantMutationHookResult = ReturnType<typeof useAddPlantMutation>;
export type AddPlantMutationResult = Apollo.MutationResult<AddPlantMutation>;
export type AddPlantMutationOptions = Apollo.BaseMutationOptions<AddPlantMutation, AddPlantMutationVariables>;
export const GetPlantsDocument = gql`
    query getPlants {
  plants {
    id
    name
  }
}
    `;

/**
 * __useGetPlantsQuery__
 *
 * To run a query within a React component, call `useGetPlantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPlantsQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantsQuery, GetPlantsQueryVariables>) {
        return Apollo.useQuery<GetPlantsQuery, GetPlantsQueryVariables>(GetPlantsDocument, baseOptions);
      }
export function useGetPlantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantsQuery, GetPlantsQueryVariables>) {
          return Apollo.useLazyQuery<GetPlantsQuery, GetPlantsQueryVariables>(GetPlantsDocument, baseOptions);
        }
export type GetPlantsQueryHookResult = ReturnType<typeof useGetPlantsQuery>;
export type GetPlantsLazyQueryHookResult = ReturnType<typeof useGetPlantsLazyQuery>;
export type GetPlantsQueryResult = Apollo.QueryResult<GetPlantsQuery, GetPlantsQueryVariables>;
export const GetPlantDocument = gql`
    query getPlant($id: Int!) {
  plant(id: $id) {
    name
    species {
      name
    }
    dateCreated
    photos {
      url
      title
    }
    coverPhoto {
      url
    }
  }
}
    `;

/**
 * __useGetPlantQuery__
 *
 * To run a query within a React component, call `useGetPlantQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlantQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantQuery, GetPlantQueryVariables>) {
        return Apollo.useQuery<GetPlantQuery, GetPlantQueryVariables>(GetPlantDocument, baseOptions);
      }
export function useGetPlantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantQuery, GetPlantQueryVariables>) {
          return Apollo.useLazyQuery<GetPlantQuery, GetPlantQueryVariables>(GetPlantDocument, baseOptions);
        }
export type GetPlantQueryHookResult = ReturnType<typeof useGetPlantQuery>;
export type GetPlantLazyQueryHookResult = ReturnType<typeof useGetPlantLazyQuery>;
export type GetPlantQueryResult = Apollo.QueryResult<GetPlantQuery, GetPlantQueryVariables>;
export const GetPlantCoverPhotoDocument = gql`
    query getPlantCoverPhoto($id: Int!) {
  plant(id: $id) {
    coverPhoto {
      url
    }
  }
}
    `;

/**
 * __useGetPlantCoverPhotoQuery__
 *
 * To run a query within a React component, call `useGetPlantCoverPhotoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantCoverPhotoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantCoverPhotoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlantCoverPhotoQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantCoverPhotoQuery, GetPlantCoverPhotoQueryVariables>) {
        return Apollo.useQuery<GetPlantCoverPhotoQuery, GetPlantCoverPhotoQueryVariables>(GetPlantCoverPhotoDocument, baseOptions);
      }
export function useGetPlantCoverPhotoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantCoverPhotoQuery, GetPlantCoverPhotoQueryVariables>) {
          return Apollo.useLazyQuery<GetPlantCoverPhotoQuery, GetPlantCoverPhotoQueryVariables>(GetPlantCoverPhotoDocument, baseOptions);
        }
export type GetPlantCoverPhotoQueryHookResult = ReturnType<typeof useGetPlantCoverPhotoQuery>;
export type GetPlantCoverPhotoLazyQueryHookResult = ReturnType<typeof useGetPlantCoverPhotoLazyQuery>;
export type GetPlantCoverPhotoQueryResult = Apollo.QueryResult<GetPlantCoverPhotoQuery, GetPlantCoverPhotoQueryVariables>;
export const GetPlantInfoDocument = gql`
    query getPlantInfo($id: Int!) {
  plant(id: $id) {
    id
    name
    currentLifeCycle {
      id
      name
      description
      environment {
        id
        name
        ...EnvironmentConditions
      }
    }
    species {
      id
      name
      description
      sproutToHarvestInHours
    }
    dateCreated
  }
}
    ${EnvironmentConditionsFragmentDoc}`;

/**
 * __useGetPlantInfoQuery__
 *
 * To run a query within a React component, call `useGetPlantInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlantInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantInfoQuery, GetPlantInfoQueryVariables>) {
        return Apollo.useQuery<GetPlantInfoQuery, GetPlantInfoQueryVariables>(GetPlantInfoDocument, baseOptions);
      }
export function useGetPlantInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantInfoQuery, GetPlantInfoQueryVariables>) {
          return Apollo.useLazyQuery<GetPlantInfoQuery, GetPlantInfoQueryVariables>(GetPlantInfoDocument, baseOptions);
        }
export type GetPlantInfoQueryHookResult = ReturnType<typeof useGetPlantInfoQuery>;
export type GetPlantInfoLazyQueryHookResult = ReturnType<typeof useGetPlantInfoLazyQuery>;
export type GetPlantInfoQueryResult = Apollo.QueryResult<GetPlantInfoQuery, GetPlantInfoQueryVariables>;
export const GetPlantEventsDocument = gql`
    query getPlantEvents($id: Int!) {
  plant(id: $id) {
    events {
      id
      dateCreated
      type
      data {
        ... on WaterEventData {
          amount
          amountUnit
          temperature
          temperatureUnit
          eventTime
        }
      }
    }
  }
}
    `;

/**
 * __useGetPlantEventsQuery__
 *
 * To run a query within a React component, call `useGetPlantEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantEventsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlantEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantEventsQuery, GetPlantEventsQueryVariables>) {
        return Apollo.useQuery<GetPlantEventsQuery, GetPlantEventsQueryVariables>(GetPlantEventsDocument, baseOptions);
      }
export function useGetPlantEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantEventsQuery, GetPlantEventsQueryVariables>) {
          return Apollo.useLazyQuery<GetPlantEventsQuery, GetPlantEventsQueryVariables>(GetPlantEventsDocument, baseOptions);
        }
export type GetPlantEventsQueryHookResult = ReturnType<typeof useGetPlantEventsQuery>;
export type GetPlantEventsLazyQueryHookResult = ReturnType<typeof useGetPlantEventsLazyQuery>;
export type GetPlantEventsQueryResult = Apollo.QueryResult<GetPlantEventsQuery, GetPlantEventsQueryVariables>;
export const GetPlantPhotosDocument = gql`
    query getPlantPhotos($id: Int!) {
  plant(id: $id) {
    photos {
      id
      url
      title
      dateCreated
    }
  }
}
    `;

/**
 * __useGetPlantPhotosQuery__
 *
 * To run a query within a React component, call `useGetPlantPhotosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantPhotosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantPhotosQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlantPhotosQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantPhotosQuery, GetPlantPhotosQueryVariables>) {
        return Apollo.useQuery<GetPlantPhotosQuery, GetPlantPhotosQueryVariables>(GetPlantPhotosDocument, baseOptions);
      }
export function useGetPlantPhotosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantPhotosQuery, GetPlantPhotosQueryVariables>) {
          return Apollo.useLazyQuery<GetPlantPhotosQuery, GetPlantPhotosQueryVariables>(GetPlantPhotosDocument, baseOptions);
        }
export type GetPlantPhotosQueryHookResult = ReturnType<typeof useGetPlantPhotosQuery>;
export type GetPlantPhotosLazyQueryHookResult = ReturnType<typeof useGetPlantPhotosLazyQuery>;
export type GetPlantPhotosQueryResult = Apollo.QueryResult<GetPlantPhotosQuery, GetPlantPhotosQueryVariables>;
export const AddSpeciesDocument = gql`
    mutation addSpecies($name: String!, $description: String) {
  addSpecies(name: $name, description: $description) {
    id
    name
    description
  }
}
    `;
export type AddSpeciesMutationFn = Apollo.MutationFunction<AddSpeciesMutation, AddSpeciesMutationVariables>;

/**
 * __useAddSpeciesMutation__
 *
 * To run a mutation, you first call `useAddSpeciesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSpeciesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSpeciesMutation, { data, loading, error }] = useAddSpeciesMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useAddSpeciesMutation(baseOptions?: Apollo.MutationHookOptions<AddSpeciesMutation, AddSpeciesMutationVariables>) {
        return Apollo.useMutation<AddSpeciesMutation, AddSpeciesMutationVariables>(AddSpeciesDocument, baseOptions);
      }
export type AddSpeciesMutationHookResult = ReturnType<typeof useAddSpeciesMutation>;
export type AddSpeciesMutationResult = Apollo.MutationResult<AddSpeciesMutation>;
export type AddSpeciesMutationOptions = Apollo.BaseMutationOptions<AddSpeciesMutation, AddSpeciesMutationVariables>;
export const GetSpeciesDocument = gql`
    query getSpecies($id: Int!) {
  species(id: $id) {
    name
    description
  }
}
    `;

/**
 * __useGetSpeciesQuery__
 *
 * To run a query within a React component, call `useGetSpeciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpeciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpeciesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSpeciesQuery(baseOptions?: Apollo.QueryHookOptions<GetSpeciesQuery, GetSpeciesQueryVariables>) {
        return Apollo.useQuery<GetSpeciesQuery, GetSpeciesQueryVariables>(GetSpeciesDocument, baseOptions);
      }
export function useGetSpeciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpeciesQuery, GetSpeciesQueryVariables>) {
          return Apollo.useLazyQuery<GetSpeciesQuery, GetSpeciesQueryVariables>(GetSpeciesDocument, baseOptions);
        }
export type GetSpeciesQueryHookResult = ReturnType<typeof useGetSpeciesQuery>;
export type GetSpeciesLazyQueryHookResult = ReturnType<typeof useGetSpeciesLazyQuery>;
export type GetSpeciesQueryResult = Apollo.QueryResult<GetSpeciesQuery, GetSpeciesQueryVariables>;
export const GetAllSpeciesDocument = gql`
    query getAllSpecies {
  allSpecies {
    id
    name
  }
}
    `;

/**
 * __useGetAllSpeciesQuery__
 *
 * To run a query within a React component, call `useGetAllSpeciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSpeciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSpeciesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSpeciesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSpeciesQuery, GetAllSpeciesQueryVariables>) {
        return Apollo.useQuery<GetAllSpeciesQuery, GetAllSpeciesQueryVariables>(GetAllSpeciesDocument, baseOptions);
      }
export function useGetAllSpeciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSpeciesQuery, GetAllSpeciesQueryVariables>) {
          return Apollo.useLazyQuery<GetAllSpeciesQuery, GetAllSpeciesQueryVariables>(GetAllSpeciesDocument, baseOptions);
        }
export type GetAllSpeciesQueryHookResult = ReturnType<typeof useGetAllSpeciesQuery>;
export type GetAllSpeciesLazyQueryHookResult = ReturnType<typeof useGetAllSpeciesLazyQuery>;
export type GetAllSpeciesQueryResult = Apollo.QueryResult<GetAllSpeciesQuery, GetAllSpeciesQueryVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']>;
  EventType: EventType;
  LiquidUnit: LiquidUnit;
  TimeUnit: TimeUnit;
  TemperatureUnit: TemperatureUnit;
  HumidityUnit: HumidityUnit;
  ElectricalConductivityUnit: ElectricalConductivityUnit;
  LightBulbType: LightBulbType;
  LightBulbColor: LightBulbColor;
  Environment: ResolverTypeWrapper<Environment>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Query: ResolverTypeWrapper<{}>;
  EventTargetType: EventTargetType;
  WaterEventData: ResolverTypeWrapper<WaterEventData>;
  EventTarget: ResolversTypes['Plant'];
  EventData: ResolversTypes['WaterEventData'];
  Event: ResolverTypeWrapper<Omit<Event, 'data' | 'targets'> & { data?: Maybe<ResolversTypes['EventData']>, targets?: Maybe<Array<Maybe<ResolversTypes['EventTarget']>>> }>;
  BaseDbModel: ResolversTypes['Environment'] | ResolversTypes['WaterEventData'] | ResolversTypes['Event'] | ResolversTypes['LifeCycle'] | ResolversTypes['LightSource'] | ResolversTypes['Photo'] | ResolversTypes['Plant'] | ResolversTypes['Species'];
  LifeCycle: ResolverTypeWrapper<LifeCycle>;
  LightSource: ResolverTypeWrapper<LightSource>;
  Photo: ResolverTypeWrapper<Photo>;
  Mutation: ResolverTypeWrapper<{}>;
  Plant: ResolverTypeWrapper<Plant>;
  Species: ResolverTypeWrapper<Species>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Timestamp: Scalars['Timestamp'];
  Environment: Environment;
  Int: Scalars['Int'];
  String: Scalars['String'];
  Float: Scalars['Float'];
  Query: {};
  WaterEventData: WaterEventData;
  EventTarget: ResolversParentTypes['Plant'];
  EventData: ResolversParentTypes['WaterEventData'];
  Event: Omit<Event, 'data' | 'targets'> & { data?: Maybe<ResolversParentTypes['EventData']>, targets?: Maybe<Array<Maybe<ResolversParentTypes['EventTarget']>>> };
  BaseDbModel: ResolversParentTypes['Environment'] | ResolversParentTypes['WaterEventData'] | ResolversParentTypes['Event'] | ResolversParentTypes['LifeCycle'] | ResolversParentTypes['LightSource'] | ResolversParentTypes['Photo'] | ResolversParentTypes['Plant'] | ResolversParentTypes['Species'];
  LifeCycle: LifeCycle;
  LightSource: LightSource;
  Photo: Photo;
  Mutation: {};
  Plant: Plant;
  Species: Species;
  Boolean: Scalars['Boolean'];
};

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type EnvironmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Environment'] = ResolversParentTypes['Environment']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  idealWaterAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  idealWaterAmountUnit?: Resolver<Maybe<ResolversTypes['LiquidUnit']>, ParentType, ContextType>;
  idealWaterAmountPerTimePeriod?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  idealWaterAmountPerTimePeriodUnit?: Resolver<Maybe<ResolversTypes['TimeUnit']>, ParentType, ContextType>;
  idealTemperatureMin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  idealTemperatueMax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  idealTemperatureMinUnit?: Resolver<Maybe<ResolversTypes['TemperatureUnit']>, ParentType, ContextType>;
  idealTemperatureMaxUnit?: Resolver<Maybe<ResolversTypes['TemperatureUnit']>, ParentType, ContextType>;
  idealHumidityMin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  idealHumidityMax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  idealHumidityMinUnit?: Resolver<Maybe<ResolversTypes['HumidityUnit']>, ParentType, ContextType>;
  idealHumidityMaxUnit?: Resolver<Maybe<ResolversTypes['HumidityUnit']>, ParentType, ContextType>;
  lightOnTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lightOnTimeUnit?: Resolver<Maybe<ResolversTypes['TimeUnit']>, ParentType, ContextType>;
  lightOnTimePerTimePeriod?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lightOnTimePerTimePeriodUnit?: Resolver<Maybe<ResolversTypes['TimeUnit']>, ParentType, ContextType>;
  lightSources?: Resolver<Maybe<Array<Maybe<ResolversTypes['LightSource']>>>, ParentType, ContextType>;
  desiredPH?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  phMinimum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  phMaximum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  desiredElectricalConductivity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  desiredElectricalConductivityUnit?: Resolver<Maybe<ResolversTypes['ElectricalConductivityUnit']>, ParentType, ContextType>;
  electricalConductivityMin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  electricalConductivityMax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  electricalConductivityMinUnit?: Resolver<Maybe<ResolversTypes['ElectricalConductivityUnit']>, ParentType, ContextType>;
  electricalConductivityMaxUnit?: Resolver<Maybe<ResolversTypes['ElectricalConductivityUnit']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allSpecies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Species']>>>, ParentType, ContextType>;
  environment?: Resolver<Maybe<ResolversTypes['Environment']>, ParentType, ContextType, RequireFields<QueryEnvironmentArgs, 'id'>>;
  environments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Environment']>>>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventArgs, 'eventDataId' | 'eventType'>>;
  lifeCycle?: Resolver<Maybe<ResolversTypes['LifeCycle']>, ParentType, ContextType, RequireFields<QueryLifeCycleArgs, 'id'>>;
  lifeCycles?: Resolver<Maybe<Array<Maybe<ResolversTypes['LifeCycle']>>>, ParentType, ContextType>;
  lightSource?: Resolver<Maybe<ResolversTypes['LightSource']>, ParentType, ContextType, RequireFields<QueryLightSourceArgs, 'id'>>;
  lightSources?: Resolver<Maybe<Array<Maybe<ResolversTypes['LightSource']>>>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType, RequireFields<QueryPhotoArgs, 'id'>>;
  photos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Photo']>>>, ParentType, ContextType>;
  plant?: Resolver<Maybe<ResolversTypes['Plant']>, ParentType, ContextType, RequireFields<QueryPlantArgs, 'id'>>;
  plants?: Resolver<Maybe<Array<Maybe<ResolversTypes['Plant']>>>, ParentType, ContextType>;
  species?: Resolver<Maybe<ResolversTypes['Species']>, ParentType, ContextType, RequireFields<QuerySpeciesArgs, 'id'>>;
};

export type WaterEventDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['WaterEventData'] = ResolversParentTypes['WaterEventData']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amountUnit?: Resolver<Maybe<ResolversTypes['LiquidUnit']>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temperatureUnit?: Resolver<Maybe<ResolversTypes['TemperatureUnit']>, ParentType, ContextType>;
  eventTime?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventTargetResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventTarget'] = ResolversParentTypes['EventTarget']> = {
  __resolveType: TypeResolveFn<'Plant', ParentType, ContextType>;
};

export type EventDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventData'] = ResolversParentTypes['EventData']> = {
  __resolveType: TypeResolveFn<'WaterEventData', ParentType, ContextType>;
};

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['EventType'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['EventData']>, ParentType, ContextType>;
  targets?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventTarget']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BaseDbModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseDbModel'] = ResolversParentTypes['BaseDbModel']> = {
  __resolveType: TypeResolveFn<'Environment' | 'WaterEventData' | 'Event' | 'LifeCycle' | 'LightSource' | 'Photo' | 'Plant' | 'Species', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
};

export type LifeCycleResolvers<ContextType = any, ParentType extends ResolversParentTypes['LifeCycle'] = ResolversParentTypes['LifeCycle']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  environment?: Resolver<Maybe<ResolversTypes['Environment']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LightSourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['LightSource'] = ResolversParentTypes['LightSource']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bulbType?: Resolver<Maybe<ResolversTypes['LightBulbType']>, ParentType, ContextType>;
  wattage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lumens?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['LightBulbColor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PhotoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Photo'] = ResolversParentTypes['Photo']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addPhoto?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType, RequireFields<MutationAddPhotoArgs, never>>;
  addPlant?: Resolver<Maybe<ResolversTypes['Plant']>, ParentType, ContextType, RequireFields<MutationAddPlantArgs, never>>;
  addSpecies?: Resolver<Maybe<ResolversTypes['Species']>, ParentType, ContextType, RequireFields<MutationAddSpeciesArgs, 'name'>>;
};

export type PlantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Plant'] = ResolversParentTypes['Plant']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  species?: Resolver<Maybe<ResolversTypes['Species']>, ParentType, ContextType>;
  photos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Photo']>>>, ParentType, ContextType>;
  coverPhoto?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType>;
  currentLifeCycle?: Resolver<Maybe<ResolversTypes['LifeCycle']>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpeciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Species'] = ResolversParentTypes['Species']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coverPhoto?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType>;
  sproutToHarvestInHours?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lifeCycles?: Resolver<Maybe<Array<Maybe<ResolversTypes['LifeCycle']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Timestamp?: GraphQLScalarType;
  Environment?: EnvironmentResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  WaterEventData?: WaterEventDataResolvers<ContextType>;
  EventTarget?: EventTargetResolvers<ContextType>;
  EventData?: EventDataResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  BaseDbModel?: BaseDbModelResolvers<ContextType>;
  LifeCycle?: LifeCycleResolvers<ContextType>;
  LightSource?: LightSourceResolvers<ContextType>;
  Photo?: PhotoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Plant?: PlantResolvers<ContextType>;
  Species?: SpeciesResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
