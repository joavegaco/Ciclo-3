let day;
switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case  6:
        day = "Saturday";
}
console.log("Today is " + day)

document.write(day+'<br>')

/*for (let i=0;i<5;i++){
    //document.write(i+'<br>')
    document.write(`<button type="button" class="btn btn-primary">Hola${i}</button>`)
}

document.write('<br')*/

for (let i=0;i<5;i++){
    let template=`<div class="col-12 col-sm-12 col-md-6 col-lg-4"><p>
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample${i}" role="button" aria-expanded="false" aria-controls="collapseExample${i}">
      Mostrar contenido ${i}
    </a>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample${i}" aria-expanded="false" aria-controls="collapseExample${i}">
        Hola Johan ${i}
    </button>
  </p>
  <div class="collapse" id="collapseExample${i}">
    <div class="card card-body">
      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
    </div>
  </div></div>`;
    let grid = document.getElementById('row');
    grid.innerHTML += template;
    //document.write(template);
}

