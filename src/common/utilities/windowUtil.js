export default {
    isBottom(){
        const scrollY = window.scrollY;
        const visibleContent = document.documentElement.clientHeight;
        const pageHeight = document.documentElement.scrollHeight;
        const pageBottom = visibleContent + scrollY >= pageHeight;
        return pageBottom || pageHeight < visibleContent;
    }
}