class Navbar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    getTemplate(){
        const template=document.createElement('template');
        template.innerHTML=`
        
        
        `
    }
}