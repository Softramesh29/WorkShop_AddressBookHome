let addressBookList;
window.addEventListener('DOMContentLoaded', (event) => {
    addressBookList = getAddressBookDataFromStorage();
    document.querySelector(".contact-count").textContent = addressBookList.length;
    createInnerHtml();
    localStorage.removeItem('editPer');
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
                <img id="${addressBookData._id}" onclick="remove(0)" src="../Assets/assets/icons/delete-black-18dp.svg" alt="delete">
                <img id="${addressBookData._id}" onclick="update(0)" src="../Assets/assets/icons/create-black-18dp.svg" alt="edit">
                 </td>
            </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml ;
}

const remove = (node) => {
    let addressBookData = addressBookList.find(perData => perData._id == node.id);
    if(!addressBookData) return;
    const index = addressBookList   
                  .map(perData => perData._id)
                  .indexOf(addressBookData._id);
    addressBookList.splice(index, 1);
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
    document.querySelector(".contact-count").textContent = addressBookList.length;
    createInnerHtml();
}

const update = (node) => {
    let addressBookData = addressBookList.find(perData => perData._id == node.id)
    if (!addressBookData) return;
    localStorage.setItem('editPer', JSON.stringify(addressBookData))
    window.location.replace(site_properties.add_emp_payroll_page);
}


