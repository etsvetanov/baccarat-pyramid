FROM python:3.5

ADD . /project/source

WORKDIR /project

RUN python -m venv env
ENV VENV=/project/env
WORKDIR /project/source/webserver/Baccarat
RUN $VENV/bin/pip install -e .
EXPOSE 6543
#RUN $VENV/bin/initialize_Baccarat_db development.ini

#ENTRYPOINT ["$VENV/bin/pserve"]
#CMD ["--reload", "container-dev.ini"]

CMD $VENV/bin/pserve --reload container-dev.ini