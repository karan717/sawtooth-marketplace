# Copyright 2017 Intel Corporation
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
#Code adapted by Karan Kajani from https://github.com/hyperledger-archives/sawtooth-marketplace.git
# -----------------------------------------------------------------------------

# This Dockerfile is for running protogen, lint, and unit-tests

FROM ubuntu:xenial

RUN echo "deb apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 8AA7AF1F1091A5FD" && \
    echo 'deb http://repo.sawtooth.me/ubuntu/1.0/stable xenial universe' >> /etc/apt/sources.list && \
    apt-get update && \
    apt-get install -y --allow-unauthenticated -q \
        python3-pip \
	python3-cffi \
        python3-sawtooth-sdk \
        python3-sawtooth-rest-api \
        python3-sawtooth-cli \
        python3-cchardet \
        python3-secp256k1 \
        python3-protobuf \
        python3-sawtooth-signing \
        cron-apt \
        curl \
	wget

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - \
    && apt-get install -y nodejs

RUN pip3 install coverage==4.4.1 
RUN pip3 install futures==2.2 
RUN pip3 install bcrypt==3.1.5 
RUN pip3 install ujson==3.1.0 
RUN pip3 install uvloop==0.14 
RUN pip3 install pycodestyle==2.3.1 
RUN pip3 install nose2==0.7.2 
RUN pip3 install pycrypto 
RUN pip3 install rethinkdb 
RUN pip3 install sanic==0.8.3 
RUN pip3 install itsdangerous==1.1.0


WORKDIR /project/sawtooth-marketplace

COPY sawbuck_app/package.json /project/sawtooth-marketplace/sawbuck_app/

RUN cd sawbuck_app/ && npm install

ENV PATH $PATH:/project/sawtooth-marketplace/bin
