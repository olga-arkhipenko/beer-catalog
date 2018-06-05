import ajaxHelper from 'common/helpers/ajaxHelper';
import urls from 'common/api/constants/urls';

export default {
    register(registrationData) {
        return ajaxHelper
            .postImage(urls.imageUpload, registrationData.profilePicture)
            .then(profilePicture =>
                ajaxHelper
                    .postJson(urls.registration, { ...registrationData, profilePicture }))
            .catch(err => console.error(err));
    },
    login(loginData) {
        return ajaxHelper
            .postJson(urls.login, loginData)
            .catch(err => console.error(err));
    }
    // addFavoriteBeer(beerId) {
    //     console.log(`add ${beerId}`);
    // },
    // removeFavoriteBeer(beerId) {
    //     console.log(`remove ${beerId}`);
    // }
};

