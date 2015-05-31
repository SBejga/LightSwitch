#!/bin/bash
PATH="/srv/LightSwitch/"
FILE="server.js"

cd $PATH
forever $1 $FILE