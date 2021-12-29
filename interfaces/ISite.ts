export interface ISiteBasicData {
  _id?: string;
  name: string;
  description: string;
}

export interface ISite extends ISiteBasicData {
  longitude: string;
  latitude: string;
}

export interface ISiteSmartData extends ISiteBasicData {
  coordinates: string;
}
