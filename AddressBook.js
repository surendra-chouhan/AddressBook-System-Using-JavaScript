const regex_for_name = new RegExp('[A-Z]{1}[a-z]{3,}');
const regex_for_address = new RegExp('[A-Z]{1}[a-z]');
const regex_for_zip = new RegExp('^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$');
const regex_for_phoneNumber = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
const regex_for_email = new RegExp('^[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-])*@[A-Za-z0-9-]+(?:\\.[A-Za-z0-9-]+)*$');

class AddressBook {
    constructor (...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get getfirstName() {
        return this.firstName;
    }

    set setfirstName(firstName) {
        if (regex_for_name.test(firstName)) {
            this.firstName = firstName;
        }
        else {
            throw "Invalid First Name";
        }
    }

    get getlastName() {
        return this.lastName;
    }

    set setlastName(lastName) {
        if (regex_for_name.test(lastName)) {
            this.lastName = lastName;
        }
        else {
            throw "Invalid Last Name";
        }
    }

    get getaddress() {
        return this.address;
    }

    set setaddress(address) {
        if (regex_for_address.test(address)) {
            this.address = address;
        }
        else {
            throw "Invalid Address";
        }
    }
        
    get getcity(){ 
        return this.city; 
    }

    set setcity(city){ 
        if(regex_for_address.test(city)){
            this.city = city;
        }
        else{
            throw "Invalid City";
        }
    }

    get getstate(){
         return this.state;
     }

    set setstate(state){
        if(regex_for_address.test(state)){
            this.state = state;
        }
        else{
            throw "State is Incorrect";
        }
    }

    get getzip(){ 
        return this.zip; 
    }

    set setzip(zip){
        if(regex_for_zip.test(zip)){
            this.zip = zip;
        }
        else{
            throw "Invalid Zip";
        }
    }

    get getphoneNumber(){ 
        return this.phoneNumber;
     }

    set setphoneNumber(phoneNumber){
        if(regex_for_phoneNumber.test(phoneNumber)){
            this.phoneNumber = phoneNumber;
        }
        else{
            throw "Phone Number is Incorrect";
        }
    }

    get getemail(){
         return this.email;
    }

    set setemail(email){
        if(regex_for_email.test(email)){
            this.email = email;
        }
        else{
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

let contact1 = new AddressBook("Surendra", "Chouhan", "Wadala", "Mumbai", "Maharashtra", 400037, 9987451480, "chouhansurendra88@gmail.com");
let contact2 = new AddressBook("Omkar", "Mali", "Palaspe", "Panvel", "Maharashtra", 400088, 9029090642, "omkar@gmail.com");
let contact3 = new AddressBook("Rohit", "Kanojia", "Matunga", "Mumbai", "Maharashtra", 400031, 8080975632, "rohit@hotmail.com");

addressBook.push(contact1);
addressBook.push(contact2);
addressBook.push(contact3);
console.log(addressBook);

function addContact() {
    let contact = new AddressBook("Kaushal", "Phutane", "Parel", "Mumbai", "Maharashtra", 400027, 8080956636, "kaushal@gmail.com");
    let contact_check = addressBook.map(name => name.getfirstName === contact.getfirstName);
    if(contact_check.includes(true)) {
        console.log("Contact already exists in AddressBook");
    }
    else{
        addressBook.push(contact);
    }
    console.log(addressBook);
}

function editContact() {
    if (addressBook.find(name => name.firstName == "Rohit")) {
        let id = addressBook.findIndex(name => name.firstName == "Rohit");
        addressBook[id].setfirstName = "Mandeep";
        console.log("Contacts after Editing are : ");
        console.log(addressBook);
    }
    else{
        console.log("This Contact is not available in the AddressBook");
    }
}

function deleteContact() {
    if (addressBook.find(name => name.firstName == 'Mandeep')) {
        let id = addressBook.findIndex(name => name.firstName == 'Mandeep');
        addressBook.splice(id,1)
        console.log("After deletion contacts available are : " );
        console.log(addressBook);
        console.log("Size after deletion is : " + count());
    }
}

function count() {
    let contact_count = addressBook.map(ele => typeof ele.getfirstName === 'string');
    let size = contact_count.reduce((previous, current) => previous + current);
    return size;
}

function search_by_city(){
    let search = addressBook.filter(ele => ele.city == 'Mumbai');
    console.log("Contacts in Mumbai city are : ");
    console.log(search);
}

function search_by_state(){
    let search = addressBook.filter(ele => ele.state == 'Maharashtra');
    console.log("Contacts in Maharashtra state are : ");
    console.log(search);
}

addContact();
editContact();
deleteContact();
search_by_city();
search_by_state();