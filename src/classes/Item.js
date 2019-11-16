// Item to sell, valuate

export default class Item {
    constructor(name, price, date, contact, id, link, type) {
        this.name = name;
        this.price = price;
        this.date = date;
        this.contact = contact;
        this.id = id; // This should also be the link param
        this.type = type;
    }
}