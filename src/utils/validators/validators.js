const name = name => {
    if (!name || name.length > 60 || name.length < 2) {
        return 'User name, should be 2-60 characters';
    }
    return undefined;
};

const email = email => {
    const patternEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!email) {
        return 'Email is required field';
    } else if (email.length > 100 || !patternEmail.test(email)) {
        return 'The email must be a valid email address';
    }
    return undefined;
};

const phone = phone => {
    const patternPhone = /^[\+]{0,1}380([0-9]{9})$/;
    if (!phone) {
        return 'Phone is required field';
    } else if (!patternPhone.test(phone)) {
        return 'User phone number, should start with code of Ukraine +380';
    }
    return undefined;
};

const position = position => {
    if (!position) {
        return 'Select your position';
    }
    return undefined;
};

const photo = file => {
    if (!file ||
        +file.size > 5242880 ||
        file.type !== 'image/jpeg' ||
        file.width < 70 ||
        file.height < 70
    ) {
        return 'File format jpg up to 5 MB, the minimum size of 70x70px';
    }
    return undefined;
};

export default {
    name,
    email,
    phone,
    position,
    photo
};