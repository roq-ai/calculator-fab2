interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Operator', 'Analyst'],
  tenantName: 'Organization',
  applicationName: 'calculator',
  addOns: ['file'],
};
