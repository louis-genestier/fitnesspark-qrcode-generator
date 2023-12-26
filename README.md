# Fitness Park QRCode Generator

## What is this ?

This is by no means a project to generate stolen QRCodes to get free access to Fitness Park. This only aim to generate QRCodes without using the app.  
My goal was to be able to use my Apple Watch to scan the QRCode and get access to the gym (using this API and [Shortcuts](https://developer.apple.com/shortcuts/)).

## How to use it ?

This project uses [Bun](https://bun.sh/).  
Install the dependencies with `bun install` and run the project with `bun dev`.  
Default port is 3000, you can change it by setting the `PORT` environment variable.

You will also need a Fitness Park account to be able to get your `id` and your `number`.
