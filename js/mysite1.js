'use strict';


var menu1 =document.getElementById("menu"),
    list=document.getElementsByClassName("list5"),
    list2=document.getElementsByClassName("list2"),
    who=document.getElementById("who"),
    am=document.getElementById("am"),
    skills=document.getElementById("skills"),
    skill=document.getElementById("skill"),
    products=document.getElementById("products"),
    product=document.getElementById("product"),
    Excerpts=document.getElementById("Excerpts"),
    Excerpt=document.getElementById("Excerpt"),
    webdesign=document.getElementById('webdesign'),
    poster=document.getElementById('poster'),
    maga=document.getElementById('maga'),
    curr=document.getElementById("curr"),
    cur=document.getElementById("cur"),
    contacts=document.getElementById("contacts"),
    contact=document.getElementById("contact"),
    webd=document.getElementById('webd'),
    post=document.getElementById('post'),
    book=document.getElementById('book');



menu1.onclick = function(){
    for (var n=0; n<10 ; n=n+1){
        if (list[n].style.display==='none'){ 
        list[n].style.display ='block';
        menu1.style.borderBottom="02px #2a426d  solid";
        menu1.style.borderTop="02px #2a426d  solid";
        }
        else {
        list[n].style.display ='none';
        menu1.style.borderBottom="hidden";
        menu1.style.borderTop="hidden";
        who.style.display ='none';
        skills.style.display ='none';
        products.style.display ='none';
        curr.style.display ='none';
        contacts.style.display ='none';
        maga.style.display ='none';
        webdesign.style.display ='none';
        poster.style.display ='none'; 
        webd.style.display='none';
        book.style.display='none';
        post.style.display='none';
        
        }}
        };
    

am.onclick=function(){
        if (who.style.display=='none'){ 
    
            who.style.display ='block';
            skills.style.display ='none';
            products.style.display ='none';
            curr.style.display ='none'; 
            contacts.style.display ='none';
            maga.style.display ='none';
            webdesign.style.display ='none';
            poster.style.display ='none'; 
            webd.style.display='none';
            book.style.display='none';
            post.style.display='none';
        }

        else {
            who.style.display ='none';    
        }};

skill.onclick=function(){
    if (skills.style.display=='none'){ 

        skills.style.display ='block';
        who.style.display ='none';
        products.style.display ='none'
        curr.style.display ='none';
        contacts.style.display ='none'; 
        maga.style.display ='none';
        webdesign.style.display ='none';
        poster.style.display ='none';
        webd.style.display='none';
        book.style.display='none';
        post.style.display='none'; 
    }

    else {
        skills.style.display ='none';    
    }};

product.onclick=function(){
    if (products.style.display=='none'){ 

        products.style.display ='block';
        who.style.display ='none';
        skills.style.display ='none';
        curr.style.display ='none'; 
        contacts.style.display ='none';
        maga.style.display ='none';
        webdesign.style.display ='none';
        poster.style.display ='none'; 
        webd.style.display='none';
        book.style.display='none';
        post.style.display='none';
    }

    else {
        products.style.display ='none';  
}}; 

Excerpt.onclick = function(){
    for (var h=0; h<10 ; h=h+1){
        if (list2[h].style.display==='none'){ 
    
        list2[h].style.display ='block';              
        who.style.display ='none';
        skills.style.display ='none';
        products.style.display ='none'
        curr.style.display ='none'; 
        contacts.style.display ='none';
        webd.style.display='none';
        book.style.display='none';
        post.style.display='none';
        }
        else {
        list2[h].style.display ='none'; 
        }}
        };


cur.onclick=function(){
    if (curr.style.display=='none'){ 

        curr.style.display ='block';
        who.style.display ='none';
        skills.style.display ='none';
        products.style.display ='none'
        contacts.style.display ='none';
        maga.style.display ='none';
        webdesign.style.display ='none';
        poster.style.display ='none';
        webd.style.display='none';
        book.style.display='none';
        post.style.display='none'; 
    }

    else {
        curr.style.display ='none';   
    }};    

contact.onclick=function(){
    if (contacts.style.display=='none'){ 
        contacts.style.display ='block';
        curr.style.display ='none';
        who.style.display ='none';
        skills.style.display ='none';
        products.style.display ='none'
        maga.style.display ='none';
        webdesign.style.display ='none';
        poster.style.display ='none'; 
        webd.style.display='none';
        book.style.display='none';
        post.style.display='none';
    }

    else {
        contacts.style.display ='none';  
    }};   


webdesign.onclick=function(){
    if (webd.style.display=='none'){ 

        webd.style.display ='block';
        who.style.display ='none';
        skills.style.display ='none';
        products.style.display ='none';
        curr.style.display ='none'; 
        contacts.style.display ='none';
        post.style.display='none';
        book.style.display='none';
        maga.style.display ='none';
        webdesign.style.display ='none';
        poster.style.display ='none'; 
    }

    else {
        webd.style.display ="none"; 
    }};    

poster.onclick=function(){
    if (post.style.display=='none'){ 

        post.style.display ='block';
        who.style.display ='none';
        skills.style.display ='none';
        products.style.display ='none';
        curr.style.display ='none'; 
        contacts.style.display ='none';
        book.style.display='none';
        webd.style.display='none';
        maga.style.display ='none';
        webdesign.style.display ='none';
        poster.style.display ='none'; 
    }

    else {
        post.style.display ="none"; 
    }};    

maga.onclick=function(){
    if (book.style.display=='none'){ 

        book.style.display ='block';
        who.style.display ='none';
        skills.style.display ='none';
        products.style.display ='none';
        curr.style.display ='none'; 
        contacts.style.display ='none';
        post.style.display='none';
        webd.style.display='none';
        maga.style.display ='none';
        webdesign.style.display ='none';
        poster.style.display ='none'; 
    }

    else {
        book.style.display ="none"; 
    }};    