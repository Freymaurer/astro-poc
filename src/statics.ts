
const BASE_PATH = "/arc-website"

export enum URLS {
  INTERNAL_HOME = BASE_PATH,
  INTERNAL_TOOLS = BASE_PATH + "/details/tools-and-services",
  INTERNAL_PARTNERS = BASE_PATH + "/partners",

  INTERNAL_COM_DATA_MANAGEMENT = BASE_PATH + "/details/data-management-principle",
  INTERNAL_COM_TOOLS = BASE_PATH + "/details/tools-and-services",
  INTERNAL_COM_DOCUMENTATION = BASE_PATH + "/details/documentation-principle",
  INTERNAL_COM_ORGANIZATION = BASE_PATH + "/details/organization-principle",
  INTERNAL_COM_FAIRNESS = BASE_PATH + "/details/fairness-and-rdm",

  INTERNAL_DEV_DATA_MODEL = BASE_PATH + "/details/arc-data-model",
  INTERNAL_DEV_REPRESENTATION = BASE_PATH + "/details/arc-representation",
  INTERNAL_DEV_FDO = BASE_PATH + "/details/arc-fdo",
  INTERNAL_DEV_TOOLSTACK= BASE_PATH + "/details/developer-toolstack",

  GITHUB_REPO = "https://github.com/nfdi4plants/arc-website"
}

export function getUrlFromEnum(key: string): string | null {
  // Check if the input key is a valid key in the URLS enum
  if (key in URLS) {
    // Return the associated value from the enum
    return URLS[key as keyof typeof URLS];
  } else {
    // Return undefined if the key is not found
    return null;
  }
}