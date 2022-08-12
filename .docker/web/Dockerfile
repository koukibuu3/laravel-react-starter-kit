FROM php:8.1-apache

# DocumentRootの修正
ENV DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# pdo_pgsqlのインストール
RUN apt-get update && apt-get -y install libpq-dev
RUN docker-php-ext-install pdo_pgsql

# Composerのインストール
COPY --from=composer:2.3.10 /usr/bin/composer /usr/bin/composer

# Node.jsのインストール
COPY --from=node:16.16.0 /usr/local/bin/node /usr/local/bin/
COPY --from=node:16.16.0 /usr/local/lib/node_modules /usr/local/lib/node_modules
RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm \
    && ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npx

WORKDIR /var/www/html/
