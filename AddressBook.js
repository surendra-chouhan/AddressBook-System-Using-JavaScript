class AddressBook {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor (...params) {
        let regex_for_name = new RegExp('[A-Z]{1}[a-z]{3,}');
        let regex_for_address = new RegExp('[A-Z]{1}[a-z]');
        let regex_for_zip = new RegExp('^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$');
        let regex_for_phoneNumber = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
        let regex_for_email = new RegExp('^[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-])*@[A-Za-z0-9-]+(?:\\.[A-Za-z0-9-]+)*$');

        if(regex_for_name.test(params[0]) && regex_for_name.test(params[1])){
            this.firstName = params[0];
            this.lastName = params[1];
        }
        else{
            throw "Invalid Name";
        }

        if (regex_for_address.test(params[2]) && regex_for_address.test(params[3]) && regex_for_address.test(params[4])) {
            this.address = params[2];
            this.city = params[3];
            this.state = params[4];
        }
        else{
            throw "Invalid Address";
        }

        if (regex_for_zip.test(params[5])) {
            this.zip = params[5];
        }
        else {
            throw "Invalid Zip Code";
        }

        if (regex_for_phoneNumber.test(params[6])) {
            this.phoneNumber = params[6];            
        }
        else {
            throw "Invalid Phone Number";
        }

        if (regex_for_email.test(params[7])) {
            this.email = params[7];
        }
        else {
            throw "Invalid Email";
        }
    }

    toString() {
        return "FirstName = " + this.firstName + 
                " \nLastName = " + this.lastName + 
                " \nAddress = " + this.address + 
                " \nCity = " + this.city + 
                " \nState = " + this.state + 
                " \nZip = " + this.zip + 
                " \nPhoneNumber = " + this.phoneNumber + 
                " \nEmail = " + this.email;
    }

}

let addressBook = [];
try {
    let contact1 = new AddressBook("Surendra", "Chouhan", "Wadala", "Mumbai", "Maharashtra", 400037, 9987451480, "chouhansurendra88@gmail.com");
    let contact2 = new AddressBook("Omkar", "Mali", "Palaspe", "Panvel", "Maharashtra", 400088, 9029090642, "omkar@gmail.com");

    addressBook.push(contact1);
    addressBook.push(contact2);
}
catch (e) {
    console.error(e);
}

console.log(addressBook);