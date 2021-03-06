import Vue from 'vue'
import { Button, Input, Select, Option, Checkbox, FormItem, Form, Upload, CheckboxGroup, InputNumber } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use(Button)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Select)
Vue.use(Option)
Vue.use(Checkbox)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Upload)
Vue.use(CheckboxGroup)
