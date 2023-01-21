function createBadge(license) {
 let badge = '';
  if (license === 'MIT') {
   badge = "![License:MIT](https://img.shields.io/  badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)"
  } else 
  if (license === 'GNU General Public License v3.0') {
    badge = "![License:GNU](https://img.shields.io/badge/License-GNU-brightgreen.svg)](https://opensource.org/licenses/GPL-3.0)"
  } else
  if (license === 'BSD 2-Claus Simplified License') { badge = "![License:BSD 2](https://img.shields.io/badge/License-BSD%202-brightgreen.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  } else
  if (license === 'BSD 3-Claus New or Revised License'){
   badge = "![License:BSD 3](https://img.shields.io/badge/License-BSD%203-brightgreen.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else
  if (license === 'GNU Affero General Public License v3.0'){
   badge = "![License: AGPL-3.0](https://img.shields.io/badge/License-GNU%20Affero%20General%20Public%20License%20v3.0-brightgreen.svg)](https://opensource.org/licenses/AGPL-3.0)"
  } else
  if (license === 'GNU General Public License v2.0'){
   badge = "![License: GNU General Public License v2.0](https://img.shields.io/badge/License-GPL--2.0-brightgreen.svg)](https://opensource.org/licenses/GPL-2.0)"
  } else
  if (license === 'GNU Lesser General Public License v2.1'){ 
   badge = "![License: GNU Lesser General Public License v2.1](https://img.shields.io/badge/License-GNU%20Lesser%20General%20Public%20License%20v2.1-brightgreen.svg)](https://img.shields.io/badge/License-GNU%20Lesser%20General%20Public%20License%20v2.1-brightgreen)"
  } else
  if (license === 'Mozilla Public License 2.0'){
   badge = "![License: Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)](https://img.shields.io/badge/License-MPL--2.0-brightgreen.svg)"
  } else
  if (license === 'The Unlicense'){
   badge = "![License: The Unlicense](https://img.shields.io/badge/License-unlicensed-brightgreen.svg)](https://opensource.org/licenses/unlicense)"
  }
  return badge;
 }

module.exports = {
  createBadge,
}


