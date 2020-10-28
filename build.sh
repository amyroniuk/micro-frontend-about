#!/bin/bash

repos=('https://github.com/amyroniuk/micro-frontend.git')

work_dir=$(pwd)
echo "Here: $work_dir"

echo "Clone microfrontend repos"
rm -rf ./tmp && mkdir ./tmp && cd ./tmp
for repo in $repos; do
    git clone ${repo}
done

echo "Copying microfrontends into core repo"
for repo in *; do
    echo "--$repo"
    if [ -d "$repo" ]; then
        for file in $repo/src/frontends/*; do
            if [ -d "$file" ]; then
                echo "----$file"
                cp -r $file ../src/frontends
           fi
        done
   fi
done

cd ../src/frontends
> index.js
for file in *; do
    if [ -d "$file" ]; then
        echo "export { default as $file } from './$file'" >> index.js
   fi
done

cd $work_dir
rm -rf tmp