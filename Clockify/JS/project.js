



new_project =() => {
    document.getElementById("create_popup").style.top="10%"
}

cencel_pro=()=>{
    document.getElementById("create_popup").style.top="-120%"
    document.getElementById("alert_save").style.top="-120%"
}


let no_project = JSON.parse(localStorage.getItem("noproject"))||[]

create_pro =()=> {
    let obj = {
        projectname :document.getElementById("projectname").value,
        projectclient:document.getElementById("projectclient").value,
        projectcolor:document.getElementById("projectcolor").value,
        projecttype:document.getElementById("projecttype").value,
        projecttemplate:document.getElementById("projecttemplate").value
    }

    no_project.push(obj)
    console.log(no_project)
    localStorage.setItem("noproject" ,JSON.stringify(no_project))
   
    setTimeout(function(){
        document.getElementById("create_popup").style.top="10%"
       
    },1000)
    append(no_project)

    

}



append(no_project)

function append(data){
    document.getElementById("project_saved").innerHTML=null;
    data.forEach(function(el,index){
        let div=document.createElement("div");
        let check=document.createElement("input");
        check.setAttribute("type","checkbox")
        let h4=document.createElement("h4");
        h4.innerText=el.projectname;
        let p=document.createElement("p");
        p.innerText=el.projectclient
        let p1=document.createElement("p");
        p1.innerText=el.projecttype
        let p2=document.createElement("p");
        p2.innerText=el.projecttemplate
        let dele=document.createElement("i");
        dele.setAttribute("class","fa-solid fa-trash-arrow-up");
        dele.addEventListener("click",function(){
            Delete(el,index);
        })  
         let btn1 = document.createElement('button')
         btn1.innerText = "Archieve"
         btn1.className =  "itemfunc"
         btn1.addEventListener("click"  ,function(){
             if(true){
                h4.style.textDecorationLine ="line-through"
             }else{
                console.log("false")
             }
         })   
         let btn2 = document.createElement('button')
         btn2.innerText = "Restore"
         btn2.className =  "itemfunc"
         btn2.addEventListener("click"  ,function(){
             if(true){
                h4.style.textDecorationLine ="none"
             }else{
                console.log("false")
             }
         })   


        div.append(check,h4,p,p1, p2,dele ,btn1 , btn2)
        document.getElementById("project_saved").append(div)
    });
    
}

function Delete(el,index){
   
    document.getElementById("alert_save").style.top="10%"

    delete_project=(el,index)=>{
    no_project.splice(index,1);
    localStorage.setItem("noproject",JSON.stringify(no_project));
    
    append(no_project);
    
    document.getElementById("alert_save").style.top="-120%";
}
}

