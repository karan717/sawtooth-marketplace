/**
 * Copyright 2017 Intel Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ----------------------------------------------------------------------------
 * 
 * Code adapted by Karan Kajani from https://github.com/hyperledger-archives/sawtooth-marketplace.git
 */
'use strict'

const m = require('mithril')

const api = require('../services/api')
const forms = require('../components/forms')

/**
 * The Form for authorizing an existing user.
 */
const LoginForm = {
  view (vnode) {
    const setter = forms.stateSetter(vnode.state)

    return m('.login-form', [
      m('form', {
        onsubmit: (e) => {
          e.preventDefault()
          const credentials = {
            email: vnode.state.email,
            password: vnode.state.password
          }
          api.post('authorization', credentials)
            .then(res => {
              api.setAuth(res.authorization)
              m.route.set('/')
            })
            .catch(api.alertError)
        }
      },
      m('legend', 'Login Account'),
      forms.emailInput(setter('email'), 'Email'),
      forms.passwordInput(setter('password'), 'Password'),
      m('.container.text-center',
        'Or you can ',
        m('a[href="/signup"]',
          { oncreate: m.route.link },
          'create a new Account')),
      m('.form-group',
        m('.row.justify-content-end.align-items-end',
          m('col-2',
            m('button.btn.btn-primary',
              {'data-toggle': 'modal', 'data-target': '#modal'},
              'Login')))))
    ])
  }
}

module.exports = LoginForm
