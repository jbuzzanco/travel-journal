import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
  {
    'id' : 1,
    'name' : 'Presque Isle Park',
    'date' : new Date('10/06/2017'),
    'distance' : 6.3,
    'gpxData' : 'assets/gpx/1.gpx'
  },
  {
    'id' : 2,
    'name' : 'North Chagrin Reservation',
    'date' : new Date('10/06/2017'),
    'distance' : 1.8,
    'gpxData' : 'assets/gpx/2.gpx'
  },
  {
    'id' : 3,
    'name' : 'Valerie Falls Trail',
    'date' : new Date('10/05/2017'),
    'distance' : 1.7,
    'gpxData' : 'assets/gpx/2.gpx',
    'comments' : 'warm and sunny'
  },
  {
    'id' : 4,
    'name' : 'Valerie Falls Trail',
    'date' : new Date('10/05/2017'),
    'distance' : 7,
    'gpxData' : 'assets/gpx/4.gpx',
    'comments' : 'windy. Paved biking path'
  }
]
