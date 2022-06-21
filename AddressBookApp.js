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
});

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