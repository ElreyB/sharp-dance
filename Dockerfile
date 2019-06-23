FROM alpine
COPY ci.sh /
CMD "/ci.sh"

ENTRYPOINT /bin/bash