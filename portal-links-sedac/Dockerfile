# Etapa de build
FROM node:20 as builder

# Define o diretório de trabalho
WORKDIR /app

# Copia todos os arquivos
COPY . .

# Instala as dependências e gera o build
RUN npm install
RUN npm run build

# Etapa final: Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copia o build gerado para a pasta pública do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia o arquivo de configuração do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Expõe a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
