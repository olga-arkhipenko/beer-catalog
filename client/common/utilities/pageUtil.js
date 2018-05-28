export default {
    isBottom() {
        const scroll = window.scrollY;
        const visibleContent = document.documentElement.clientHeight;
        const pageHeight = document.documentElement.scrollHeight;
        const pageBottom = visibleContent + scroll >= pageHeight;
        return pageBottom || pageHeight < visibleContent;
    }
};

