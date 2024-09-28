export default function Link({ className, href, children }) {

    function onClick(event) {
        // Prevent full page reload
        event.preventDefault();
        // Update URL
        window.history.pushState({}, '', href);
        // Communicate to Routes that URL has changed
        window.dispatchEvent(new PopStateEvent('popstate'));
    }

    return (
        <a href={href} className={className} onClick={onClick}>
            {children}
        </a>
    )
}