FROM nginx:1.11.13-alpine

RUN apk update \
    && apk add bash

# Link nginx logs to stdout and stderr
RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

RUN mkdir /webserver

# Copy these files into the image
ADD startup.sh /webserver/startup.sh
ADD nginx.conf /etc/nginx/nginx.conf

# Make them executatble
RUN chmod a+x /webserver/startup.sh

# Write the domain to the nginx configuration file
CMD ["./webserver/startup.sh"]
