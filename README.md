## Expo App

### 1. Requirement 

- NodeJS 20+
- Typescript 4.x
- Expo v50+
- Não

### 2. Installation
#### Cài đặt package:
```bash
yarn install
```

#### Chạy app
```bash
yarn run android
yarn run ios
```

### Project structure:
```
|- common: app builder
|- config : add new screens, another app config
|- features 
|         - index.tsx : Screen
|         - components : Screen's components
|         - services : Screen's services
|- global : Global components, utils, .,,
|         - theme : Theme constants
|         - components : Global components
|         - constants : Global constants
|         - providers : App providers
|         - base : App base
|- localization : Localization, lang config
|- redux : Redux config
|- assets : App assets
|- types : Types declare
|- app.ts : Expo app config
|- babel.config.js : Babel config
|- tsconfig.json
|- App.tsx : Root app component
```
