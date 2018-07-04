import { BlockBasedList } from 'html-post-constructor';

export default class Templates extends BlockBasedList {
    getInitialState() {
        return {
            root: true,
            newEntity: {
                title: '',
                codes: ''
            }
        }
    }

    convertToModel(blockModel, originalTemplate) {
        return {
            _id: originalTemplate._id,
            title: blockModel.titles[0],
            code: blockModel.codes[0]
        }
    }

    convertToBlockModel(template) {
        return {
            titles: [template.title],
            codes: [template.code],
            _id: template._id
        }
    }
}

