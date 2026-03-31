const pageRoutes = Object.freeze({
    home: () => '/',
    sectors: () => '/sectors',
    sector: (sectorSlug) => `/sector/${sectorSlug}`,
    route: (sectorSlug, routeSlug) => `/sector/${sectorSlug}/route/${routeSlug}`,
})

export function getPageRoute(name, ...args) {
    return pageRoutes[name] ? pageRoutes[name](...args) : '/'
}