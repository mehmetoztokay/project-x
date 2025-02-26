import { getCurrentSiteInfo } from "@/i18n/routing";

const API_EU_GATEWAY_BASE_URL = "https://api-test-gateway.trive.com/api/gateway";
const API_INT_GATEWAY_BASE_URL = "https://api-test-int-gateway.trive.com/api/gateway";
const API_GATEWAY_INVEST_BASE_URL = "https://api-test-gateway.triveinvest.co.id/api/gateway";

const API_VERSION = "1";

const getBaseURL = () => {
  const currentSite = getCurrentSiteInfo();

  switch (currentSite?.region) {
    case "id":
      return API_GATEWAY_INVEST_BASE_URL;
    case "int":
      return API_INT_GATEWAY_BASE_URL;
    case "eu":
      return API_EU_GATEWAY_BASE_URL;
    default:
      return API_EU_GATEWAY_BASE_URL;
  }
};

export const apiServicesEndpoints = {
  registration: {
    singleRegister: `/registration/v${API_VERSION}/Registration/singleregister`,
    registerStep1: `/registration/v${API_VERSION}/LandingPage/registerstep1`,
    registerStep2: `/registration/v${API_VERSION}/LandingPage/registerstep2`,
    clientCheck: `/registration/v${API_VERSION}/LandingPage/clientcheck`,
  },
  marketing: {
    createMarketingId: `/registration/v${API_VERSION}/Marketing/create-marketingId`,
  },
};

export const getApiServiceEndpoint = (endpoint: string) => `${getBaseURL()}${endpoint}`;

// Usage example:
// getEndpoint(apiServices.landingPage.singleRegisterApi, { region: "eu" });
