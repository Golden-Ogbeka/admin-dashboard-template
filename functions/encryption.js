import cryptoJs from 'crypto-js';

export const encryptItem = (item, key) => {
	const encryptedText = cryptoJs.AES.encrypt(JSON.stringify(item), key).toString();
	return encryptedText;
};

export const decryptItem = (item, key) => {
	const decryptedText = cryptoJs.AES.decrypt(item, key);
	const originalSessionDetails = decryptedText.toString(cryptoJs.enc.Utf8);
	return originalSessionDetails;
};
