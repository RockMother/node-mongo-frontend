export default class TemplatesMockApiService {
    getTemplates() {
        return Promise.resolve({
            data: [
                { 
                    _id: 1,
                    title: 'Image left. Text right', 
                    template: '<div class = "row"><div class="half template-image">{{ image }}</div><div class="half template-text">{{ text }}</div></div>' 
                },
                { 
                    _id: 2,
                    title: 'Image right. Text left', 
                    template: '<div class = "row"><div class="half template-text">{{ text }}</div><div class="half template-image">{{ image }}</div></div>' 
                },              
                { 
                    _id: 3,
                    title: 'Image above Text', 
                    template: '<div class = "column"><div class="half template-image">{{ image }}</div><div class="half template-text">{{ text }}</div></div>' 
                }                  
            ]
        });
    }

    saveTemplate(template) {
        return Promise.resolve({ data: template});
    }
}