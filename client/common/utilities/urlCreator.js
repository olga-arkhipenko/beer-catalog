import UrlAssembler from 'url-assembler';

export default {
    createUrl(prefix, template, params, query) {
        return new UrlAssembler()
            .prefix(prefix || '')
            .template(template)
            .param(params)
            .query(query)
            .toString();
    }
};

