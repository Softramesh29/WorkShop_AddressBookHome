let addressBookList;
window.addEventListener('DOMContentLoaded', (event) => {
    addressBookList = getAddressBookDataFromStorage();
    document.querySelector(".contact-count").textContent = addressBookList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getAddressBookDataFromStorage = () => {
    return localStorage.getItem('AddressBookList') ?        
                        JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

const createInnerHtml = () => {
    if (addressBookList.length == 0) return;
    const headerHtml = "<th>Name</th><th>Address</th><th>City</th>"+
                        "<th>State</th><th>Zip</th><th>Phone Number</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    for (const addressBookData of addressBookList){
        innerHtml = `${innerHtml}
            <tr>
                <td>${addressBookData._text}</td>
                <td>${addressBookData._address}</td>
                <td>${addressBookData._city}</td>
                <td>${addressBookData._state}</td>
                <td>${addressBookData._zip}</td>
                <td>${addressBookData._number}</td>
                <td>
                <img id="${addressBookData._id}" onclick="remove(this)" src="../Assets/assets/icons/delete-black-18dp.svg" alt="delete">
                <img id="${addressBookData._id}" onclick="update(this)" src="../Assets/assets/icons/create-black-18dp.svg" alt="edit">
                 </td>
            </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml ;
}


