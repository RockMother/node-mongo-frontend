import { getElementDescriptors } from "./blockEementsFactory";

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

    getElementsCount(template, element) {
        const doc = this.parse(template);
        return doc.getElementsByClassName(element.selector).length;
    }

    getProperties(template) {
        const doc = this.parse(template);
        return getElementDescriptors()
            .map(elementDescriptor => {
                elementDescriptor.count = doc.getElementsByClassName(elementDescriptor.selector);
                return elementDescriptor;
            })
            .filter(elementDescriptor => elementDescriptor.count > 0);
            
    }
}

export default new TemplateParserService();