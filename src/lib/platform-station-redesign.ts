export type Station = {
  name: string;
  code: string;
  note?: string;
};

export const STATIONS: {
  tfs_nr: Station[];
  connect: Station[];
  waterline: Station[];
  airlink: Station[];
  express: Station[];
  metro: Station[];
} = {
  tfs_nr: [
    { name: "Stepford Victoria", code: "SVC" },
    { name: "Stepford Central", code: "SCN" },
    { name: "Stepford East", code: "SCE" },
    { name: "St. Helens Bridge", code: "SHB" },
    { name: "Benton", code: "BEN" },
    { name: "Morganstown", code: "MGT" },
    { name: "Leighton City", code: "LTC" },
    { name: "Llyn-by-the-Sea", code: "LYN" },
  ],
  connect: [
    { name: "Woodhead Lane", code: "WHL" },
    { name: "Houghton Rake", code: "HTR" },
    { name: "Whitefield", code: "WHF" },
    { name: "Port Benton", code: "PBN" },
    { name: "Benton Bridge", code: "BNB" },
    { name: "Hampton Hargate", code: "HHG" },
    { name: "Upper Staploe", code: "USL" },
    { name: "Water Newton", code: "WTN" },
    { name: "Rocket Parade", code: "RCP" },
    { name: "Leighton West", code: "LTW" },
    { name: "Edgemead", code: "EDG" },
    { name: "Aslockby", code: "ALB" },
    { name: "Carnalea Bridge", code: "CLB" },
    { name: "Rayleigh Bay", code: "RLB" },
    { name: "Faymere", code: "FAY" },
    { name: "Westercoast", code: "WST" },
    { name: "Millcastle Racecourse", code: "MRC" },
    { name: "Millcastle", code: "MLC" },
    { name: "Starryloch", code: "STL" },
  ],
  waterline: [
    { name: "Newry Harbour", code: "NRH" },
    { name: "Newry", code: "NRY" },
    { name: "Eden Quay", code: "EDQ" },
    { name: "Faraday Road", code: "FRD" },
    { name: "West Benton", code: "WBN" },
    { name: "Cambridge Street Parkway", code: "CSP" },
    { name: "Ashlan Park", code: "APK" },
    { name: "Connolly", code: "_CON" }, // files/folders cant have the name 'CON' in windows
    { name: "Airport West", code: "SAW" },
    { name: "James Street", code: "JST" },
    { name: "Farleigh", code: "FAR" },
    { name: "Rosedale Village", code: "RDV" },
    { name: "Esterfield", code: "EFD" },
    { name: "Morganstown Docks", code: "MGD" },
    { name: "Whitney Green", code: "WNG" },
    { name: "Greenslade", code: "GNS" },
  ],
  airlink: [
    {
      name: "Elsemere Junction",
      code: "EMJ",
      note: "In partnership with Transport for Stepford",
    },
    { name: "Airport Parkway", code: "SAP" },
    { name: "Airport Central", code: "SAC" },
    { name: "Airport Teminal 1", code: "SAO" },
    { name: "Airport Teminal 2", code: "SAX" },
    { name: "Airport Teminal 3", code: "SAZ" },
  ],
  express: [
    { name: "Leighton Stepford Road", code: "LSR" },
    { name: "Westwyvern", code: "WYV" },
    { name: "Northshore", code: "NSE" },
  ],
  metro: [
    { name: "Willowfield", code: "WFD" },
    { name: "Hemdon Park", code: "HPK" },
    { name: "Beechley", code: "BCY" },
    { name: "Financial Quarter", code: "FNQ" },
    { name: "City Hospital", code: "CHP" },
    { name: "Four Ways", code: "FWY" },
    {
      name: "High Street",
      code: "SHS",
      note: "Also known as Stepford High Street",
    },
    { name: "Whitefield Lido", code: "WFL" },
    { name: "Stepford UFC", code: "UFC" },
    { name: "New Harrow", code: "NHW" },
    { name: "Elsemere Pond", code: "EMP" },
    { name: "Berrily", code: "BRY" },
    { name: "East Berrily", code: "EBR" },
    { name: "Beaulieu Park", code: "BPK" },
    { name: "Angel Pass", code: "AGP" },
    { name: "Coxly Newtown", code: "CXN" },
    { name: "Barton", code: "BAR" },
    { name: "Bodin", code: "BDN" },
    { name: "Coxly", code: "CLY" },
  ],
};
