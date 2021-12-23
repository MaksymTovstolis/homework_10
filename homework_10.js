const valueList = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const suiteList = ['clubs', 'spades', 'hearts', 'diamonds'];

const valueMap = {
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: 'J',
    12: 'Q',
    13: 'K',
    14: 'A',
};

const personMap = {
    'J': () => 'jack',
    'Q': () => 'queen',
    'K': () => 'king',
    'A': suite => suite,
}

class Card {
    constructor({ value, suite}) {
        this.value = value;
        this.suite = suite;
    }

    get type () {
        return valueMap[this.value];
    }

    get isPerson () {
        return this.value > 10;
    }

    get middleImg () {
        return personMap[this.type](this.suite);
    }


    get render() {
        return (`
            <div class="card${this.isPerson ? ' card--person' : ''}">
                <div class="card__info">
                    ${this.type}
                    <img src="images/${this.suite}.svg" alt="${this.suite}">
                </div>
                
                ${this.isPerson ? `<img class="person" src="images/${this.middleImg}.svg" alt="${this.suite}">` : ''}
                
                <div class="card__info">
                    ${this.type}
                    <img src="images/${this.suite}.svg" alt="${this.suite}">
                </div>
            </div>
        `)
    }
}

const getList = () => valueList.map(value => suiteList.map(suite => ({ value, suite }))).flat().map(config => new Card(config));

const cardList = getList().reduce((acc, cur) => acc + cur.render, '');


document.write(`<div class="wrapper">${cardList}</div>`);
