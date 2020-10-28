#!/bin/bash

for file in ../micro-frontend/src/frontends/*; do
    if [ -d "$file" ]; then
        echo "$file"
   fi
done