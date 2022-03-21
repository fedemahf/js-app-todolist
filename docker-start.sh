#!/bin/bash
docker run \
  --rm \
  --name js-app-todolist \
  -p 3000:3000 \
  -p 3001:3001 \
  js-app-todolist
