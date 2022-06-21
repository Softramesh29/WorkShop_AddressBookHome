
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Address</th><th>City</th>"+
                        "<th>State</th><th>Zip</th><th>Phone Number</th>";
    let addressBookData = createAddressBookJSON()[0];
    const innerHtml = `${headerHtml};
            <tr>
                <td>${addressBookData._text}</td>
                <td>${addressBookData._address}</td>
                <td>${addressBookData._city}</td>
                <td>${addressBookData._state}</td>
                <td>${addressBookData._zip}</td>
                <td>${addressBookData._number}</td>
                <td>
                    <img id="${empPayrollData._id}" onclick="remove(this)" src="../Assets/assets/icons/delete-black-18dp.svg" alt="delete">
                    <img id="${empPayrollData._id}" onclick="update(this)" src="../Assets/assets/icons/create-black-18dp.svg" alt="edit">
                </td>
            </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml ;
}

const createAddressBookJSON = () => {
    let addressBookListLocal = [
        {
            _text: 'Ramesh',
            _address: 'Annanagar street, S.Aduthurai post',
            _city: 'Perambalur',
            _state: 'Tamilnadu',
            _zip: '621108',
            _number: '919629789619'
        },

        {
            _text: 'Divya',
            _address: 'Annanagar street, S.Aduthurai post',
            _city: 'Perambalur',
            _state: 'Tamilnadu',
            _zip: '621108',
            _number: '919629789619'
        }
    ];
    return addressBookListLocal;
}
