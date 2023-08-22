

const telephoneForm = document.getElementById('phoneForm');
const telephoneInput = document.getElementById('phoneNumber');

telephoneForm.addEventListener('submit', function (event) {

    const selectedLanguage = document.getElementById('language').value;

    const validationMessages = {
        en: {
            invalidPhone: "Please enter a valid international telephone number.",
            validPhone: "The telephone number is valid."
        },
        vi: {
            invalidPhone: "Vui lòng nhập đúng định dạng số điện thoại quốc tế.",
            validPhone: "Số điện thoại hợp lệ."
        }
    };

    const phoneNumber = telephoneInput.value.trim();

    const internationalPattern = /^[\s()+-]*([0-9][\s()+-]*){6, 20}$/;

    if (!internationalPattern.test(phoneNumber)) {
        return (selectedLanguage === 'en') ? alert(validationMessages.en.invalidPhone) : alert(validationMessages.vi.invalidPhone);
    }
    return alert((selectedLanguage === 'en') ? validationMessages.en.validPhone : validationMessages.vi.validPhone + " " + phoneNumber);

});

