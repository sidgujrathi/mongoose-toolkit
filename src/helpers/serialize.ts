
/**
 * Helper to serialize data
 */
export const serializer = function (ret: any) {
  return JSON.parse(JSON.stringify(ret));
};
