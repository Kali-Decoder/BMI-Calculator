const weight=document.getElementById("weight");
    const height=document.getElementById("height");
    const img=document.querySelector("#img");
    const title=document.querySelector(".title h1");
    const btn=document.querySelector(".btn");
    
   btn.addEventListener('click',()=>{
          var w=weight.value;
          var h=height.value;
          var result=(w/(h*h));

          if(result<=18.5)
          {
            document.querySelector(".show").style.display='block';
            img.src='underweight.jpg';
            title.innerHTML='UnderWeight';

          }
          else if(result >24.9 &&  result<=29.9)
          {
            document.querySelector(".show").style.display='block';
            img.src='overweight.jpg';
            title.innerHTML='OverWeight';

          }
          else if(result >18.5 &&  result<=24.9)
          {
            document.querySelector(".show").style.display='block';
            img.src='normal.jpg';
            title.innerHTML='Normal Weight';

          }
          else if(result>24.9)
          {
            document.querySelector(".show").style.display='block';
            img.src='obesity.jpg';
            title.innerHTML='Obesity';

          }
          
          
    })