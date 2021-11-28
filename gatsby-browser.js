/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

//This is a message from the PWA caching busting
export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
        `This website has been updated. ` +
        `Please reload the page to display the latest version?`
    )
    if (answer === true) {
        window.location.reload()
    }
}
