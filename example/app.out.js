class App extends Walas.ComponentBase {
    static componentName() {
        return "x-app";
    }
    static inject() {
        return ["$http"];
    }
    static properties() {
        return {
            name: {
                type: String,
                required: true,
                reflectAttribute: true
            }
        };
    }
    constructor() {
        super();
        this._text = 1;
        this.constructor.inject();
    }
    click() {
        this.text++;
    }
    set text(value) {
        this._text = value;
        this.refresh();
    }
    get text() {
        return this._text;
    }
    style() {
        `<style>
                    
                </style>`;
    }
    render() {
        return Walas.Dom.create(
            "div",
            { onClick: this.click, a: "10" },
            this.text,
            " Hola pepe",
            [1, 2, 3].map(c => Walas.Dom.create(
                "span",
                null,
                c
            ))
        );
    }

}
var app = Walas.Components.register(App);
Walas.bootstrap(document.getElementById('app'), app);

//# sourceMappingURL=app.out.js.map