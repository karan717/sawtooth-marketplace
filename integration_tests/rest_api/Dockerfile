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

FROM node:6

RUN apt-get update && \
    apt-get install -y --allow-unauthenticated -q python3-pip

RUN npm install -g dredd

RUN pip3 install \
    requests \
    dredd-hooks

WORKDIR /project/sawtooth-marketplace

ENV PATH $PATH:/project/sawtooth-marketplace/bin
