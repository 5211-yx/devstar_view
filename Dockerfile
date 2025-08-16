# 第一阶段：node镜像打包
FROM node:20-alpine AS frontend-builder
WORKDIR /build-app
COPY . .
RUN npm install
RUN npm add -D vitepress
RUN npm run docs:build

# 第二阶段：nginx打包
FROM nginx:1.25-alpine 
EXPOSE 80
WORKDIR /app
# 替换nginx配置
COPY nginx.conf /etc/nginx/conf.d/default.conf
# 将第一阶段的静态文件复制到nginx中
RUN rm -rf /usr/share/nginx/html
RUN mkdir /usr/share/nginx/html
COPY --from=frontend-builder /build-app/docs/.vitepress/dist /usr/share/nginx/html

# 运行
CMD ["nginx", "-g", "daemon off;"]
