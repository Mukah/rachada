const pageRoutes = Object.freeze({
    home: () => '/',
    sectors: () => '/sectors',
    sector: (sectorSlug) => `/sector/${sectorSlug}`,
    route: (routeSlug) => `/route/${routeSlug}`,
    videos: () => '/videos',
    youtubeVideo: (videoId) => `/video/youtube/${videoId}`
})

export function getPageRoute(name, ...args) {
    return pageRoutes[name] ? pageRoutes[name](...args) : '/'
}