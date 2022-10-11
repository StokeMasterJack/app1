export type VF = () => void;

const defaultProps = {url: '', data: {}, title: ''};

export function spaRedir(props: { url: string, data?: any, title?: string }) {
    const p = {...defaultProps, ...props};
    window.history.pushState(p.data, p.title, p.url);
    window.dispatchEvent(new PopStateEvent('popstate'));
}

export function startReact(renderToDom: VF) {
    renderToDom();
    window.addEventListener('popstate', (event) => {
        renderToDom();
    });
}
