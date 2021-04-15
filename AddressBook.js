var regex_for_name = new RegExp('[A-Z]{1}[a-z]{3,}');
var regex_for_address = new RegExp('[A-Z]{1}[a-z]');
var regex_for_zip = new RegExp('^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$');
var regex_for_phoneNumber = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
var regex_for_email = new RegExp('^[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-])*@[A-Za-z0-9-]+(?:\\.[A-Za-z0-9-]+)*$');

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
        this.setfirstName = params[0];
        this.setlastName = params[1];
        this.setaddress = params[2];
        this.setcity = params[3];
        this.setstate = params[4];
        this.setzip = params[5];
        this.setphoneNumber = params[6];
        this.setemail = params[7];
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
try {
    let contact1 = new AddressBook("Surendra", "Chouhan", "Wadala", "Mumbai", "Maharashtra", 400037, 9987451480, "chouhansurendra88@gmail.com");
    let contact2 = new AddressBook("Omkar", "Mali", "Palaspe", "Panvel", "Maharashtra", 400088, 9029090642, "omkar@gmail.com");
    let contact3 = new AddressBook("Rohit", "Kanojia", "Matunga", "Mumbai", "Maharashtra", 400031, 8080975632, "rohit@hotmail.com");

    addressBook.push(contact1);
    addressBook.push(contact2);
    addressBook.push(contact3);

    if (addressBook.find(name => name.getfirstName == "Surendra")) {
        addressBook.find(name => name.setfirstName = 'Mukesh');
    }
    else{
        console.log("This Contact is not available in the AddressBook");
    }
}
catch (e) {
    console.error(e);
}

console.log(addressBook);