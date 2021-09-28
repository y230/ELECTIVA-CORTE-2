function mostrar() {
  let txt1 = document.getElementById('txt1').value
  let txt2 = document.getElementById('txt2').value
  let txt3 = document.getElementById('txt3').value
  let txt4 = document.getElementById('txt4').value
  let radio1 = document.getElementById('radio1').value
  let radio2 = document.getElementById('radio2').value
  let radi03 = document.getElementById('radio3').value
  let dt1 = document.getElementById('dt1').value
  let num1 = document.getElementById('num1').value
  let select1 = document.getElementById('select1').value
  let select2 = document.getElementById('select2').value
  let select3 = document.getElementById('select3').value
  let select4 = document.getElementById('select4').value
  let select5 = document.getElementById('select5').value
  let txt5 = document.getElementById('txt5').value
  document.getElementById('datos').innerHTML=" <br> "+" <br> "+" <br> "+ "Nombre completo: "+txt1+" "+txt2+" "+txt3+" "+txt4+ " <br> " + " <br> "+ "Fecha de nacimiento: " +dt1+ " <br> " +" <br> "+ " Edad: " +num1+ " <br> " +" <br> "+ " No. de documento: " +txt5
  console.log( "Nombre completo: "+txt1+" "+txt2+" "+txt3+" "+txt4+ " Fecha de nacimiento: " +dt1+ " Edad: " +num1+ " No. de documento: " +txt5)
}

function mostrar2() {
  let txtn1 = document.getElementById('txtn1').value
  let txtn2 = document.getElementById('txtn2').value
  let txtn3 = document.getElementById('txtn3').value
  let est1 = document.getElementById('est1').value
  document.getElementById('datos2').innerHTML=" <br> "+" <br> "+" <br> "+ "Nacionalidad: "+txtn1+ " <br> " + " <br> " + " Ciudad/ Municipio: " +txtn2+ " <br> " + " <br> " + " Direccion: " +txtn3+ " <br> " + " <br> " +" Estrato: " +est1
  console.log("Nacionalidad: "+txtn1+ " Ciudad/ Municipio: " +txtn2+  " Direccion: " +txtn3+ " Estrato: " +est1)
}

function calidadAire() {
   let co = document.getElementById('co').value 
   let ica 
   if (co>0 && co<4.5) {
     ica = parseFloat((50-0)/(4.4-0)*(co-0)+0)
     document.getElementById('respuesta').innerHTML=ica.toFixed(2)+" Categoria Buena // Verde"
     console.log("Categoria Buena // Verde" +ica)
   }
   else if(co>4.5 && co<9.5){
     ica = parseFloat((100-51)/(9.4-4.5)*(co-4.5)+51)
     document.getElementById('respuesta').innerHTML=ica.toFixed(2)+" Categoria Moderada // Amarrillo"
     console.log("Categoria Moderada // Amarrillo" +ica)
   }
   else if (co>=9.5 && co<12.5) {
     ica = parseFloat((150-101)/(12.4-9.5)*(co-9.5)+101)
     document.getElementById('respuesta').innerHTML=ica.toFixed(2)+" Categoria Dañina a la Salud de Personas Sensibles //  Naranja"
     console.log("Categoria Dañina a la Salud de Personas Sensibles //  Naranja" +ica)
   }
   else if(co>12.5 && co<15.5){
     ica = parseFloat((200-151)/(15.4-12.5)*(co-12.5)+151)
     document.getElementById('respuesta').innerHTML=ica.toFixed(2)+" Categoria Dañina a la Salud // Rojo"
     console.log("Categoria Dañina a la Salud // Rojo" +ica)
   }
   else if (co>15.5 && co<30.5) {
     ica = parseFloat((300-201)/(30.4-15.5)*(co-15.5)+201)
     document.getElementById('respuesta').innerHTML=ica.toFixed(2)+" Categoria Muy Dañina a la Salud // Morado"
     console.log("Categoria Muy Dañina a la Salud // Morado" +ica)
   }
   else if(co>30.5 && co<40.5){
     ica = parseFloat((400-301)/(40.4-30.5)*(co-30.5)+301)
     document.getElementById('respuesta').innerHTML=ica.toFixed(2)+" Categoria Peligrosa // Marron"
     console.log("Categoria Peligrosa // Marron" +ica)
   }
   else if(co>40.5 && co<50.5){
     ica = parseFloat((500-401)/(50.4-40.5)*(co-40.5)+401)
     document.getElementById('respuesta').innerHTML=ica.toFixed(2)+" Categoria Peligrosa // Marron"
     console.log("Categoria Peligrosa // Marron" +ica)
   }
   else{
     document.getElementById('respuesta').innerHTML="-1 ERROR EN LOS DATOS"
     console.log("-1 ERROR EN LOS DATOS" +ica)
   }
 
 }