/**
 * Patterns of the announcements, with their variable parts (date, hour, timezone) replaced by markers
 */
export type MessagePatternType =
  // ServerPcEuSlug - Up
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The European PC/Mac megaserver is currently available.'

  // ServerPcEuSlug - ServerPcNaSlug - Down
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.'

  // ServerPcEuSlug - ServerPcNaSlug - Issues
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) We are currently investigating issues some players are having on the North American and European PC/Mac megaservers.'

  // ServerPcEuSlug - ServerPcNaSlug - Up
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.'
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The issues on the North American and European PC/Mac megaservers have been resolved at this time.'

  // ServerPcEuSlug - ServerPsEuSlug - ServerXboxEuSlug - Up
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The European megaservers are currently available.'

  // ServerPcEuSlug - ServerPcNaSlug - ServerPsEuSlug - ServerPsNaSlug - ServerXboxEuSlug - ServerXboxNaSlug - Down
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance.'

  // ServerPcEuSlug - ServerPcNaSlug - ServerPsEuSlug - ServerPsNaSlug - ServerXboxEuSlug - ServerXboxNaSlug - Up
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The North American megaservers are currently available. The European megaservers are currently available.'

  // ServerPcEuSlug - ServerPcNaSlug - ServerPsEuSlug - ServerPsNaSlug - ServerXboxEuSlug - ServerXboxNaSlug - ServiceStoreEsoSlug - ServiceSystemAccountSlug - Down
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.'

  // ServerPcEuSlug - ServerPcNaSlug - ServerPsEuSlug - ServerPsNaSlug - ServerXboxEuSlug - ServerXboxNaSlug - ServiceStoreEsoSlug - ServiceSystemAccountSlug - Up
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The North American megaservers are currently available. The European megaservers are currently available. The ESO store and account system are currently available.'

  // ServerPcEuSlug - ServerPcNaSlug - ServerPcPtsSlug - ServerPsEuSlug - ServerPsNaSlug - ServerXboxEuSlug - ServerXboxNaSlug - ServiceStoreEsoSlug - ServiceSystemAccountSlug - Down
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The PTS is currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.'

  // ServerPcEuSlug - ServerPcNaSlug - ServerPcPtsSlug - ServerPsEuSlug - ServerPsNaSlug - ServerXboxEuSlug - ServerXboxNaSlug - ServiceStoreEsoSlug - ServiceSystemAccountSlug - Up
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.'

  // ServerPcNaSlug - Issues
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) We are currently investigating connection issues some players are having on the North American PC/Mac megaserver.'

  // ServerPcNaSlug - Up
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The North American PC/Mac megaserver is currently available.'
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The connection issues for the North American PC/Mac megaserver have been resolved at this time.'

  // ServerPcNaSlug - ServerPsNaSlug - ServerXboxNaSlug - ServiceStoreEsoSlug - ServiceSystemAccountSlug - Up
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The North American megaservers are currently available. The ESO store and account system are currently available.'

  // ServerPcPtsSlug - Down
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The PTS is currently unavailable while we perform maintenance.'
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone])) The PTS is currently unavailable while we perform maintenance.'

  // ServerPcPtsSlug - Up
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The PTS is currently available.'
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone])) The PTS is currently available.'

  // ServerPsEuSlug - ServerPsNaSlug - Down
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.'

  // ServerPsEuSlug - ServerPsNaSlug - Issues
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([year].[month number].[day number] - [hour]:[minute] [timezone]) The PlayStation™ Network is currently experiencing a service interruption.'

  // ServerPsEuSlug - ServerPsNaSlug - Up
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.'
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The PlayStation™ Network service interruption has been resolved.'

  // ServerPsEuSlug - ServerPsNaSlug - ServerXboxEuSlug - ServerXboxNaSlug - Down
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.'
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([year].[month number].[day number] - [hour]:[minute] [timezone]) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.'

  // ServerPsEuSlug - ServerPsNaSlug - ServerXboxEuSlug - ServerXboxNaSlug - Up
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.'

  // ServerPsNaSlug - Down
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The North American PlayStation® megaserver is currently unavailable while we perform maintenance.'

  // ServerPsNaSlug - Issues
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) We are currently investigating issues some players are having logging into the North American PlayStation® megaserver.'

  // ServerPsNaSlug - Up
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The North American PlayStation® megaserver is currently available.'
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The issues related to logging in to the North American PlayStation® megaserver have been resolved at this time.'

  // ServerXboxEuSlug - Down
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The European Xbox megaserver is currently unavailable while we perform maintenance.'
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([year].[month number].[day number] - [hour]:[minute] [timezone]) The European Xbox megaserver is currently unavailable while we perform maintenance.'

  // ServerXboxEuSlug - Up
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The European Xbox megaserver is currently available.'

  // ServerXboxEuSlug - ServerXboxNaSlug - Issues
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) We are currently investigating issues some players are having logging into the North American and European Xbox megaservers.'
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) Xbox Live™ is currently experiencing a service interruption.'
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([month number].[day number].[short year] - [hour]:[minute] [timezone]) Xbox Live™ is currently experiencing a service interruption.'

  // ServerXboxEuSlug - ServerXboxNaSlug - Up
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available.'
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The Xbox Live™ service interruption has been resolved.'
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time.'
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([year].[month number].[day number] - [hour]:[minute] [timezone]) The Xbox Live™ service interruption has been resolved.'

  // ServiceStoreEsoSlug - ServiceSystemAccountSlug - Down
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The ESO store and account system are currently unavailable while we perform maintenance.'

  // ServiceStoreEsoSlug - ServiceSystemAccountSlug - Up
  | '[year].[month number].[day number] - [hour]:[minute] [timezone] ([hour]:[minute] [timezone]) The ESO store and account system are currently available.';
