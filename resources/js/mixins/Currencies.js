export default {
  data() {
    return {
      currencies: [
        { value: "AFN", text: "AFN:  Afghan Afghani" },
        { value: "ALL", text: "ALL:  Albanian Lek" },
        { value: "AMD", text: "AMD:  Armenian Dram" },
        { value: "ANG", text: "ANG:  Netherlands Antillean Guilder" },
        { value: "AOA", text: "AOA:  Angolan Kwanza" },
        { value: "ARS", text: "ARS:  Argentine Peso" },
        { value: "AUD", text: "AUD:  Australian Dollar" },
        { value: "AWG", text: "AWG:  Aruban Florin" },
        { value: "AZN", text: "AZN:  Azerbaijani Manat" },
        { value: "BAM", text: "BAM:  Bosnia-Herzegovina Convertible Mark" },
        { value: "BBD", text: "BBD:  Barbadian Dollar" },
        { value: "BDT", text: "BDT:  Bangladeshi Taka" },
        { value: "BGN", text: "BGN:  Bulgarian Lev" },
        { value: "BHD", text: "BHD:  Bahraini Dinar" },
        { value: "BIF", text: "BIF:  Burundian Franc" },
        { value: "BMD", text: "BMD:  Bermudan Dollar" },
        { value: "BND", text: "BND:  Brunei Dollar" },
        { value: "BOB", text: "BOB:  Bolivian Boliviano" },
        { value: "BRL", text: "BRL:  Brazilian Real" },
        { value: "BSD", text: "BSD:  Bahamian Dollar" },
        { value: "BTC", text: "BTC:  Bitcoin" },
        { value: "BTN", text: "BTN:  Bhutanese Ngultrum" },
        { value: "BWP", text: "BWP:  Botswanan Pula" },
        { value: "BYN", text: "BYN:  Belarusian Ruble" },
        { value: "BZD", text: "BZD:  Belize Dollar" },
        { value: "CAD", text: "CAD:  Canadian Dollar" },
        { value: "CDF", text: "CDF:  Congolese Franc" },
        { value: "CHF", text: "CHF:  Swiss Franc" },
        { value: "CLF", text: "CLF:  Chilean Unit of Account (UF)" },
        { value: "CLP", text: "CLP:  Chilean Peso" },
        { value: "CNH", text: "CNH:  Chinese Yuan (Offshore)" },
        { value: "CNY", text: "CNY:  Chinese Yuan" },
        { value: "COP", text: "COP:  Colombian Peso" },
        { value: "CRC", text: "CRC:  Costa Rican Colón" },
        { value: "CUC", text: "CUC:  Cuban Convertible Peso" },
        { value: "CUP", text: "CUP:  Cuban Peso" },
        { value: "CVE", text: "CVE:  Cape Verdean Escudo" },
        { value: "CZK", text: "CZK:  Czech Republic Koruna" },
        { value: "DJF", text: "DJF:  Djiboutian Franc" },
        { value: "DKK", text: "DKK:  Danish Krone" },
        { value: "DOP", text: "DOP:  Dominican Peso" },
        { value: "DZD", text: "DZD:  Algerian Dinar" },
        { value: "EGP", text: "EGP:  Egyptian Pound" },
        { value: "ERN", text: "ERN:  Eritrean Nakfa" },
        { value: "ETB", text: "ETB:  Ethiopian Birr" },
        { value: "EUR", text: "EUR:  Euro" },
        { value: "FJD", text: "FJD:  Fijian Dollar" },
        { value: "FKP", text: "FKP:  Falkland Islands Pound" },
        { value: "GBP", text: "GBP:  British Pound Sterling" },
        { value: "GEL", text: "GEL:  Georgian Lari" },
        { value: "GGP", text: "GGP:  Guernsey Pound" },
        { value: "GHS", text: "GHS:  Ghanaian Cedi" },
        { value: "GIP", text: "GIP:  Gibraltar Pound" },
        { value: "GMD", text: "GMD:  Gambian Dalasi" },
        { value: "GNF", text: "GNF:  Guinean Franc" },
        { value: "GTQ", text: "GTQ:  Guatemalan Quetzal" },
        { value: "GYD", text: "GYD:  Guyanaese Dollar" },
        { value: "HKD", text: "HKD:  Hong Kong Dollar" },
        { value: "HNL", text: "HNL:  Honduran Lempira" },
        { value: "HRK", text: "HRK:  Croatian Kuna" },
        { value: "HTG", text: "HTG:  Haitian Gourde" },
        { value: "HUF", text: "HUF:  Hungarian Forint" },
        { value: "IDR", text: "IDR:  Indonesian Rupiah" },
        { value: "ILS", text: "ILS:  Israeli New Sheqel" },
        { value: "IMP", text: "IMP:  Manx pound" },
        { value: "INR", text: "INR:  Indian Rupee" },
        { value: "IQD", text: "IQD:  Iraqi Dinar" },
        { value: "IRR", text: "IRR:  Iranian Rial" },
        { value: "ISK", text: "ISK:  Icelandic Króna" },
        { value: "JEP", text: "JEP:  Jersey Pound" },
        { value: "JMD", text: "JMD:  Jamaican Dollar" },
        { value: "JOD", text: "JOD:  Jordanian Dinar" },
        { value: "JPY", text: "JPY:  Japanese Yen" },
        { value: "KES", text: "KES:  Kenyan Shilling" },
        { value: "KGS", text: "KGS:  Kyrgystani Som" },
        { value: "KHR", text: "KHR:  Cambodian Riel" },
        { value: "KMF", text: "KMF:  Comorian Franc" },
        { value: "KPW", text: "KPW:  North Korean Won" },
        { value: "KRW", text: "KRW:  South Korean Won" },
        { value: "KWD", text: "KWD:  Kuwaiti Dinar" },
        { value: "KYD", text: "KYD:  Cayman Islands Dollar" },
        { value: "KZT", text: "KZT:  Kazakhstani Tenge" },
        { value: "LAK", text: "LAK:  Laotian Kip" },
        { value: "LBP", text: "LBP:  Lebanese Pound" },
        { value: "LKR", text: "LKR:  Sri Lankan Rupee" },
        { value: "LRD", text: "LRD:  Liberian Dollar" },
        { value: "LSL", text: "LSL:  Lesotho Loti" },
        { value: "LYD", text: "LYD:  Libyan Dinar" },
        { value: "MAD", text: "MAD:  Moroccan Dirham" },
        { value: "MDL", text: "MDL:  Moldovan Leu" },
        { value: "MGA", text: "MGA:  Malagasy Ariary" },
        { value: "MKD", text: "MKD:  Macedonian Denar" },
        { value: "MMK", text: "MMK:  Myanma Kyat" },
        { value: "MNT", text: "MNT:  Mongolian Tugrik" },
        { value: "MOP", text: "MOP:  Macanese Pataca" },
        { value: "MRO", text: "MRO:  Mauritanian Ouguiya (pre-2018)" },
        { value: "MRU", text: "MRU:  Mauritanian Ouguiya" },
        { value: "MUR", text: "MUR:  Mauritian Rupee" },
        { value: "MVR", text: "MVR:  Maldivian Rufiyaa" },
        { value: "MWK", text: "MWK:  Malawian Kwacha" },
        { value: "MXN", text: "MXN:  Mexican Peso" },
        { value: "MYR", text: "MYR:  Malaysian Ringgit" },
        { value: "MZN", text: "MZN:  Mozambican Metical" },
        { value: "NAD", text: "NAD:  Namibian Dollar" },
        { value: "NGN", text: "NGN:  Nigerian Naira" },
        { value: "NIO", text: "NIO:  Nicaraguan Córdoba" },
        { value: "NOK", text: "NOK:  Norwegian Krone" },
        { value: "NPR", text: "NPR:  Nepalese Rupee" },
        { value: "NZD", text: "NZD:  New Zealand Dollar" },
        { value: "OMR", text: "OMR:  Omani Rial" },
        { value: "PAB", text: "PAB:  Panamanian Balboa" },
        { value: "PEN", text: "PEN:  Peruvian Nuevo Sol" },
        { value: "PGK", text: "PGK:  Papua New Guinean Kina" },
        { value: "PHP", text: "PHP:  Philippine Peso" },
        { value: "PKR", text: "PKR:  Pakistani Rupee" },
        { value: "PLN", text: "PLN:  Polish Zloty" },
        { value: "PYG", text: "PYG:  Paraguayan Guarani" },
        { value: "QAR", text: "QAR:  Qatari Rial" },
        { value: "RON", text: "RON:  Romanian Leu" },
        { value: "RSD", text: "RSD:  Serbian Dinar" },
        { value: "RUB", text: "RUB:  Russian Ruble" },
        { value: "RWF", text: "RWF:  Rwandan Franc" },
        { value: "SAR", text: "SAR:  Saudi Riyal" },
        { value: "SBD", text: "SBD:  Solomon Islands Dollar" },
        { value: "SCR", text: "SCR:  Seychellois Rupee" },
        { value: "SDG", text: "SDG:  Sudanese Pound" },
        { value: "SEK", text: "SEK:  Swedish Krona" },
        { value: "SGD", text: "SGD:  Singapore Dollar" },
        { value: "SHP", text: "SHP:  Saint Helena Pound" },
        { value: "SLL", text: "SLL:  Sierra Leonean Leone" },
        { value: "SOS", text: "SOS:  Somali Shilling" },
        { value: "SRD", text: "SRD:  Surinamese Dollar" },
        { value: "SSP", text: "SSP:  South Sudanese Pound" },
        { value: "STD", text: "STD:  São Tomé and Príncipe Dobra (pre-20,18)" },
        { value: "STN", text: "STN:  São Tomé and Príncipe Dobra" },
        { value: "SVC", text: "SVC:  Salvadoran Colón" },
        { value: "SYP", text: "SYP:  Syrian Pound" },
        { value: "SZL", text: "SZL:  Swazi Lilangeni" },
        { value: "THB", text: "THB:  Thai Baht" },
        { value: "TJS", text: "TJS:  Tajikistani Somoni" },
        { value: "TMT", text: "TMT:  Turkmenistani Manat" },
        { value: "TND", text: "TND:  Tunisian Dinar" },
        { value: "TOP", text: "TOP:  Tongan Pa'anga" },
        { value: "TRY", text: "TRY:  Turkish Lira" },
        { value: "TTD", text: "TTD:  Trinidad and Tobago Dollar" },
        { value: "TWD", text: "TWD:  New Taiwan Dollar" },
        { value: "TZS", text: "TZS:  Tanzanian Shilling" },
        { value: "UAH", text: "UAH:  Ukrainian Hryvnia" },
        { value: "UGX", text: "UGX:  Ugandan Shilling" },
        { value: "USD", text: "USD:  United States Dollar" },
        { value: "UYU", text: "UYU:  Uruguayan Peso" },
        { value: "UZS", text: "UZS:  Uzbekistan Som" },
        { value: "VEF", text: "VEF:  Venezuelan Bolívar Fuerte (Old)" },
        { value: "VES", text: "VES:  Venezuelan Bolívar Soberano" },
        { value: "VND", text: "VND:  Vietnamese Dong" },
        { value: "VUV", text: "VUV:  Vanuatu Vatu" },
        { value: "WST", text: "WST:  Samoan Tala" },
        { value: "XAF", text: "XAF:  CFA Franc BEAC" },
        { value: "XAG", text: "XAG:  Silver Ounce" },
        { value: "XAU", text: "XAU:  Gold Ounce" },
        { value: "XCD", text: "XCD:  East Caribbean Dollar" },
        { value: "XDR", text: "XDR:  Special Drawing Rights" },
        { value: "XOF", text: "XOF:  CFA Franc BCEAO" },
        { value: "XPD", text: "XPD:  Palladium Ounce" },
        { value: "XPF", text: "XPF:  CFP Franc" },
        { value: "XPT", text: "XPT:  Platinum Ounce" },
        { value: "YER", text: "YER:  Yemeni Rial" },
        { value: "ZAR", text: "ZAR:  South African Rand" },
        { value: "ZMW", text: "ZMW:  Zambian Kwacha" },
        { value: "ZWL", text: "ZWL:  Zimbabwean Dollar" }
      ]
    }
  }
}