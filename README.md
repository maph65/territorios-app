#APP Territorios del Saber

Esta aplicación esta desarrollada utilizando tecnología web para
su compilación en dispotivos iOS y Android.

##Tecnologías
* Apache Cordova (https://cordova.apache.org/)
* Swift (Para compilar para iOS) 
* Kotlin (Para compilación Android)

##Compilación de la aplicación
Para poder compilar la aplicación debe tener instalado Apache Cordova 
en el equipo, tal como se describe en el siguiente link:

https://cordova.apache.org/#getstarted

Así mismo deberá tener instalado Android Studio junto con su SDK
con la API de Android 8.0 Oreo o superior.

En caso de querer compilar la aplicación para Xcode deberá contar
con un equipo con MacOS 13.1 o superior que tenga instalado XCode,
herramienta de desarrollo de Apple.

Para correr la aplicación en android ejecutar en la raíz del proyecto:

```
cordova run android
```

Para correr la aplicación en iOS ejecutar en la raíz del proyecto:

```
cordova run iOS
```