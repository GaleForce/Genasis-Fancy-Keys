# Genasis Fancy Keys
Coming soon, the ultimate mechanical keyboard enthusiast tool designed to allow you to cut your new designs at Genasis levels. Currently no tool exists to help the passionate Mechanical Keyboard community design new projects or plan out what sets of keycaps to buy in order to adequately, and beautifuly, decide what sets of keycaps are necessary to bring a project to life.

## Background
Being a longtime mechanical keyboard user, but a newly minted enthusiast, I first experienced this recently with Matt3o's brand new [MT3 keycap profile](http://matt3o.com/about-mt3-profile-and-devtty-set/). As I prefer 100% keyboards for my primary workstation, I knew I'd need a minimum of 3 different sets to complete a full keyboard. But merchants can only display so many permutations and obviously lack the creativity that an individual has when working on a unique project.

Given that three packs of the new MT3 caps would cost in excess of $100, I wanted to know what my keyboard would look like (or at least get a reasonable representation of the finished project). My only option was to take to Photoshop and painstakingly organize the keycaps from the three packs I chose. Massdrop, as the [sole distributor of Matt3o's new keycaps](https://www.massdrop.com/buy/massdrop-x-matt3o-devtty-custom-keycap-set), at least had a standard template they used to represent all of the caps across all of the packs. So, I downloaded the images and started laying the various permutations out until I found one I liked. This was the result, which didn't come out poorly but is really a rough mockup in every sense:

![Glorious mechanical keyboard with equally glorious keycaps](https://puu.sh/vzWxv/770aaf02ee.png)

## Finding a Better Approach
The solution wasn't all that hard to arrive at. Some websites already have limited tools that allow cutomers to customize their specific options on their specific keyboards. WASD Keyboard's [awesome customization tool](http://www.wasdkeyboards.com/index.php/products/mechanical-keyboard/wasd-v2-104-key-custom-mechanical-keyboard.html) comes to mind which I think everyone who has found themselves in this unique community, with a hobby they didn't expect to have, has played with at one time or another.

So the obvious solution was a tool, but how would I plan to build it? That was an easy decision too. Given a newfound interest in [ReactJS](https://facebook.github.io/react/) and Single Page Applications due to the ever-changing frontend development environment, and the necessity to learn it for my job (plus the evangelicism for ReactJS of one particular coworker, you know who you are), it seemed only natural to build this tool as a way of continuing to explore this new way of developing UI, UX, and its ability to build a progressive web application in the process.

## Goals
These goals are by no means finalized and I'm only listing them to provide a geeral idea of what you can do with Genasis Fancy Keys. Development will be largely impacted by my work schedule, the contrbution of other interested parties, and of course anyone else interested in contributing. Some currently planned features include:
* Choose a base keyboard layout
* Make small modifications to base keyboard layout (e.g. 104/108 key 100% layout)
* Change color of foundation elements to better represent the keyboard you're working off of
* Include a library of common and popular keycaps, divided into the sets they're sold as
* Apply sets of keycaps by area (all keys, alphanumeric keys, alphas only, numerics only, modifiers, etc.)
* Apply individual keycaps one at a time
* Allow for the user to upload keycap designs that aren't in the tool so it can be used for any project
* For known keycap sets, provide a list of what sets will be necessary to complete a build and an approximate cost