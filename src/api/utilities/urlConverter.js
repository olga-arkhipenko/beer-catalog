const urlMap = {
    pageNumber: 'page',
    itemsPerPage: 'per_page',
    beerName: 'beer_name',
    alcoholByVolume: 'abv_gt',
    InterBitUnits: 'ibu_gt',
    colorByEBC: 'ebc_gt'
}

export default {
    convert(requestParams) {
        return Object.keys(requestParams).map(param => urlMap[param])
    }
}