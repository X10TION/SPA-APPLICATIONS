import Abstract from "./Abstract.js";

export default class extends Abstract{
    constructor(){
        super();
        this.setTitle("Dashboard");
    }
    async getHtml(){
        return ` 
        <h1> welcome to student dash board</h1>
        <input type="text" >
        `;
    }

}