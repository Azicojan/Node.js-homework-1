






    let stars = function (){
    let star = "*";
    let arr = [];
    let div = document.createElement('div');

    let star3 = "*";
    let arr3 = [];
    let div3 = document.createElement('div');
  
  for(let i = 0; i < 100; i++) {
    
    arr.push(star);
    
  }
  div.innerHTML= arr.join('');
  document.body.append(div);

  for(let i = 0; i < 10; i++){
    let div2 = document.createElement('div');
    div2.innerText="*";
    document.body.append(div2);

  }

  for(let i = 0; i < 100; i++) {
    
    arr3.push(star3);
    
  }
  div3.innerHTML= arr.join('');
  document.body.append(div3);

  for(let i = 0; i < 10; i++){
    let div4 = document.createElement('div');
    div4.innerText="*";
    div4.style.cssText=`
    position:relative;
    left:793px;
    top:-200px`;
    document.body.append(div4);

  }

  let div5 = document.createElement("div");
  div5.innerHTML= "<h3>My Programme</h3>";
  div5.style.cssText=`
  position:relative;
  top:-320px;
  left: 320px;`;
  document.body.append(div5);

};



 

export {stars};
