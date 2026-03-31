const pageRoutes = Object.freeze({
    home: () => '/',
    sectors: () => '/sectors',
    sector: (sectorSlug) => `/sector/${sectorSlug}`,
    route: (routeSlug) => `/route/${routeSlug}`,
    videos: () => '/videos',
    video: (videoId) => `/video/${videoId}`
})

export function getPageRoute(name, ...args) {
    return pageRoutes[name] ? pageRoutes[name](...args) : '/'
}