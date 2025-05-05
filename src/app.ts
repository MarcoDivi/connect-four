import { ViewManager } from "./game/ViewManager.js";

const INITIAL_VIEW = "initial-view";

const viewManager = new ViewManager();

// When DOM load, get all views and set visible only initial view
window.addEventListener("DOMContentLoaded", () => {
  const views = document.querySelectorAll<HTMLElement>('[id$="-view"]');
  const viewsArray: HTMLElement[] = Array.from(views);

  viewManager.addViews(viewsArray);
  viewManager.showOnly(INITIAL_VIEW);
});
