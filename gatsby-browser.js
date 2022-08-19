/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

//This is a message from the PWA caching busting
export const onServiceWorkerUpdateReady = () => {
    window.location.reload()
}
