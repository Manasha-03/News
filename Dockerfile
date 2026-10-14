FROM node:22-alphine AS build
copy package *.JSON./
RUN npm build 
copy..
RUN npm build run 
From ngix.alphine 
copy --From= app/build/dist/usr/share/ngix/html
Expose  80

