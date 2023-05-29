export class Category {
    name: string;
    url: URL;
    constructor(categoryName: string, url: URL) {
        this.name = categoryName;
        this.url = url;
    }
};
