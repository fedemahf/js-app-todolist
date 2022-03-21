# "To-Do List" App

Web application that allows the user to create to-do items.

## Requirements

- Node.js v16.14.2
- npm v8.5.0

Tested on Debian GNU/Linux 11 (bullseye).

## Installation

Clone this repository.

```bash
git clone https://github.com/fedemahf/js-app-todolist.git
```

Install dependencies, build and deploy. Or just run: `./start.sh`

```bash
# Install dependencies
npm install

# Build
npm run build

# Deploy (ports 3000-3001)
npm run start
```

## Docker

You can run this app using Docker. Be sure that you clone the repository before you run the commands.

### `./docker-build.sh`
Create the container with the name "js-app-todolist".

### `./docker-start.sh`
Run the container and expose port 3000 and 3001.

### `./docker-stop.sh`
Stop the container.

### `./docker-remove.sh`
Remove the container.
