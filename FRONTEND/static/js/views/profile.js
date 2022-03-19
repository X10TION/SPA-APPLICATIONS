import Abstract from "./Abstract.js";

export default class extends Abstract{
    constructor(){
        super();
        this.setTitle("profile");
    }
    async getHtml(){
        return ` 
        <h1> welcome  all to student dash board</h1>
        
        `;
    }

}