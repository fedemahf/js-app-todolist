#!/bin/bash
set -o errexit
set -o xtrace
docker build -t js-app-todolist .
