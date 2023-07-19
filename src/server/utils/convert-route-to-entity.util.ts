const mapping: Record<string, string> = {
  'artillery-calculations': 'artillery_calculation',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
