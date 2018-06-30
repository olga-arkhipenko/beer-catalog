export default {
    registration: {
        success: {
            type: 'success',
            message: 'You have been registered successfully!'
        },
        error: {
            type: 'error',
            message: 'Registration failed.'
        }
    },
    login: {
        error: {
            type: 'error',
            message: 'Login failed.'
        }
    },
    beersLoading: {
        error: {
            type: 'error',
            message: 'Cannot load beers, sorry.'
        }
    },
    beerLoading: {
        error: {
            type: 'error',
            message: 'Cannot load beer, sorry.'
        }
    },
    authorization: {
        error: {
            type: 'warning',
            message: 'You are not logged in and cannot add favorite beers. Please, log in or sign up.'
        }
    },
    signout: {
        error: {
            type: 'warning',
            message: 'Something went wrong... You cannot sign out now.'
        }
    }
};
