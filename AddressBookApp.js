let isUpdate = false;
let addressBookObj = {};

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#text');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if(name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).text = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
    checkForUpdate();
});

const checkForUpdate = () => {
    const addressBookJson = localStorage.getItem('editPer');
    isUpdate = addressBookJson ? true : false ;
    if (!isUpdate) return ;
    addressBookObj = JSON.parse(addressBookJson);
    setForm();
}

const setForm = () => {
    setvalue('#text', addressBookObj._text);
    setvalue('#address', addressBookObj._address);
    setvalue('#city', addressBookObj._city);
    setvalue('#state', addressBookObj._state);
    setvalue('#zip', addressBookObj._zip);
    setvalue('#number', addressBookObj._number);

}

const setvalue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

const save = () => {
    try {
        let addressBookData = createAddressBook();
        createAndUpdateStorge(addressBookData);
    } catch (e) {
        return;
    }
}

function createAndUpdateStorge(addressBookData){
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if(addressBookList != undefined){
        addressBookList.push(addressBookData);
    } else {
        addressBookList = [addressBookData]
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList))
}

const createAddressBook = () => {
    let addressBookData = new AddressBookData();
        addressBookData.text = getInputValueById('#text');
        addressBookData.address = getInputValueById('#address');
        addressBookData.city = getInputValueById('#city');
        addressBookData.state = getInputValueById('#state');
        addressBookData.zip = getInputValueById('#zip');
        addressBookData.number = getInputValueById('#number');
    alert(addressBookData.toString());
    return addressBookData;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

