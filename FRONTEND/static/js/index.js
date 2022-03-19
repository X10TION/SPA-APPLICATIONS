import dashbord from "./views/dashbord.js";
import lectures from "./views/lectures.js";
import profile from "./views/profile.js";

const navigateTo =  url => {
    history.pushState(null, null, url);
    router();
};


const router = async () => {
    const routes = [
        { path: "/", view: dashbord},
        { path: "/Lactures", view: lectures},
        // {path: "/Lactures", view: () => console.log("lecture")},
        {path: "/project", view: profile},

     ];

    const potentialMatches = routes.map(route => {
        return{
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatche => potentialMatche.isMatch)
    

    if(!match){
        match ={
            route: routes[0],
            isMatch: true,
        }
    };
    const  view = new match.route.view();
    document.querySelector("#app").innerHTML = await view.getHtml();
     
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e =>{
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});