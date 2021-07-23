FROM php:8.0-apache

# DocumentRootの修正
ENV DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Composerのインストール
COPY --from=composer:2.1.4 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html/
