export default class TemplatesMockApiService {
    getTemplates() {
        return Promise.resolve({
            data: [
                { 
                    _id: 1,
                    title: 'Image left. Text right', 
                    template: `<div class = "row">
                            <div class="half template-image"></div>
                            <div class="half template-title"></div>
                        </div>`
                },
                { 
                    _id: 2,
                    title: 'Image right. Text left', 
                    template: `<div class = "row">
                            <div class="half template-title"></div>
                            <div class="half template-image"></div>
                        </div>`
                },              
                { 
                    _id: 3,
                    title: 'Image above Text', 
                    template: `<div class = "column">
                            <div class="half template-image"></div>
                            <div class="half template-title"></div>
                        </div>`
                }                  
            ]
        });
    }

    saveTemplate(template) {
        return Promise.resolve({ data: template});
    }
}