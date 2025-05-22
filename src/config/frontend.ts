import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";
import { appInfo } from "./appInfo";

export function initSuperTokensUI() {
    (window as any).supertokensUIInit("supertokensui", {
        appInfo,
        recipeList: [(window as any).supertokensUIEmailPassword.init(), (window as any).supertokensUISession.init()],
    });
}

export function initSuperTokensWebJS() {
    SuperTokens.init({
        appInfo,
        recipeList: [Session.init()],
    });
}
