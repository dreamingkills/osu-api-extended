"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flags = [
    {
        flag: "US",
        country: "United States"
    },
    {
        flag: "RU",
        country: "Russian Federation"
    },
    {
        flag: "DE",
        country: "Germany"
    },
    {
        flag: "PL",
        country: "Poland"
    },
    {
        flag: "FR",
        country: "France"
    },
    {
        flag: "JP",
        country: "Japan"
    },
    {
        flag: "CA",
        country: "Canada"
    },
    {
        flag: "BR",
        country: "Brazil"
    },
    {
        flag: "GB",
        country: "United Kingdom"
    },
    {
        flag: "TW",
        country: "Taiwan"
    },
    {
        flag: "KR",
        country: "South Korea"
    },
    {
        flag: "CN",
        country: "China"
    },
    {
        flag: "AU",
        country: "Australia"
    },
    {
        flag: "ID",
        country: "Indonesia"
    },
    {
        flag: "UA",
        country: "Ukraine"
    },
    {
        flag: "PH",
        country: "Philippines"
    },
    {
        flag: "CL",
        country: "Chile"
    },
    {
        flag: "FI",
        country: "Finland"
    },
    {
        flag: "AR",
        country: "Argentina"
    },
    {
        flag: "NL",
        country: "Netherlands"
    },
    {
        flag: "SE",
        country: "Sweden"
    },
    {
        flag: "SG",
        country: "Singapore"
    },
    {
        flag: "MX",
        country: "Mexico"
    },
    {
        flag: "MY",
        country: "Malaysia"
    },
    {
        flag: "ES",
        country: "Spain"
    },
    {
        flag: "IT",
        country: "Italy"
    },
    {
        flag: "HK",
        country: "Hong Kong"
    },
    {
        flag: "TH",
        country: "Thailand"
    },
    {
        flag: "VN",
        country: "Vietnam"
    },
    {
        flag: "NO",
        country: "Norway"
    },
    {
        flag: "CZ",
        country: "Czech Republic"
    },
    {
        flag: "TR",
        country: "Turkey"
    },
    {
        flag: "BY",
        country: "Belarus"
    },
    {
        flag: "AT",
        country: "Austria"
    },
    {
        flag: "BE",
        country: "Belgium"
    },
    {
        flag: "PT",
        country: "Portugal"
    },
    {
        flag: "RO",
        country: "Romania"
    },
    {
        flag: "HU",
        country: "Hungary"
    },
    {
        flag: "DK",
        country: "Denmark"
    },
    {
        flag: "LT",
        country: "Lithuania"
    },
    {
        flag: "KZ",
        country: "Kazakhstan"
    },
    {
        flag: "NZ",
        country: "New Zealand"
    },
    {
        flag: "PE",
        country: "Peru"
    },
    {
        flag: "CH",
        country: "Switzerland"
    },
    {
        flag: "CO",
        country: "Colombia"
    },
    {
        flag: "IL",
        country: "Israel"
    },
    {
        flag: "EE",
        country: "Estonia"
    },
    {
        flag: "BG",
        country: "Bulgaria"
    },
    {
        flag: "SK",
        country: "Slovakia"
    },
    {
        flag: "GR",
        country: "Greece"
    },
    {
        flag: "LV",
        country: "Latvia"
    },
    {
        flag: "VE",
        country: "Venezuela"
    },
    {
        flag: "RS",
        country: "Serbia"
    },
    {
        flag: "IE",
        country: "Ireland"
    },
    {
        flag: "HR",
        country: "Croatia"
    },
    {
        flag: "SA",
        country: "Saudi Arabia"
    },
    {
        flag: "UY",
        country: "Uruguay"
    },
    {
        flag: "ZA",
        country: "South Africa"
    },
    {
        flag: "AE",
        country: "United Arab Emirates"
    },
    {
        flag: "SI",
        country: "Slovenia"
    },
    {
        flag: "IN",
        country: "India"
    },
    {
        flag: "EC",
        country: "Ecuador"
    },
    {
        flag: "MA",
        country: "Morocco"
    },
    {
        flag: "CR",
        country: "Costa Rica"
    },
    {
        flag: "MD",
        country: "Moldova"
    },
    {
        flag: "DO",
        country: "Dominican Republic"
    },
    {
        flag: "BN",
        country: "Brunei"
    },
    {
        flag: "EG",
        country: "Egypt"
    },
    {
        flag: "RE",
        country: "Reunion"
    },
    {
        flag: "MO",
        country: "Macau"
    },
    {
        flag: "TN",
        country: "Tunisia"
    },
    {
        flag: "PA",
        country: "Panama"
    },
    {
        flag: "DZ",
        country: "Algeria"
    },
    {
        flag: "MN",
        country: "Mongolia"
    },
    {
        flag: "PY",
        country: "Paraguay"
    },
    {
        flag: "KW",
        country: "Kuwait"
    },
    {
        flag: "PR",
        country: "Puerto Rico"
    },
    {
        flag: "GE",
        country: "Georgia"
    },
    {
        flag: "BO",
        country: "Bolivia"
    },
    {
        flag: "SV",
        country: "El Salvador"
    },
    {
        flag: "QA",
        country: "Qatar"
    },
    {
        flag: "GT",
        country: "Guatemala"
    },
    {
        flag: "LU",
        country: "Luxembourg"
    },
    {
        flag: "UZ",
        country: "Uzbekistan"
    },
    {
        flag: "KG",
        country: "Kyrgyzstan"
    },
    {
        flag: "MK",
        country: "North Macedonia"
    },
    {
        flag: "KH",
        country: "Cambodia"
    },
    {
        flag: "BA",
        country: "Bosnia and Herzegovina"
    },
    {
        flag: "IS",
        country: "Iceland"
    },
    {
        flag: "JO",
        country: "Jordan"
    },
    {
        flag: "PK",
        country: "Pakistan"
    },
    {
        flag: "TT",
        country: "Trinidad and Tobago"
    },
    {
        flag: "CY",
        country: "Cyprus"
    },
    {
        flag: "HN",
        country: "Honduras"
    },
    {
        flag: "NI",
        country: "Nicaragua"
    },
    {
        flag: "BH",
        country: "Bahrain"
    },
    {
        flag: "MV",
        country: "Maldives"
    },
    {
        flag: "BD",
        country: "Bangladesh"
    },
    {
        flag: "PF",
        country: "French Polynesia"
    },
    {
        flag: "LB",
        country: "Lebanon"
    },
    {
        flag: "NP",
        country: "Nepal"
    },
    {
        flag: "IQ",
        country: "Iraq"
    },
    {
        flag: "GU",
        country: "Guam"
    },
    {
        flag: "AZ",
        country: "Azerbaijan"
    },
    {
        flag: "AL",
        country: "Albania"
    },
    {
        flag: "MT",
        country: "Malta"
    },
    {
        flag: "MM",
        country: "Myanmar"
    },
    {
        flag: "NC",
        country: "New Caledonia"
    },
    {
        flag: "OM",
        country: "Oman"
    },
    {
        flag: "IR",
        country: "Iran, Islamic Republic of"
    },
    {
        flag: "AM",
        country: "Armenia"
    },
    {
        flag: "GP",
        country: "Guadeloupe"
    },
    {
        flag: "MQ",
        country: "Martinique"
    },
    {
        flag: "JM",
        country: "Jamaica"
    },
    {
        flag: "LA",
        country: "Lao People&#039;s Democratic Republic"
    },
    {
        flag: "LK",
        country: "Sri Lanka"
    },
    {
        flag: "PS",
        country: "Palestinian Territory Occupied"
    },
    {
        flag: "MU",
        country: "Mauritius"
    },
    {
        flag: "SY",
        country: "Syrian Arab Republic"
    },
    {
        flag: "ME",
        country: "Montenegro"
    },
    {
        flag: "FO",
        country: "Faroe Islands"
    },
    {
        flag: "JE",
        country: "Jersey"
    },
    {
        flag: "GF",
        country: "French Guiana"
    },
    {
        flag: "MP",
        country: "Northern Mariana Islands"
    },
    {
        flag: "IM",
        country: "Isle of Man"
    },
    {
        flag: "SR",
        country: "Suriname"
    },
    {
        flag: "BZ",
        country: "Belize"
    },
    {
        flag: "BB",
        country: "Barbados"
    },
    {
        flag: "AW",
        country: "Aruba"
    },
    {
        flag: "LY",
        country: "Libya"
    },
    {
        flag: "AX",
        country: "Aland Islands"
    },
    {
        flag: "GG",
        country: "Guernsey"
    },
    {
        flag: "MG",
        country: "Madagascar"
    },
    {
        flag: "SD",
        country: "Sudan"
    },
    {
        flag: "LI",
        country: "Liechtenstein"
    },
    {
        flag: "BS",
        country: "Bahamas"
    },
    {
        flag: "KE",
        country: "Kenya"
    },
    {
        flag: "GL",
        country: "Greenland"
    },
    {
        flag: "BM",
        country: "Bermuda"
    },
    {
        flag: "EU",
        country: "Europe"
    },
    {
        flag: "CI",
        country: "Cote D&#039;Ivoire"
    },
    {
        flag: "GY",
        country: "Guyana"
    },
    {
        flag: "GI",
        country: "Gibraltar"
    },
    {
        flag: "VI",
        country: "Virgin Islands, U.S."
    },
    {
        flag: "AD",
        country: "Andorra"
    },
    {
        flag: "LC",
        country: "Saint Lucia"
    },
    {
        flag: "TJ",
        country: "Tajikistan"
    },
    {
        flag: "AG",
        country: "Antigua and Barbuda"
    },
    {
        flag: "SN",
        country: "Senegal"
    },
    {
        flag: "PM",
        country: "Saint Pierre and Miquelon"
    },
    {
        flag: "CK",
        country: "Cook Islands"
    },
    {
        flag: "AQ",
        country: "Antarctica"
    },
    {
        flag: "CF",
        country: "Central African Republic"
    },
    {
        flag: "LR",
        country: "Liberia"
    },
    {
        flag: "ER",
        country: "Eritrea"
    }
];
exports.default = flags;
//# sourceMappingURL=flags.js.map