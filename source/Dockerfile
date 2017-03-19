FROM python:3.5
ADD . /project/source
WORKDIR /project
RUN python -m venv env
ENV VENV=/project/env
WORKDIR /project/source/webserver/Baccarat
RUN $VENV/bin/pip install -e .
RUN $VENV/bin/initialize_Baccarat_db development.ini
CMD $VENV/bin/pserve development.ini
EXPOSE 6543
