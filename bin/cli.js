#!/usr/bin/env node

const { execSync } = require("child_process")

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" })
  } catch (e) {
    console.error(`Failed to execude ${command}`, e)
    return false
  }
  return true
}

const repoName = process.argv[2]

const gitCheckout = `git clone --depth 1 https://github.com/homfarnam/React-template---CRA ${repoName}`

const installDepsComamnd = `cd ${repoName} && npm install --quite`

console.log("------")

console.log(`Cloning the repository with name ${repoName}`)

const checkedOut = runCommand(gitCheckout)

if (!checkedOut) process.exit(-1)

console.log(`Installing dependencies for ${repoName}`)

const installPackage = runCommand(installDepsComamnd)

if (!installPackage) process.exit(-1)

console.log(
  "Congratulations! You are ready. Follow the following commands to start"
)

console.log(`cd ${repoName} && npm start`)
