/**
 * Fetch Mojang's server status
 * @returns Returns each service with status color
 * - Green: No problem
 * - Yellow: Some issues
 * - Red: Probably not working properly
 * @deprecated The API do not work anymore. Do not use this
 */
export function getMojangStatus(): Error {
    return new Error('Broken API');
}
