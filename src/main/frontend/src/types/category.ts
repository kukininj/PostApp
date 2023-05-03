export class Category {
    title: string;
    name: string;
    url: URL;
    constructor(title: string, categoryName: string, url: URL) {
        this.title = title;
        this.name = categoryName;
        this.url = url;
    }
};
