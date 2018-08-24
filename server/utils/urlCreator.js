const UrlAssembler = require('url-assembler');

module.exports = {
    createUrl(url, segment, query) {
        return new UrlAssembler(url)
            .segment(segment ? `/${segment}` : '')
            .query(query)
            .toString();
    }
};

