import Abstract from "./Abstract.js";

export default class extends Abstract{
    constructor(){
        super();
        this.setTitle("lectures");
    }
    async getHtml(){
        return ` 
        <h1> welcome to student dash board</h1>
        <h2> welcome to student dash board</h2>
        `;
    }

}