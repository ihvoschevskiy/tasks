#!/bin/bash

if ! [[ -d "src" ]]; then
  mkdir "src"
fi

if ! [[ -d "src/assets" ]]; then
  mkdir "src/assets"
fi
if ! [[ -d "src/assets/fonts" ]]; then
  mkdir "src/assets/fonts"
  cp ./.assets/fonts/Roboto-Regular.woff2 ./src/assets/fonts/Roboto-Regular.woff2
fi
if ! [[ -d "src/assets/images" ]]; then
  mkdir "src/assets/images"
fi

if ! [[ -d "src/common" ]]; then
  mkdir "src/common"
fi
if ! [[ -d "src/common/styles" ]]; then
  mkdir "src/common/styles"
fi
if ! [[ -d "src/common/views" ]]; then
  mkdir "src/common/views"
fi

if ! [[ -d "src/components" ]]; then
  mkdir "src/components"
fi

if ! [[ -d "src/layouts" ]]; then
  mkdir "src/layouts"
fi

if ! [[ -d "src/pages" ]]; then
  mkdir "src/pages"
fi
if ! [[ -d "src/pages/Home" ]]; then
  mkdir "src/pages/Home"
fi

if ! [[ -d "src/utils" ]]; then
  mkdir "src/utils"
fi
if ! [[ -d "src/utils/constants" ]]; then
  mkdir "src/utils/constants"
fi
if ! [[ -d "src/utils/helpers" ]]; then
  mkdir "src/utils/helpers"
fi
if ! [[ -d "src/utils/types" ]]; then
  mkdir "src/utils/types"
fi

if ! [[ -f "src/common/styles/_base.scss" ]]; then
cat <<EOF > "src/common/styles/_base.scss"
@import './variables';
@import './fonts';

* {
  all: unset;
  display: revert;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

li {
  list-style: none;
}

a {
  cursor: pointer;
}

body {
  max-width: 1920px;
  margin: 0 auto;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: $color-primary;
  background-color: $color-white;
}
EOF
fi 

if ! [[ -f "src/common/styles/_variables.scss" ]]; then
cat <<EOF > "src/common/styles/_variables.scss"
\$color-primary: #000;
\$color-accent: #f00;
\$color-white: #fff;
EOF
fi

if ! [[ -f "src/common/styles/_fonts.scss" ]]; then
cat <<EOF > "src/common/styles/_fonts.scss"
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  src: url('~fonts/Roboto-Regular.woff2') format('woff2');
}
EOF
fi

if ! [[ -f "src/common/views/index.html" ]]; then
cat <<EOF > "src/common/views/index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Some title</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
EOF
fi

if ! [[ -f "src/pages/Home/Home.tsx" ]]; then
cat <<EOF > "src/pages/Home/Home.tsx"
import './Home.scss'
import React, { FC } from 'react'

export const Home: FC = () => {
  return <React.Fragment></React.Fragment>
}
EOF
fi

if ! [[ -f "src/pages/Home/Home.scss" ]]; then
cat <<EOF > "src/pages/Home/Home.scss"
@import '~common/styles/variables';
EOF
fi

if ! [[ -f "./src/App.tsx" ]]; then
cat <<EOF > "./src/App.tsx"
import './common/styles/_base.scss'
import React, { FC } from 'react'

export const App: FC = () => {
  return <React.Fragment></React.Fragment>
}
EOF
fi

if ! [[ -f "./src/index.tsx" ]]; then
cat <<EOF > "./src/index.tsx"
import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

const rootElement = document.getElementById('root')

if (!rootElement) throw new Error()
const root = createRoot(rootElement)

root.render(<App />)
EOF
fi

rm -rf ./.assets
