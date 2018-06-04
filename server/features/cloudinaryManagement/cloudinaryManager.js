const cloudinary = require('cloudinary');
const cloudinaryConfig = require('../cloudinaryManagement/config');

cloudinary.config(cloudinaryConfig);

module.exports = {
    upload(image) {
        return new Promise((resolve, reject) => {
            cloudinary.v2.uploader
                .upload_stream(
                    { resourse_type: 'raw' },
                    (err, result) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(result);
                    }
                ).end(image);
        });
    }
};

