class TemplateParserService {
    constructor() {
        this.cachedTemplates = [];
    }
    parse(template) {
        if (this.cachedTemplates[template]) {
            return this.cachedTemplates[template];
        } else {
            const parser = new DOMParser();
            return this.cachedTemplates[template] = parser.parseFromString(template, "text/html");
        }
    }

    getImageBlocksCount(template) {
        const doc = this.parse(template);
        return doc.getElementsByClassName('template-image').length;
    }
}

export default new TemplateParserService();