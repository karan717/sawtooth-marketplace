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

# NOTE: Use `volumes` to make: sawbuck_app/public/
# available at: /usr/local/apache2/htdocs/

FROM httpd:2.4

ENV PATH $PATH:/project/sawtooth-marketplace/bin

RUN echo "\
\n\
ServerName sawbuck_app\n\
AddDefaultCharset utf-8\n\
LoadModule proxy_module modules/mod_proxy.so\n\
LoadModule proxy_http_module modules/mod_proxy_http.so\n\
ProxyPass /api http://market-rest-api:8000\n\
ProxyPassReverse /api http://market-rest-api:8000\n\
\n\
" >>/usr/local/apache2/conf/httpd.conf

EXPOSE 80/tcp
