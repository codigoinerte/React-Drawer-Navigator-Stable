# Version Estable de React Drawer Navigator

Pasos para poder quitar los posibles errores

- Seguir los pasos del [issues](https://github.com/software-mansion/react-native-reanimated/issues/846#issuecomment-943267584) mas no instalar la version de react native reanimated
- Instalar la version de `npm install react-native-reanimated@2.2.4`

```
    was facing same problem
    "react-native": "0.66.0", "react-native-reanimated": "^2.2.4",

    I changed in android/app/build.gradle
    project.ext.react = [ enableHermes: true ]

    and in the MainApplication.java
    I added on top
    import com.facebook.react.bridge.JSIModulePackage;
    import com.swmansion.reanimated.ReanimatedJSIModulePackage;
    and in the function ReactNative Host () I added
    @Override protected JSIModulePackage getJSIModulePackage() { return new ReanimatedJSIModulePackage(); }

    It worked like a charm
```
# Información Adicional

- para react-native-gesture-handler instalar la versión 2.1.1  `npm install react-native-gesture-handler@2.1.1`

# Instalación

```
npm i
```