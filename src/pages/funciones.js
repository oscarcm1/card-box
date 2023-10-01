// Función para ocultar y mostrar texto - Falta optimizar

let list = [".text1", ".text2", ".text3", ".text4"];

export function showHidden(button) {
  let active = "." + button;
  $(document).ready(function () {
    for (let i = 0; i < list.length; i++) {
        if( active == list[i]){
            $(list[i]).toggleClass("active");
        }
    }
  });
}
