const multer  = require('multer');

const storage = null;
const upload = null;

function storageImage() {
	this.storage = multer.diskStorage({
		destination: '../public/images',
		filename: 'nome' + '.PNG'
	});
}

this.upload = multer({storage: storage});

module.exports = {storageImage, upload};