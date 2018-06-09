export class Page {
    pageId: string;
    title: string;
}

export class Effect {
    effectId: string;
    title: string;
}

export class PageConfig {
    sync: false;
    inEffect: string = null;
    outEffect: string = null;
    inDuration = 800;
    outDuration = 400;
}

