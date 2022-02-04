import "@capacitor/core";
import { Camera, CameraResultType } from '@capacitor/camera';

/* IMPORTANTE ----

Antes de probar el código en Android Studio, ejecutar estos comandos después de hacer cambios en los archivos:
- npx webpack (actualiza el código que se compacta en el archivo main.js)
- npx cap sync (copia los archivos de nuevo a la carpeta .android)

Para abrir el proyecto en Android Studio, ejecutar: 
- npx cap open android

*/

let ejemplo;

window.onload = start;

function start() {
    // Iniciar app, asignar elementos necesarios desde el inicio del HTML para guardar en variables.
    //ejemplo = document.getElementById("aca va el ID")
}

// Función para sacar foto
const takePicture = async (id) => {
    // Configuración para sacar la foto
    const photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
    });
  
    // Seleccionar elemento donde se quiere mostrar la imagen
    image = document.getElementById(id);
    const imageUrl = "data:image/jpeg;base64," + photo.base64String; 
  
    // Agrega la foto al src del elemento seleccionado
    image.src = imageUrl;
};