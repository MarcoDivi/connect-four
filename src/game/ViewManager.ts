/**
 * Manage the visibility of views.
 */
export class ViewManager {

    /**
     * A record of views where the key is the view's ID and the value is the HTMLElement.
     */
    private views: Record<string, HTMLElement>;

    /**
     * Creates an instance of ViewManager.
     * @param viewElements - A view or an array of views to manage.
     */
    constructor(viewElements?: HTMLElement[] | HTMLElement) {
        this.views = {};

        if (viewElements) {
            this.addViews(Array.isArray(viewElements) ? viewElements : [viewElements]);
        }
    }

    /**
     * Adds a new view to the manager.
     * @param view - The view to register.
     */
    public addView(view: HTMLElement): void {
        if (view && view.id) {
            view.classList.add("view");
            this.views[view.id] = view;
        } else {
            console.warn("Cannot add view: missing or invalid ID.");
        }
    }

    /**
     * Adds a new array of views to the manager.
     * @param views - The array of views to register.
     */
    public addViews(views: HTMLElement[]): void {
        for (const view of views) {
            this.addView(view);
        }
    }

    /**
     * Shows only the view with the given ID and hides all others.
     * @param viewId - The ID of the view to show.
     */
    public showOnly(viewId: string): void {
        for (const id in this.views) {
            id === viewId ? this.show(id) : this.hide(id);
        }
    }

    /**
     * Show the specified view.
     * @param viewId - The Id of the view to show.
     */
    public show(viewId: string): void {
        const view = this.views[viewId];
        if (view) {
            view.classList.add("show");
        }
    }

    /**
     * Hide the specified view.
     * @param viewId - The Id of the view to hide.
     */
    public hide(viewId: string): void {
        const view = this.views[viewId];
        if (view) {
            view.classList.remove("show");
        }
    }
}
